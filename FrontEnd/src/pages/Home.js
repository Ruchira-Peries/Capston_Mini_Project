// import React from "react";
import React, { useState } from "react";
import BannerImage from "../Assests/Home image.png";
import EllipseBackground from "../Assests/Ellipse 95.png";
import RectangleBackground from "../Assests/Rectangle 23.png";
import DotBackground from "../Assests/Dot Ornament.png";
import AboutBackgroundImage from "../Assests/aboutimage.png";
import RectangleBG from "../Assests/Rectangle 24.png"
import service1 from "../Assests/service1.png"
import service2 from "../Assests/service2.png"
import service3 from "../Assests/service3.png"
import service4 from "../Assests/service4.png"
import service5 from "../Assests/service5.png"
import doctor1 from "../Assests/doctor1.png"
import doctor2 from "../Assests/doctor2.png"
import doctor3 from "../Assests/doctor3.png"
import doctor4 from "../Assests/doctor4.png"
import doctor5 from "../Assests/doctor5.png"
import doctor6 from "../Assests/doctor6.png"
import doctor7 from "../Assests/doctor7.png"
import arrow1 from "../Assests/left-arrow 2.png"
import arrow2 from "../Assests/right-arrow 2.png"
import 'react-fancy-circular-carousel/FancyCarousel.css';
import FancyCarousel from "react-fancy-circular-carousel";
import Navbar from "../Components/Navbar";
import Header from "../Components/header";
import "../Styles/Home.css";

const ImageSlider = () => {
  const slides = [
    { image: doctor1, text: 'Text 1',text1:'These are our beloved staff that always there for you fgd dfdfg dh dhs df sdfh dhd' },
    { image: doctor2, text: 'Text 2',text1:'These are our beloved staff that always there for you fgd dfdfg dh dhs df sdfh dhd' },
    { image: doctor3, text: 'Text 2',text1:'These are our beloved staff that always there for you fgd dfdfg dh dhs df sdfh dhd' },
    { image: doctor4, text: 'Text 2',text1:'These are our beloved staff that always there for you fgd dfdfg dh dhs df sdfh dhd' },
    { image: doctor5, text: 'Text 2',text1:'These are our beloved staff that always there for you fgd dfdfg dh dhs df sdfh dhd' },
    { image: doctor6, text: 'Text 2',text1:'These are our beloved staff that always there for you fgd dfdfg dh dhs df sdfh dhd' },
    { image: doctor7, text: 'Text 2',text1:'These are our beloved staff that always there for you fgd dfdfg dh dhs df sdfh dhd' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 2
    );
  };
  return (
    <div className="image-slider">
      <img src={slides[currentIndex].image} alt={`Slide ${currentIndex + 1}`} />
      <div className="text">
          <h3>{slides[currentIndex].text}</h3>
          <p>{slides[currentIndex].text1}</p>
                  <div className="about-buttons-container">
                    <button className="secondary-button">Learn More</button>
                  </div>
      </div>
      <button className="arrow" onClick={handlePrev}><img src={arrow1}></img></button>
      <button className="arrow" onClick={handleNext}><img src={arrow2}></img></button>
    </div>
  );
};

const Home = () => {
const [focusElement, setFocusElement] = useState(0);
const images = [service1, service2, service3, service4,service5];
const info = ['Mental Health','Update Your Medical Profile','Online Appointments','Online video Consultation' ,'Emergency Service' ];

return (
    <>
    {/*Home-Banner*/}
    <Header/>
    <div className="outer-container">
    <Navbar/>
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
          <button className="secondary-button">
            Sign Up Now {" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
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

    {/*Our Services*/}
      <div className="outer-container4">
        <div className="service-container">
            <div className="service-text-section">
                <h1 className="primary-heading1">Our Services</h1>
                <p className="primary-text1">Welcome to our comprehensive suite of services designed to meet your unique needs. </p>
                <button className="secondary-button">Learn More</button>
            </div> 
            <div className="service-images-section">
                <div className="carousel">
                <FancyCarousel 
                images={images} 
                setFocusElement={setFocusElement}
                carouselRadius={170}
                peripheralImageRadius={70}
                peripheralImageBoxShadow = {0}
                centralImageBoxShadow = {0}
                // centralImageBoxShadow = {'5px 10px 18px #888888'}
                centralImageRadius={85}
                // focusElementStyling={{border: '2px solid #007EA7'}}
                autoRotateTime={2}
                border={false}
                // borderHexColor={0}
                />
                <div className="info-box-wrapper">
                <p> {info[focusElement]} </p>
                </div>
                </div>
            </div>
        </div>
    </div>
    {/*Our Staff*/}
    <div className="outer-container5">
        <div className="staff-container">
            <div className="staff-head-text">
                <h3 className="primary-heading2">
                Our Staff
                </h3>
                <p className="primary-text2">
                These are our beloved staff that always there for you
                </p>
            </div>
            <div className="staff-bottum-container">
                <div className="app1">
                    {/* <ImageSlider images={images} texts={texts} /> */}
                    <ImageSlider/>
                </div>
            </div>
        </div>
    </div>
  </>
  );
};

export default Home;