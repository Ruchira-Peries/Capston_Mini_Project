import React, { useState } from 'react';
import Header from "../Components/header";
import Footer from '../Components/Footer';
import axios from "axios";

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
    const { email, password } = formData;


    try {
      const response = await fetch('http://localhost:5001/UserLogin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Login successful:', data);
    
      } else {
        const errorData = await response.json();
        console.error('Login failed:', errorData);
        
      }
    } catch (error) {
      console.error('Error during login:', error);
      
    }
  

    

  
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

    const emailIsValid = validateEmail(email);

    const passwordIsValid = passwordRegex.test(password);

    if (!emailIsValid) {
      alert("Please enter a valid email address.");
    } else if (!passwordIsValid) {
      alert("Password must be at least 8 characters long and contain at least one capital letter, one lowercase letter, one number, and one symbol.");
    } else {
      console.log("Form submitted:", formData);
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