import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Components/header";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "../Styles/Appoinments.css";


const Appoinments = () => {
  const navigate = useNavigate();
  return (
   <>
    <Header/>
    <div className="outer-container">
    <Navbar/>
    <div className="appoinment-box">
        <div className="left-part">
          <div className="left-content">
        <h1 className="header-text">Make your appointment</h1>
          <p className="para-text">Easily reserve your time without visiting and save your valuable time</p>
          <p className= "sign-text">Don't have an account? <a href="\signup1">Sign Up</a></p>
          </div>
        </div>

        <div className="right-part">
        <div className="right-content">
          <h1 className="header-text">Choose your consultation Method</h1>
          <p className="para-text">Choose your preferred consultation method for your appointment</p>
          <button className="secondary-button" onClick={()=> navigate("/onlineappoinment")}>Online Consultation</button><br />
          <button className="secondary-button" onClick={()=> navigate("/physicalappoinment")}>Physical Consultation</button>
          </div>
        </div>
      </div>
      <Footer />
      </div>
   </>
  );
};

export default Appoinments;