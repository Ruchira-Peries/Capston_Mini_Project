import React, {useState} from 'react';
import Header from "../Components/header";
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import "../Styles/StudentProDet.css";


const StudentProfileDetails = () => {
    const formData = JSON.parse(localStorage.getItem("formData"))
  return (
     <>
    <Header/>
    <div className="outer-container22">
    <Navbar/>
    <div className="StuD-box">
        <div className="left-part-StuD">
          <div className="left-content-StuD">
        <h1 className="header-textL3">SEE YOUR RECORD DETAILS</h1>
          <p className="para-textL3">Save Your Time</p>
          <div className="sign-text2"><p>Already Have An Account?</p> <a href="\login"style={{ textDecoration: 'none' }}><h4>LogIn</h4></a>
            </div>
        </div>
        </div>

        <div className="right-part-StuD">
        <div className="right-content-StuD">
          <h1 className="header-textR">Student Details</h1>    
    <div>
        {formData ? (
            <div className='details'>
                <p>1.Full Name: {formData.fullName}</p>
                <p>2.Register Number: {formData.reg_number}</p>
                <p>3.Date of Birth:: {formData.dateOfBirth}</p>
                <p>4.Weight: {formData.weight}</p>
                <p>5.Height: {formData.height}</p>
                <p> 6.Condition of Teeth, Gums, Throat, and Nasal Passage:</p>
                <p className='det'>-Are the gums and teeth healthy?(State of tongue, fauces, and nasal passages) {formData.tonguea}</p>
                <p> 7.Examination of heart:</p>
                <p className='det'>-Blood group? {formData.blood}</p>
                <p className='det'>-Any past history of health disease of rheumatic fever? {formData.RheumaticFever}</p>
                <p className='det'>-Any cardiac enlargement? {formData.CardiacEnlargement}</p>
                <p className='det'>-Heart Sound? {formData.HeartSound}</p>
                <p className='det'>-Murmurs? {formData.Murmurs}</p>
                <p className='det'>-Blood pressure? {formData.BloodPressure}</p>
                <p>8.Examination of Lungs:</p>
                <p className='det'>-History of Tuberculosis, Bronchitis or Asthma? {formData.Asthma}</p>
                <p className='det'>-Any abnormality clinically? {formData.abnormality}</p>
                <p>9.Examination of Abondomen:</p>
                <p className='det'> -Any evidence of enlargement of liver of spleen? {formData.enlargementofliver}</p>
                <p className='det'>-Any past history of peptic ulcer? {formData.pepticUlcer}</p>
                 <p className='det'> -Are the kidneys palpable? {formData.kidneys}</p>
                <p className='det'>-Any other abnormalities? {formData.otherabnormalities}</p>
                <p>10.Examination of the Nervous System:</p>
                <p className='det'>-Any  history of convulsions or insanity? {formData.convulsions}</p>
                <p className='det'>-Any past history of poliomyelitis? {formData.poliomyelitis}</p>
                <p className='det'>-Fundi?{formData.Fundi}</p>
                <p className='det'>-Reflexes? {formData.Reflexes}</p>
                 <p>11.Visions:</p>
                <p className='det'>-Without Glass? {formData.WithoutGlass}</p>
                <p className='det'>-With Glass? {formData.WithGlass}</p>
                <p className='det'>-Colour Vision? {formData.ColourVision}</p>
                <p >12. Hearing:</p>
                <p className='det'>-Any hearing defeats? {formData.hearingdefeats}</p>
                <p className='det'>-Any past history of discharge from ear? {formData.pasthistory}</p>
                <p>13. Speech: {formData.Speech}</p>
                <p>14. Operation  and Other Details:</p>
                <p className='det'>-Have you ever had any operations or accidents? {formData.Operation}</p>
                <p className='det'>-Any deformities - Congential or Acquired? {formData.deformities}</p>
                <p className='det'>-Any evidence hernia, hydrocele, varicose veins or hemorholds?{formData.hemorholds}</p>
                <p className='det'>-Immunisations? {formData.Immunisations}</p>
                <p>15. Chest X-ray? {formData.ChestXray}</p>
                <p>16.Are the indications of any other physical defect or disease? {formData.physicaldefect}</p>

            </div>
        ):(
            <p>No data stored.</p>
        )

        }
    </div>
          </div>
        </div>
      </div>
      <Footer />
      </div>
   </>
  )
}

export default StudentProfileDetails
