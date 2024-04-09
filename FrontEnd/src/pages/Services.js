import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Components/header";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Service from "../Assests/s1.png"
import Service2 from "../Assests/vdo.png"
import Service3 from "../Assests/ser.png"
import '../Styles/Home.css';
import '../Styles/Services.css';

const Services = () => {
  const navigate = useNavigate();
  return (
    <>
   <Header/>
   <div className="outer-container">
   <Navbar/>

   <div className="flexColStart v-right">
       
      <span className="primary-heading7">Service We Give to You</span>
      <span className="primary-heading6">
        We always ready to help by providing the best services for you.
      </span>
      
    </div>
    {/*............Mental Health................*/}
   <div className="outer-container3">
    <div className="about-section-container">
      <div className="about-section-image-container">
        <img src={Service} alt="" />
      </div>
     
      <div className="about-section-text-container">
        <h3 className="primary-heading">
          Mental Health
        </h3>
        <p className="primary-text">
          Our dedicated mental health services offer 
          compassionate support and evidence-based interventions for 
          individuals navigating various challenges 
          such as anxiety, depression, trauma, and more. 
          Our team of experienced professionals provides personalized treatment plans, 
          including therapy, counseling, and psychiatric care, 
          fostering resilience and empowering individuals to lead fulfilling lives.
        </p>
        <div className="about-buttons-container">
          <button className="btn" onClick={()=> navigate("/Counseling")}>See our Staff</button>
        </div>
      </div>
    </div>
    </div>

{/*............Online Appointments................*/}

    <div className="outer-container4">
        <div className="service-container1">
            <div className="service-text-section">
                <h1 className="primary-heading1">Online Appointments</h1>
                <p className="primary-text1">Streamline your healthcare experience with our hassle-free online appointment booking service.
                Say goodbye to long wait times and phone calls – our intuitive platform allows you to schedule appointments 
                with ease from any device, anytime, anywhere. </p>
                <button className="btn" onClick={()=> navigate("/OnlineAppointments")}>Set your Appointment</button>
            </div>    
        </div>
    </div>

    {/*............Online video consultation................*/}
<div className="outer-container3">
    
    <div className="about-section-container">
      <div className="about-section-image-container">
        <img src={Service2} alt="" />
      </div>
      <div className="about-section-text-container">
        <h3 className="primary-heading">
          Online Video Consultation
        </h3>
        <p className="primary-text">
        Experience personalized healthcare from the comfort of your home with our online video consultation service. Connect with trusted medical professionals in real-time through secure video calls, ensuring convenient access to expert advice and care wherever you are. </p>
        <div className="about-buttons-container">
          <button className="btn" onClick={()=> navigate("/OnlineAppointments")}>Get Started</button>
        </div>
      </div>
    </div>
    </div>

    {/*............Profile................*/}

    <div className="outer-container4">
        <div className="service-container2">
            <div className="service-text-section">
                <h1 className="primary-heading1">Update your Medical Profile</h1>
                <p className="primary-text1">Easily manage and update your personal details, medical history, 
                allergies, medications, and more through our secure platform. By maintaining an accurate 
                and up-to-date profile, you empower healthcare providers to deliver personalized care tailored 
                to your specific needs, 
                ensuring seamless communication and informed decision-making for optimal health outcomes. </p>
                <button className="btn" onClick={()=> navigate("/StudentProfile")}>Update your Profile</button>
            </div>    
        </div>
    </div>

{/*............Service...............*/}
    <div className="outer-container3">
    
    <div className="about-section-container">
      <div className="about-section-image-container">
        <img src={Service3} alt="" />
      </div>
      <div className="about-section-text-container">
        <h3 className="primary-heading">
          Emergency Service
        </h3>
        <p className="primary-text">
        Access immediate medical assistance when you need it most with our Emergency Service. 
        Our dedicated team is available 24/7 to provide urgent care and support for medical emergencies.
        Trust in our swift response and expert care during critical moments for peace of mind and optimal health outcomes. 
        </p>
        <div className="about-buttons-container">
          {/* <button className="btn" onClick={()=> navigate("/About")}>Call 1990</button> */}
          <a href="tel:+941990" className="btn" style={{ textDecoration: 'none' }}>Call For Emergency </a>
    </div>
        
        </div>
      </div>
    </div>
    </div>
    
   <Footer />
      
  </>
  )
}

export default Services;