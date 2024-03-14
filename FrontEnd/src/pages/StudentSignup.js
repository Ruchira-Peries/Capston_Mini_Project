import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Header from "../Components/header";
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import "../Styles/Signup.css";
import axios from 'axios'; 

const StudentSignup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userType: 'student', // Default to student
    email: '',
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.email === '' || formData.username === '' || formData.password === '') {
      console.error('Error: All fields must be filled');
      return;
    }
    
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(formData.email)) {
      console.error('Error: Invalid email format');
      return;
    }
    
    if (!passwordRegex.test(formData.password)) {
      console.error('Error: Password should contain at least 8 characters including one uppercase, lowercase, number, and symbol');
      return;
    }
    
    navigate("/otp");
    
    try {
      const response = await axios.post('http://localhost:5001/UserSignup', formData);
      console.log(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <Header />
      <div className="outer-container13">
        <Navbar />
        <div className="Signup-box">
          <div className="left-part-sig">
            <div className="left-content-sig">
              <h1 className="header-textL2">WELCOME TO UNIAID HEALTH CENTER </h1>
              <p className="para-textL2">Let's Get Started By Setting Up Your Account</p>
              <div className="sign-text2"><p>Already Have An Account?</p> <a href="\login"style={{ textDecoration: 'none' }}><h4>LogIn</h4></a>
            </div>
          </div>
          </div>

          <div className="right-part-sig">
            <div className="right-content-sig">
              <h1 className="header-textR">General Information</h1>
              <form onSubmit={handleSubmit}>
                <label>
                  Choose your role:
                  <select
                    name="userType"
                    value={formData.userType}
                    onChange={handleChange}
                    required
                  >
                    <option value="student">Student</option>
                    <option value="doctor">Doctor</option>
                  </select>
                </label>
                <br />
                <label>
                  Email:
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </label>
                <br />
                <label>
                  username:
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                  />
                </label>
                <br />
                <label>
                  Password:
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </label>
                <br />
                <div className='b-l1'>
                  <button type="submit" className='btn2'>Next</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default StudentSignup;
