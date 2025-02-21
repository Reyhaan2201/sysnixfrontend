
import React, {  useState, useContext} from 'react';
import './User.css';
import { Link, useNavigate } from 'react-router-dom';
import Validation from "./Loginvalidation";
import axios from "axios";
import UserContext from './Usercontext';


function User() {
  const [values, setValues] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState({});
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);


  const handleInput = (event) => {
    setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const validationErrors = Validation(values);
    setError(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      const ressponse = "http://localhost:3213/login"
      try {
        const res = await axios.post(ressponse, values);
       
        if (res.status === 200) {
          console.log(res);
          const user = res.data[0];
          setUser({ name: user.name });
          navigate("/support");
        } else {
          alert(res.data.error || "No record existed");
        }
      } catch (err) {
        console.log("Request failed:", err.message);
        if (err.response && err.response.status === 401) {
          alert('Invalid email or password');
        } else {
          alert(`Login failed: ${err.message}`);
        }
      }
    }
  }
  // // fetching name
  // useEffect(()=>
  // {
  //   fetch("http://localhost:3213/sign/name")
  //   .then(response => response.json)
  //   .then(data=> console.log(data))
  // },[])

  return (
    <div className="login-wrap">
      <form className="loginform" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className="form-group fguser">
          <label htmlFor="email"><strong>Email:</strong></label>
          <input
            type="email"
            placeholder='Enter email'
            name='email'
            onChange={handleInput}
            required
          />
          {error.email && <span className='erred'>{error.email}</span>}
        </div>
        <div className="form-group fguser">
          <label htmlFor="password"><strong>Password:</strong></label>
          <input
            type="password"
            placeholder='Enter password'
            name='password'
            onChange={handleInput}
            required
          />
          {error.password && <span className='erred'>{error.password}</span>}
        </div>
        <button type="submit" className='btn-login'><strong>Login</strong></button>
        <p>You agree to our terms and policies.</p>
        <Link to="/sign" className='btncreate'>Create account</Link>
      </form>
    </div>
  );
}

export default User;
