import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Components/header";
import "../Styles/Staff.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import D4 from "../Assests/D4.png"



const Staff3 = () => {
    const navigate = useNavigate();
  return (
   <>
    <Header/>
    <div className="outer-container20">
    <Navbar/>
    <div className="staff-box">
        <div className="left-part-staff">
          <div className="left-content-staff">
            <h1 className="header-textL1">THIS IS OUR BELOVED STAFF</h1>
            <p className="para-textL1">Get To Know Us Better</p>
           <div className="sign-text1">
                {/* {!isSignedIn && ( */}
                  <>
                   <p>Don't Have An Account?</p>  <a href="/Selection"style={{ textDecoration: 'none' }}><h4>SignUp</h4></a>
                  </>
                {/* )}  */}
              </div>   
          </div>
        </div>

        <div className="right-part-staff">
          <div className="right-content-staff">
            <div className="up">
            <h1 className="header-textR">Dr Ravindra Jayalath</h1>
            </div>
             <div className="bo">
                  <div className="imageR">
                      <img src={D4} className="d4" alt="" />
                  </div>
                 <div className="texR">
                    <h1 className="header-textR4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do neque </h1>
                    <h1 className="header-textR4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do neque </h1>
                     <h1 className="header-textR4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do neque </h1>
                </div>
            </div>
          </div>
            <div className='b-l4'>
              <button type="submit" className='O'onClick={()=> navigate("/Staff")}></button>
              <button type="submit" className='O'onClick={()=> navigate("/Staff1")}></button>
              <button type="submit" className='O'onClick={()=> navigate("/Staff2")}></button>
              <button type="submit" className='O'onClick={()=> navigate("/Staff3")}></button>
            </div>
        </div>
      </div>
      </div>
      <Footer />
   </>
  );
};

export default Staff3;