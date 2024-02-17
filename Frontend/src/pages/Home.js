// import React from "react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
import Mail from "../Assests/mail 1.png"
import Loca from "../Assests/location 1.png"
import Telephone from "../Assests/emergency-call 1.png"
import Emergency from "../Assests/emergencyicon.png"
import 'react-fancy-circular-carousel/FancyCarousel.css';
import FancyCarousel from "react-fancy-circular-carousel";
import Navbar from "../Components/Navbar";
import Header from "../Components/header";
import Footer from "../Components/Footer";

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
  const navigate = useNavigate();
  const [focusElement, setFocusElement] = useState(0);
  const images = [service1, service2, service3, service4,service5];
  const info = ['Mental Health','Update Your Medical Profile','Online Appointments','Online video Consultation' ,'Emergency Service' ];

  const daysOfWeek = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
  const contentMap = ['Content for Monday','Content for Tuesday','Content for Wednesday','Content for Thursday','Content for Friday','Content for Saturday','Content for Sunday',]
  const contentMap1 = ['Content for Monday','Content for Tuesday','Content for Wednesday','Content for Thursday','Content for Friday','Content for Saturday','Content for Sunday',
  ];
    const contentMap2 = ['Content for Monday','Content for Tuesday','Content for Wednesday','Content for Thursday','Content for Friday','Content for Saturday','Content for Sunday',
  ];
    const contentMap3 = ['Content for Monday','Content for Tuesday','Content for Wednesday','Content for Thursday','Content for Friday','Content for Saturday','Content for Sunday',
  ];
    const contentMap4 = ['Content for Monday','Content for Tuesday','Content for Wednesday','Content for Thursday','Content for Friday','Content for Saturday','Content for Sunday',
  ];
    const contentMap5 = ['Content for Monday','Content for Tuesday','Content for Wednesday','Content for Thursday','Content for Friday','Content for Saturday','Content for Sunday',
  ];
      const contentMap6 = ['9:00AM - 12:00PM ','9:00AM - 12:00PM','9:00AM - 12:00PM','9:00AM - 12:00PM','9.00AM - 12:00PM','9:00AM - 12:00PM','9:00AM - 12:00PM',
  ];
  const [currentDayIndex, setCurrentDayIndex] = useState(0);

  const switchToDay = (dayIndex) => {
    setCurrentDayIndex(dayIndex);
  };
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
          <button className="secondary-button" onClick={()=> navigate("/signup1")}>
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
          <button className="secondary-button" onClick={()=> navigate("/about")}>Learn More</button>
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
                <button className="secondary-button" onClick={()=> navigate("/Services")}>Learn More</button>
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
                centralImageRadius={85}
                autoRotateTime={2}
                border={false}
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
    {/*Daily Updates*/}
    <div className="outer-container6">
        <div className="primary-heading3">
          <h3>Daily Updates</h3>
        </div>
        <div className="dailyU-table-container">
              <div className="day-switcher-header">
                {daysOfWeek.map((day, index) => (
                  <div
                    key={index}
                    className={`day-switcher-item ${index === currentDayIndex ? 'active' : ''}`}
                    onClick={() => switchToDay(index)}
                  >
                    {day}
                  </div>
                ))}
            </div>

              <div className="day-content">
                  <div className="day-content-details">
                    <p>{contentMap[currentDayIndex]}</p>
                    <p>{contentMap1[currentDayIndex]}</p>
                    <p>{contentMap2[currentDayIndex]}</p>
                    <p>{contentMap3[currentDayIndex]}</p>
                    <p>{contentMap4[currentDayIndex]}</p>
                    <p>{contentMap5[currentDayIndex]}</p>
                  </div>
                  <div className="day-content-time">
                    <p>{contentMap6[currentDayIndex]}</p>
                    <p>{contentMap6[currentDayIndex]}</p>
                    <p>{contentMap6[currentDayIndex]}</p>
                    <p>{contentMap6[currentDayIndex]}</p>
                    <p>{contentMap6[currentDayIndex]}</p>
                    <p>{contentMap6[currentDayIndex]}</p>
                  </div>
              </div>
        </div>
    </div>
    {/*Get in Touch*/} 
    <div className="outer-container7">
          <div className="praimary-heading4">
            <h3>Get In Touch With Us</h3>
          </div>
    </div>
    <div className="outer-container8">
          <div className="contact-container">
            <div className="mail-card">
                <div className="mail-icon">
                      <img src={Mail} alt="" />
                </div>  
                <div className="mail-text">
                    <h3>Email Us</h3>
                    <p>info@sab.ac.lk</p>
                </div>
            </div>
            <div className="mail-card">
                <div className="mail-icon">
                      <img src={Loca} alt="" />
                </div>  
                <div className="mail-text">
                    <h3>Head Office</h3>
                    <p>info@sab.ac.lk</p>
                </div>
            </div>
            <div className="mail-card">
                <div className="mail-icon">
                      <img src={Telephone} alt="" />
                </div>  
                <div className="mail-text">
                    <h3>Telephone</h3>
                    <p>0778193564</p>
                    <p>0778193564</p>
                </div>
            </div>
            <div className="mail-card">
                <div className="mail-icon">
                      <img src={Emergency} alt="" />
                </div>  
                <div className="mail-text">
                    <h3>Emergency</h3>
                    <p>1990</p>
                    <p>1990</p>
                </div>
            </div>
          </div>
    </div>
    <div className="outer-container9">
        <Footer/>
    </div>
  </>
  );
};

export default Home;