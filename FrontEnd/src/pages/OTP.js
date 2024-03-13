import React, {useState} from 'react';
import axios from 'axios';
import Header from "../Components/header";
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const OTP = () => {
  const [formData, setFormData] = useState({
    otp: '',
    message: ''
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
    console.log(formData);

    try {
      const response = await axios.post('http://localhost:5001/verifyOTP', { otp: formData.otp });
      
      setFormData(prevState => ({
        ...prevState,
        message: response.data.message
      }));
    } catch (error) {
      console.error('Error:', error);
    }
  };
  //   const handleResendOTP = async () => {
  //     try {
  //       const response = await axios.post('http://localhost:5001/resendOTP');
        
  //       setFormData(prevState => ({
  //         ...prevState,
  //         message: response.data.message
  //       }));
  //     } catch (error) {
  //       console.error('Error:', error);
  //     }

  // };
  return (
    <>
    <Header/>
    <div className="outer-container">
    <Navbar/>
    <div className="appoinment-box">
        <div className="left-part">
          <div className="left-content">
        <h1 className="header-text">login verification</h1>
          <p className="para-text">Access To Our Services by log in</p>
          <p className= "sign-text">Already have an account? <a href="\login">Login</a></p>
          </div>
        </div>

        <div className="right-part">
        <div className="right-content">
          <h1 className="header-text">OTP Confirmation</h1>
          <form onSubmit={handleSubmit}>
      <label>
      Enter your OTP code that received in your email:
        <input
          type="text"
          name="otp"
          value={formData.otp}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      {/* <p className='para-text'>Didn't get the OTP?  <a href='/resendOTP' onClick={handleResendOTP}>Resend OTP</a></p> */}
      <p className='para-text'>Didn't get the OTP?  <a href='/resendOTP'>Resend OTP</a></p>
      <button type="submit" className='btn'>Confirm</button>
    </form>
    {formData.message && <p className='para-text'>{formData.message}</p>}
            </div>
          </div>
        </div>
      </div>
      <Footer />   
   </>
  )
}

export default OTP;