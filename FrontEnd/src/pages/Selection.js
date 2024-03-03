import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Components/header";
import Footer from "../Components/Footer";
import "../Styles/Selection.css";

const Appoinments = () => {
    const navigate = useNavigate();
  return (
   <>
    <Header/>
    <div className="outer-container">
    <div className="selection-box">
        <div className="left-side">
          <div className="left-side-content">
        <h1 className="selection-header-text">Doctor</h1>
        <button className="btn-button1" onClick={()=> navigate("/signup2")}>Doctor</button><br />
          </div>
        </div>

        <div className="right-side">
        <div className="right-side-content">
          <h1 className="selection-header-text">Student</h1>
          <button className="btn-button2" onClick={()=> navigate("/signup1")}>Student</button><br />
          </div>
        </div>
      </div>
      <Footer />
      </div>
   </>
  );
};

export default Appoinments;
