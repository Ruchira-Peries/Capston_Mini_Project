import React from "react";
import "../Styles/Header.css"
import Slogo from "../Assests/susl LOGO W 1.png";
import Mail from "../Assests/icons8-email-100 1.png";
import Phone from "../Assests/icons8-phone-100 1.png";

const header = () => {
return (
    <div className="outer-container2">
        <div className="header-container1">
            <div className="header-container">
                <img className="header-logo" src={Slogo} alt="" />
                <p className="logo-text">Sabargamuwa University of Sri Lanka</p>
            </div>
        <div className="mail-phone-container">
            <div className="mail-container">
                 <img className="mail-logo" src={Mail} alt="" />
                 <p className="mail-text">Sabargamuwa@pambahinna</p>
            </div>
            <div className="phone-container">
                <img className="phone-logo" src={Phone} alt="" />
                <p className="phone-text">077-8153234/1990</p>
            </div>
        </div>
        </div>
    </div>
)

}
export default header;