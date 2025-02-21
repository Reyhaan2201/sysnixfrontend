import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Addata.css";
import axios from "axios";

function Addata() {
  // const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [disc, setDisc] = useState('');
  const [file, setfile] = useState();
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();


  // Function to handle title change
  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  // Function to handle description change
  const handleChangeDisc = (e) => {
    setDisc(e.target.value);
  };

  // Button function
  const handleClick = async () => {
    console.log("clicked")
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', disc);
    formData.append('image', file);

    try {
      axios.post("https://sysnixbackend-4.onrender.com/addfile", formData)
      .then(res=>{
       console.log(res)
       if(res.data.Status === "Success")
        {
          console.log("Sucessed successfully")
        }
        else{
          console.log("Failed")
        }
       navigate("/products")
      })
    } catch (error) {
      console.error("There was an error submitting the form!", error);
      setErrorMessage('Error submitting form: ' + (error.response?.data?.message || error.message));
    }
  };

  return (
    <div>
      <div className="wrapper clearfix">
  
          <div className="add-container">
            <div className="add">
              <h1>Add products</h1>
              <label htmlFor="title" className="addlabel">Title</label>
              <input type="text" value={title} onChange={handleChange} />
              <label htmlFor="description" className="addlabel">Description</label>
              <input type="text" value={disc} onChange={handleChangeDisc} />
              <label htmlFor="insert" className="addlabel">Insert</label>
              <input type="file"  onChange={(e) => setfile(e.target.files[0])} name="image" id="image" />
              <button onClick={handleClick}>ADD PRODUCT</button>
              {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            </div>
          </div>
        
      </div>
    </div>
  );
}

export default Addata;
