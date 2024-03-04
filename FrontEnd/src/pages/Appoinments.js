import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Components/header";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "../Styles/Appointment.css";
import axios from "axios";

const Appoinments = () => {
  const navigate = useNavigate();

  const isSignedIn = false; 

  const handleOnlineAppointment = () => {
    if (isSignedIn) {
      axios
        .post("/api/createOnlineAppointment", {
          appointmentType: "online", // Or any other relevant data you need to send
          // Add more data as needed
        })
        .then((response) => {
          // Handle successful response
          navigate("/confirmation");
        })
        .catch((error) => {
          // Handle error response
          console.error("Error creating appointment:", error);
        });
    } else {
      navigate("/signin"); // Redirect to the sign-in page if not signed in
    }
  };

  const handlePhysicalAppointment = () => {
    if (isSignedIn) {
      axios
        .post("/api/createPhysicalAppointment", {
          appointmentType: "physical", // Or any other relevant data you need to send
          // Add more data as needed
        })
        .then((response) => {
          // Handle successful response
          navigate("/confirmation");
        })
        .catch((error) => {
          // Handle error response
          console.error("Error creating appointment:", error);
        });
    } else {
      navigate("/signin"); // Redirect to the sign-in page if not signed in
    }
  };


  return (
   <>
    <Header/>
    <div className="outer-container10">
    <Navbar/>
    <div className="appoinment-box">
        <div className="left-part-app">
          <div className="left-content-app">
        <h1 className="header-textL">MAKE YOUR APPOINTMENT</h1>
          <p className="para-textL">Save Your Time</p>
          <div className="sign-text1">
                {!isSignedIn && (
                  // Show sign-up link if not signed in
                  <>
                    <p>Don't have an account? </p><a href="/Selection"style={{ textDecoration: 'none' }}><h4>SignUp</h4></a>
                  </>
                )}
              </div>
          </div>
        </div>

        <div className="right-part-app">
        <div className="right-content-app">
          <div className="u-a">
            <h1 className="header-textR">Choose Your Consultation Method</h1>
            <p className="para-textR">Choose your preferred consultation method for your appointment</p>
          </div>
            <div className="b-a">
              <button className="btn" onClick={()=> navigate("/OnlineAppointments")}>Online Consultation</button>
              <button className="btn" onClick={()=> navigate("/PhysicalAppoinment")}>Physical Consultation</button>
            </div>
        </div>
        </div>
      </div>
      <Footer />
      </div>
   </>
  );
};

export default Appoinments;
