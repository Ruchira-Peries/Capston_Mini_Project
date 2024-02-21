import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Components/header";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "../Styles/TwoPartitions.css";

const Appoinments = () => {
  const navigate = useNavigate();

  // Check if the user is signed in
  const isSignedIn = false; // You would typically get this from your authentication state

  // Handle the button click for online appointments
  const handleOnlineAppointment = () => {
    if (isSignedIn) {
      navigate("/onlineappointment");
    } else {
      navigate("/signin"); // Redirect to the sign-in page if not signed in
    }
  };

  // Handle the button click for physical appointments
  const handlePhysicalAppointment = () => {
    if (isSignedIn) {
      navigate("/physicalappointment");
    } else {
      navigate("/signin"); // Redirect to the sign-in page if not signed in
    }
  };

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
          <p className="sign-text">
                {!isSignedIn && (
                  // Show sign-up link if not signed in
                  <>
                    Don't have an account? <a href="/signup">Sign Up</a>
                  </>
                )}
              </p>
          </div>
        </div>

        <div className="right-part">
        <div className="right-content">
          <h1 className="header-text">Choose your consultation Method</h1>
          <p className="para-text">Choose your preferred consultation method for your appointment</p>
          <button className="btn" onClick={()=> navigate("/onlineappoinment")}>Online Consultation</button><br />
          <button className="btn" onClick={()=> navigate("/physicalappoinment")}>Physical Consultation</button>
          </div>
        </div>
      </div>
      <Footer />
      </div>
   </>
  );
};

export default Appoinments;
