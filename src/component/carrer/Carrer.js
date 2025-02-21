import React,{useState} from "react";
import "./Carrer.css";
import card5 from "../carrer/5.jpg";
function Carrer() {
  const [successMessage, setSuccessMessage] = useState('');

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    position: '',
    education: '',
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formDataToSend = new FormData();
    formDataToSend.append('firstName', formData.firstName);
    formDataToSend.append('lastName', formData.lastName);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('phone', formData.phone);
    formDataToSend.append('address', formData.address);
    formDataToSend.append('position', formData.position);
    formDataToSend.append('education', formData.education);
    formDataToSend.append('resume', formData.resume);
    
    try {
      const response = await fetch('https://sysnixbackend-4.onrender.com/api/job-application', {
        method: 'POST',
        body: formDataToSend,
      });
      
      if (response.ok) {
        console.log('Application submitted successfully');
        setSuccessMessage('Application submitted')
        // Reset form fields if needed
      } else {
        console.error('Failed to submit application');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  

  return <div>
    <div className="wrapper clearfix carrer">
        <div className="carrer-container">
            <section className="carrer-sec">
              <img src={card5} alt="carrier_img" />
                <h1>career</h1>
                <p className="career-p" style={{fontSize: "32px",color: "white"}}>Be a part of something great</p>
            </section>
            </div>
            <div className="carrer-container2">
              <h1>What Our Employees Say</h1>
             <p style={{textAlign: "center",fontSize: "20px",padding: "10px 5px"}}> "Working at Sysnix automation has been a transformative experience. The opportunities for growth and the supportive team culture have been invaluable."</p>
            </div>
            <div className="carrer-container3">
              {successMessage ? (
                 <div>
                 <h1 style={{color: "white",textAlign: "center",fontSize: "27px",padding: "20px 0"}}>Thank You!</h1>
                 <p style={{color:"white",textAlign: "center",fontSize: "25px",textTransform: "capitalize"}}>your job application has been submitted.</p>
               </div>
              ): (
                <div className="form-container">
                <form onSubmit={handleSubmit}>
                  <h2 style={{color: "white",textAlign: "center",marginBottom: "20px",fontWeight: "400",fontSize: "29px",textTransform: "uppercase"}}>Job Application Form</h2>
                  <div className="form-row">
                  <div className="form-groupp">
                    <label>First Name</label>
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleChange}  required />
                  </div>
                  <div className="form-groupp">
                    <label>Last Name</label>
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
                  </div>
                  </div>
                
                  <div className="form-groupp">
                    <label>Email Address</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                  </div>
                  <div className="form-groupp">
                    <label>Phone Number</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
                  </div>
                  <div className="form-groupp">
                    <label>Address</label>
                    <input type="text" name="address" value={formData.address} onChange={handleChange} required />
                  </div>
                  <div className="form-groupp">
                    <label>Position Applying For</label>
                    <select name="position" value={formData.position} onChange={handleChange} required >
                      <option value="">Select a position</option>
                      <option value="MD">Managing Director (MD)</option>
                      <option value="ME">Mechanical Engineer (ME)</option>
                      <option value="EE">Electrical Engineer (EE)</option>
                      <option value="CE">Civil Engineer (CE)</option>
                      <option value="HR">Human Resources (HR)</option>
                      <option value="Sales">Sales</option>
                      <option value="Marketing">Marketing</option>
                      <option value="Technician">Technician</option>
                      <option value="Manager">Manager</option>
                    </select>
                  </div>
                  <div className="form-groupp">
                    <label>Highest Level of Education</label>
                    <select name="education" value={formData.education} onChange={handleChange} required>
                      <option value="">Select education level</option>
                      <option value="High School">High School</option>
                      <option value="Associate's Degree">Associate's Degree</option>
                      <option value="Bachelor's Degree">Bachelor's Degree</option>
                      <option value="Master's Degree">Master's Degree</option>
                      <option value="Doctorate">Doctorate</option>
                    </select>
                  </div>
                  <div className="form-groupp">
                    <label>Upload Resume/CV</label>
                    <input type="file" name="resume" onChange={handleFileChange} accept=".pdf,.doc,.docx" required />
                  </div>
                  <button type="submit">Submit</button>
                </form>
              </div>
              )

              }
           
            </div>
            
        
        
     
      
    </div>
  </div>;
}

export default Carrer;
