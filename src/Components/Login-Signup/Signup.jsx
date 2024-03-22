import React, { useState } from "react";
import "./Login-Signup.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
function Signup() {
  const [formData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    Mobile: "",
    Email: "",
    Password: "",
  });
  const Navigate = useNavigate();
  const formHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const { FirstName, LastName, Mobile, Email, Password } = formData;
      const response = await axios.post("http://localhost:5000/signup", {
        FirstName,
        LastName,
        Mobile,
        Email,
        Password,
      });
      console.log(response.data);
      Navigate("/");
    } catch (error) {
      console.error("Error occurred:", error);
      if (error.response) {
        console.log("Server error:", error.response.data);
      } else if (error.request) {
        console.log("Network error:", error.request);
      } else {
        console.log("Error:", error.message);
      }
    }
  };
  

  return (
    <div className="signup-container">
      <div>
        <div className="signup-head">
          <h1>Sign up</h1>
          <p>It's quick and easy</p>
        </div>
        <div className="signup-form">
          <div className="signup-name">
            <input
              type="text"
              name="FirstName"
              value={formData.FirstName}
              onChange={formHandler}
              placeholder="First Name"
            />
            <input
              type="text"
              name="LastName"
              value={formData.LastName}
              onChange={formHandler}
              placeholder="Last Name"
            />
          </div>

          <div className="signup-details">
            <input
              className="mobile"
              type="number"
              name="Mobile"
              value={formData.Mobile}
              onChange={formHandler}
              placeholder="Mobile Number"
            />

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
            Already have an account ?{" "}
            <Link to={"/"}>
              <span>Login Here</span>
            </Link>{" "}
          </p>

          <p>All rights reserved © {new Date().getFullYear()}</p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
