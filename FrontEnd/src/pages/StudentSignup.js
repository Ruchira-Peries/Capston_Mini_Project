import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Header from "../Components/header";
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import axios from 'axios'; 

const StudentSignup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userType: 'student',
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
      <div className="outer-container">
        <Navbar />
        <div className="appoinment-box">
          <div className="left-part">
            <div className="left-content">
              <h1 className="header-text">Welcome To UniAid health center </h1>
              <p className="para-text">Let's Get Started By Setting up your account </p>
              <p className="sign-text">Already have an account? <a href="\login">Login</a></p>
            </div>
          </div>

          <div className="right-part">
            <div className="right-content">
              <h1 className="header-text">General Information</h1>
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
                <button type="submit" className='secondary-button'>Next</button>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default StudentSignup;
