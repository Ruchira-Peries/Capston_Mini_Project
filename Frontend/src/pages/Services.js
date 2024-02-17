import React from "react";
import Header from "../Components/header";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
//import MentalService from "../Assests/service01";
import "../Styles/Services.css";


const Services = () => {
  return (
   <>
    <Header/>
    <div className="outer-container">
    <Navbar/>
    <div className="info-container">
    <div className="image-container">
        
      </div>
      <div className="paragraph-container">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam justo ac sapien hendrerit, eget vestibulum felis facilisis.
        </p>
      </div>

    </div>
    </div>
    <Footer/>
   </>
  );
};

export default Services;