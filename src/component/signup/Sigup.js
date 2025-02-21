import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Validation from "./Signvalidation";
import axios from "axios";
// import './User.css'; // Assuming you have a User.css file for styling

function Sigup() {
    const [values, setValues] = useState({
        name: "",
        email: '',
        password: ''
    });
    const navigate = useNavigate();

    const [error, setError] = useState({});

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const validationErrors = Validation(values);
        setError(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            axios.post("https://sysnixbackend-4.onrender.com/signup", values)
                .then(res => {
                    if (res.data.message === "User registered successfully") {
                        console.log(res)
                        navigate("/");
                    } else {
                        alert("Registration failed");
                    }
                })
                .catch(err => console.log(err.message));
        }
    }

    return (
        <div className="login-wrap">
            <form className="loginform" onSubmit={handleSubmit}>
                <h1>Create Account</h1>
                <div className="fguser">
                    <label htmlFor="name"><strong>Name:</strong></label>
                    <input
                        type="text"
                        name='name'
                        onChange={handleInput}
                        required
                    />
                    {error.name && <span className='erred'>{error.name}</span>}
                </div>
                <div className="fguser">
                    <label htmlFor="email"><strong>Email:</strong></label>
                    <input
                        type="email"
                        name='email'
                        onChange={handleInput}
                        required
                    />
                    {error.email && <span className='erred'>{error.email}</span>}
                </div>
                <div className="fguser">
                    <label htmlFor="password"><strong>Password:</strong></label>
                    <input
                        type="password"
                        name='password'
                        onChange={handleInput}
                        required
                    />
                    {error.password && <span className='erred'>{error.password}</span>}
                </div>
                <button type="submit" className='btn-login'><strong>Create Account</strong></button>
                <p>You agree to our terms and policies.</p>
                <Link to="/login" className='btncreate' style={{ textDecoration: "none", padding: "10px 155px" }}>Login</Link>
            </form>
        </div>
    );
}

export default Sigup;
