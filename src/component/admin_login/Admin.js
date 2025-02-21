import React, { useState } from 'react';
import './Admin.css';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

function Admin() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate= useNavigate()

  const onSubmit = async (data) => {
    try {
      const api = "https://sysnixbackend-4.onrender.com/admin/admin-form";
      const res = await axios.post(api, data);
      console.log(res)
      setSuccessMessage("Logged in successfully!");
      navigate("/addata")
      setErrorMessage('');
    } catch (error) {
      console.error("There was an error logging in!", error);
      setErrorMessage('Error submitting form: ' + (error.response?.data?.message || error.message));
    }
  };

  return (
    <div className="wrapper clearfix">
      <section className="padding paddv-100">
        <div className="container">
          <div className="admin_form">
            <div className="widget widget-contact" id="quickform">
              <h2>Admin Login</h2>
              {successMessage ? (
                <div>
                  <h1>Thank You!</h1>
                  <p>successfully logged in </p>
                </div>
              ) : (
                <form className="login-form" id="login-form" onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-group">
                    <input type="text" className="form-control" name="username" placeholder="Username"
                      {...register('username', { required: 'Username is required', maxLength: 20 })}
                    />
                    {errors.username && <span className="error-message">{errors.username.message}</span>}
                  </div>
                  <div className="form-group">
                    <input
                      id="password"
                      type="password"
                      className="form-control"
                      name="password"
                      placeholder="Password"
                      {...register('password', {
                        required: 'Password is required',
                        minLength: {
                          value: 8,
                          message: 'Password must be at least 8 characters long',
                        },
                      })}
                    />
                    {errors.password && <span className="error-message">{errors.password.message}</span>}
                  </div>
                  {errorMessage && <p className="error-message">{errorMessage}</p>}
                  <button className="logbtn" id="butlog" type="submit">Login</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Admin;
