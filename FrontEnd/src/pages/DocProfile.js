import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Header from "../Components/header";
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import "../Styles/Profile.css"

const DocProfile =()=> {

    const navigate = useNavigate();
  return (
   <>
    <Header/>
    <div className="outer-container24">
    <Navbar/>
    <div className="ProSel-box">
            <div className="ProSel-left-side">
        <div className="ProSel-left-side-content">
          <h1 className="selection-header-text1">Check Student Records</h1>
          <button className="btn-button1" onClick={()=> navigate("/StudentsRecordsCheck")}>View</button><br />
          </div>
        </div>

        <div className="ProSel-right-side">
        <div className="ProSel-right-side-content">
          <h1 className="selection-header-text2">Appointments Avaialability</h1>
          <button className="btn-button2" onClick={()=> navigate("/AppointmentCheck")}>Check</button><br />
          </div>
        </div>
      </div>
      <Footer />
      </div>
   </>
  )
}

export default DocProfile