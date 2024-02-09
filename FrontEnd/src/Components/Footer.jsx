import React from 'react'
import "../Styles/Footer.css"
import Logo from "../Assests/Medical Clinic Logo .png"
import FacebookIcon from "../Assests/facebook.png"
import Whatsapp from "../Assests/whatsapp.png"
import Twitter from "../Assests/twitter.png"



const Footer = () => {
  return (
<div className="footer-container">
  <div className="footer-logo">
    <img src={Logo} alt="Company Logo" />
  </div>
    <div className="footer-icons">
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <img src={FacebookIcon} alt="Facebook" />
        </a>
        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
          <img src={Twitter} alt="YouTube" />
        </a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
          <img src={Whatsapp} alt="LinkedIn" />
        </a>
    </div>
    <div className="footer-links">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/privacy-policy">Privacy Policy</a>
        <a href="/terms-and-conditions">Terms and Conditions</a>
    </div>
        <div className="footer-text">
            <p>&copy; 2024 Uni Aid. All rights reserved.</p>
        </div>
</div>
  )
}

export default Footer