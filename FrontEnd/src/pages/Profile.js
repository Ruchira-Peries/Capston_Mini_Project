import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Header from "../Components/header";
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import "../Styles/Profile.css"

const Profile =()=> {

    const navigate = useNavigate();
  return (
   <>
    <Header/>
    <div className="outer-container24">
    <Navbar/>
    <div className="ProSel-box">
        <div className="ProSel-left-side">
          <div className="ProSel-left-side-content">
        <h1 className="selection-header-text1">Fill Out Your Profile</h1>
        <button className="btn-button1" onClick={()=> navigate("/StudentProfile")}>Submit</button>
          </div>
        </div>
            <div className="ProSel-right-side">
        <div className="ProSel-right-side-content">
          <h1 className="selection-header-text2">See Your Profile</h1>
          <button className="btn-button2" onClick={()=> navigate("/StudentProfileDetails")}>View</button><br />
          </div>
        </div>
      </div>
      <Footer />
      </div>
   </>
  )
}

export default Profile