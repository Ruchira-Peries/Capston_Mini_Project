import React, {useState} from 'react';
import axios from 'axios';
import Header from "../Components/header";
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import "../Styles/OTP.css";

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
    const handleResendOTP = async () => {
      try {
        const response = await axios.post('http://localhost:5001/resendOTP');
        
        setFormData(prevState => ({
          ...prevState,
          message: response.data.message
        }));
      } catch (error) {
        console.error('Error:', error);
      }

  };
  return (
    <>
    <Header/>
    <div className="outer-container16">
    <Navbar/>
    <div className="OTP-box">
        <div className="left-part-otp">
          <div className="left-content-otp">
        <h1 className="header-textL1">LOGIN VERIFICATION</h1>
          <p className="para-textL1">Access To Our Services by Log In</p>
          <div className="sign-text1"><p>Don't Have An Account?</p> <a href="\selection"style={{ textDecoration: 'none' }}><h4>SignUp</h4></a>
          </div>
        </div>
        </div>

        <div className="right-part-otp">
        <div className="right-content-otp">
          <h1 className="header-textR">OTP Confirmation</h1>
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

      {/* <p className='para-textR'>Didn't get the OTP?  <a href='/resendOTP' onClick={handleResendOTP}>Resend OTP</a></p>
      <button type="submit" className='btn'>Confirm</button> */}
      <div className='bot'>
         <div className='b-l3'>
                <p>Didn't get the OTP?</p><a href='/resendOTP' onClick={handleResendOTP}  style={{ textDecoration: 'none' }}><h4>Resend OTP</h4></a>
          </div>
                <button type="submit" className='btn4'>Confirm</button>
        </div>
    </form>
    {formData.message && <p className='para-textR'>{formData.message}</p>}
            </div>
          </div>
        </div>
      </div>
      <Footer />   
   </>
  )
}

export default OTP;