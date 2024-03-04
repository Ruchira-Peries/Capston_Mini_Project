import React from "react";
import Header from "../Components/header";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Appoinments = () => {
  return (
   <>
    <Header/>
    <div className="outer-container">
    <Navbar/>
    <div className="appoinment-box">
        <div className="left-part">
          <div className="left-content">
        <h1 className="header-text">We are UNIAID</h1>
          <p className="para-text">Get to know us</p>
          </div>
        </div>

        <div className="right-part">
        <div className="right-content">
          <h1 className="header-text">About Us</h1>
          <p className="para-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla facilisi cras fermentum odio eu feugiat. Sodales neque sodales ut etiam sit amet. Ante </p>
          <h1 className="header-text">What we do</h1>
          <p className="para-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla facilisi cras fermentum odio eu feugiat. Sodales neque sodales ut etiam sit amet. Ante </p>
          </div>
        </div>
      </div>
      <Footer />
      </div>
   </>
  );
};

export default Appoinments;
