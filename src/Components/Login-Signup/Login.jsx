import React, { useState } from "react";
import "./Login-Signup.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
function Login() {
  const [formData, setFormData] = useState({
    Email: "",
    Password: "",
  });
  const Navigate = useNavigate();
  const [errorMsg, seterrorMsg] = useState("");
  const formHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { Email, Password } = formData;
      const response = await axios.post("http://localhost:5000/login", {
        Email,
        Password,
      });
      console.log(response.data);
      Navigate("/home");
    } catch (error) {
      console.log("Error on passing data:", error);
      if (error.response && error.response.status === 401) {
        seterrorMsg("Invalid Email or Password");
      } else {
        seterrorMsg(
          "An error occurred while logging in. Please try again later."
        );
      }
    }
  };

  return (
    <div className="signup-container">
      <div>
        <div className="signup-head">
          <p style={{ color: "red", fontSize: "large" }}>{errorMsg}</p>
          <h1>Login</h1>
          <p>It's quick and easy</p>
        </div>
        <div className="signup-form">
          <div className="signup-details">
            <input
              type="email"
              name="Email"
              value={formData.Email}
              onChange={formHandler}
              placeholder="Email"
            />
            <input
              type="password"
              name="Password"
              value={formData.Password}
              onChange={formHandler}
              placeholder="Password"
            />
          </div>
        </div>
        <div className="signup-btn">
          <button className="signup-submit" onClick={handleSubmit}>
            Submit
          </button>
        </div>
        <div className="choice">
          <p>
            Create an Account ?{" "}
            <Link to={"/signup"}>
              <span>Click Here</span>
            </Link>{" "}
          </p>

          <p>All rights reserved © {new Date().getFullYear()}</p>
        </div>
      </div>
    </div>
  );
}

export default Login;
