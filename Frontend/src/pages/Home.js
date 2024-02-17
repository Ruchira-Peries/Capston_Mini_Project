import React from "react";
import { useNavigate } from "react-router-dom";
import BannerImage from "../Assests/Home image.png";
import EllipseBackground from "../Assests/Ellipse 95.png";
import RectangleBackground from "../Assests/Rectangle 23.png";
import DotBackground from "../Assests/Dot Ornament.png";
import AboutBackgroundImage from "../Assests/aboutimage.png";
import RectangleBG from "../Assests/Rectangle 24.png";
import Header from "../Components/header";
import Navbar from "../Components/Navbar";
import "../Styles/Home.css";


const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="outer-container">
      <Header />
      <Navbar />
      <div className="home-BGellipse">
          <img src={EllipseBackground} alt="" />
        </div>
        <div className="home-BGrectangle">
          <img src={RectangleBackground} alt="" />
        </div>
        <div className="home-Dot">
          <img src={DotBackground} alt="" />
        </div>
    <div className="home-container container">
      
      <div className="home-banner-container">
        <div className="home-text-section">
          <h1 className="primary-heading">
            Medical Records Management System
          </h1>
          <p className="primary-text">
            For a  healthier future
          </p>
          <button className="secondary-button" onClick={()=> navigate("/signup1")}>
            Sign Up Now</button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>

{/*About*/}
    <div className="outer-container3">
    <div className="About-BGrectangle">
          <img src={RectangleBG} alt="" />
    </div>
    <div className="about-section-container">
      {/* <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div> */}
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <h3 className="primary-heading">
          About Us
        </h3>
        <p className="primary-text">
          University of Sabaragamuwa Medical System is a government, university-based regional health system focused on serving the health care needs of students and university staff.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
        </div>
      </div>
    </div>
    </div>


    </div>
  );
};




export default Home;