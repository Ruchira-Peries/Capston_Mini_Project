import React from "react";
import Header from "../Components/header";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "../Styles/About.css";

const About = () => {
  return (
   <>
    <Header/>
    <div className="outer-container9">
    <Navbar/>
    <div className="about-box">
        <div className="left-part-about">
          <div className="left-content-about">
            <h1 className="header-textL">WE ARE UNIAID</h1>
            <p className="para-textL">Get To Know Us</p>
           <div className="sign-text1">
                {/* {!isSignedIn && ( */}
                  <>
                   <p>Don't Have An Account?</p>  <a href="/Selection"style={{ textDecoration: 'none' }}><h4>SignUp</h4></a>
                  </>
                {/* )}  */}
              </div>   
          </div>
        </div>

        <div className="right-part-about">
          <div className="right-content-about">
            <div className="u">
            <h1 className="header-textR">About Us</h1>
            <p className="para-textR">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla facilisi cras fermentum odio eu feugiat. Sodales neque sodales ut etiam sit amet. Ante </p>
            </div>
             <div className="b">
            <h1 className="header-textR">What we do</h1>
            <p className="para-textR">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla facilisi cras fermentum odio eu feugiat. Sodales neque sodales ut etiam sit amet. Ante </p>
            </div>
          </div>
        </div>
      </div>
      </div>
      <Footer />
   </>
  );
};

export default About;
