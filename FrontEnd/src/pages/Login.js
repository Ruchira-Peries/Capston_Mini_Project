import React, { useState } from 'react';
import Header from "../Components/header";
import Footer from '../Components/Footer';
import Navbar from "../Components/Navbar";
import "../Styles/Login.css";
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
      if (response.status === 200) {
        // If login is successful, redirect or perform any necessary actions
        console.log('Login successful');
        // Redirect to a different page or perform any other action
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

  return (
    <>
      <Header />
      <div className="outer-container11">
      <Navbar/>
        <div className="login-box">
          <div className="left-part-log">
            <div className="left-content-log">
              <h1 className="header-textL1">FOR A HEALTHIER LIFE</h1>
              <p className="para-textL1">Access To Our Services by log in</p>
              <div className="sign-text1">
              <p>Don't Have An Account?</p> <a href="\Selection" style={{ textDecoration: 'none' }}><h4>SignUp</h4></a>
              </div>
            </div>
          </div>

          <div className="right-part-log">
            <div className="right-content-log">
              <h1 className="header-textR">Log In</h1>
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
                <div className='b-l'>
                <a href="#" className='t' style={{ textDecoration: 'none' }}><p>Forgot password?</p></a>
                <button type="submit" className='btn1'>Log in</button>
                </div>
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
