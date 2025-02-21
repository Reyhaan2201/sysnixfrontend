import React from "react";
import { useNavigate } from "react-router-dom";
import "./Verify.css";
import avatar from "../verify/avatar.png";

function Verify() {
  const navigate = useNavigate();

  const handleclicksupport = (event) => {
    event.preventDefault();
    let email = document.getElementById("email").value;
    let pwd = document.getElementById("pwd").value;
    console.log(email, pwd);
    if (email === "sysnix@gmail.com" && pwd === "12345678") {
      navigate("/support");
      console.table({ email: email, pwd: pwd });
    } else {
      alert("Invalid Credentials");
      console.table({ email: email, pwd: pwd });
      return false;
    }
  };

  return (
    <div>
      <div className="wrapper clearfix">
        <div className="verify-container">
          <div className="verify-modal">
            <div className="img-container">
              <img src={avatar} alt="" />
            </div>
            <div className="form-container">
              <form className="input-form">
                <h1>Verify yourself</h1>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Enter Email" />
                <label htmlFor="password">Password</label>
                <input type="password" id="pwd" placeholder="Enter Password" />
                <button type="submit" onClick={handleclicksupport}>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Verify;
