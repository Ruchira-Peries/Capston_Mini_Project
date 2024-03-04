import React, { useState } from 'react';
import Header from "../Components/header";
import Footer from '../Components/Footer';
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
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
    
    try {
      const response = await axios.post('http://localhost:5001/UserLogin', formData);
      
      // Check the response from the server for success or failure
      if (response.data.success) {
        // If login is successful, redirect or perform any necessary actions
        console.log('Login successful');
      } else {
        // If login fails, display an error message
        console.error('Login failed:', response.data.message);
        alert('Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  return (
    <>
      <Header />
      <div className="outer-container">
        <div className="appoinment-box">
          <div className="left-part">
            <div className="left-content">
              <h1 className="header-text">Log in</h1>
              <p className="para-text">Easily reserve your time without visiting and save your valuable time</p>
              <p className="sign-text">Already have an account? <a href="\login">Login</a></p>
            </div>
          </div>

          <div className="right-part">
            <div className="right-content">
              <h1 className="header-text">Log In</h1>
              <form onSubmit={handleSubmit}>
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
                <a href="#">Forgot password?</a>
                <button type="submit" className='btn'>Log in</button>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Login;
