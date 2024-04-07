import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Header from "../Components/header";
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import "../Styles/Studentpro.css";
const StudentProfile = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    reg_number: '',
    dateOfBirth: '',
    weight: '',
    height: '',
    tonguea: '',
    blood: '',
    RheumaticFever: '',
    CardiacEnlargement: '',
    HeartSound: '',
    Murmurs: '',
    BloodPressure: '',
    Asthma: '',
    abnormality: '',
    enlargementofliver: '',
    pepticUlcer: '',
    kidneys: '',
    otherabnormalities: '',
    convulsions: '',
    poliomyelitis: '',
    Fundi: '',
    Reflexes: '',
    WithoutGlass: '',
    WithGlass: '',
    ColourVision:' ',
    hearingdefeats:' ',
    pasthistory:' ',
    Speech: '',
    Operation: '',
    deformities: '',
    hemorholds: '',
    Immunisations: '',
    ChestXray: '',
    physicaldefect: '',

  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    // e.preventDefault();

    try {
      localStorage.setItem("formData", JSON.stringify(formData))
      // Redirect or show success message after successful submission
    } catch (error) {
      console.error('Error:', error);
      // Handle error, such as displaying an error message to the user
    }
  };

  return (
    <>
      <Header />
      <div className="outer-container17">
        <Navbar/>
        <div className="studentpro-box">
          <div className="left-part-stu">
            <div className="left-content-stu">
              <h1 className="header-textL3">STUDENT MEDICAL PROFILE</h1>
              <p className="para-textL3">Ease Your Medical Life</p>
                <div className="sign-text2"><p>Access To Our </p> <a href="\Services"style={{ textDecoration: 'none' }}><h4> Services</h4></a>
            </div>
            </div>
             <div className="left-content-stu1">
              <h1 className="header-textL3">STUDENT MEDICAL PROFILE</h1>
              <p className="para-textL3">Ease Your Medical Life</p>
                <div className="sign-text2"><p>Access To Our </p> <a href="\Services"style={{ textDecoration: 'none' }}><h4> Services</h4></a>
            </div>
            </div>
          </div>

          <div className="right-part-stu">
            <div className="right-content-stu">
              <h1 className="header-textR">Fill Out Your Profile</h1>
              <form onSubmit={handleSubmit}>
                <label>
                  1.Full Name:
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </label>
                <br />
                <label>
                  2.Register Number:
                  <input
                    type="text"
                    name="reg_number"
                    value={formData.reg_number}
                    onChange={handleChange}
                    required
                  />
                </label>
                <br />
                <label>
                  3.Date of Birth:
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    required
                  />
                </label>
                <br />
                <label>
                  4.Weight:
                  <input
                    type="text"
                    name="weight"
                    value={formData.weight}
                    onChange={handleChange}
                    required
                  />
                </label>
                <br />
                <label>
                 5.Height:
                  <input
                    type="text"
                    name="height"
                    value={formData.height}
                    onChange={handleChange}
                    required
                  />
                </label>
                <br />
                <label>
                  6.Condition of Teeth, Gums, Throat, and Nasal Passages:<br/><br/>
                  Are the gums and teeth healthy?(State of tongue, fauces, and nasal passages)
                  <input
                    type="text"
                    name="tonguea"
                    value={formData.tonguea}
                    onChange={handleChange}
                    required
                  />
                </label>
                <br />
                <label>
                7.Examination of heart:<br/><br/>
                  Blood group?
                  <input
                    type="text"
                    name="blood"
                    value={formData.blood}
                    onChange={handleChange}
                    required
                  />
                  Any past history of health disease of rheumatic fever?
                    <input
                    type="text"
                    name="RheumaticFever"
                    value={formData.RheumaticFever}
                    onChange={handleChange}
                    required
                  />
                  Any cardiac enlargement?
                      <input
                    type="text"
                    name="CardiacEnlargement"
                    value={formData.CardiacEnlargement}
                    onChange={handleChange}
                    required
                  />
                  Heart Sound?
                      <input
                    type="text"
                    name="HeartSound"
                    value={formData.HeartSound}
                    onChange={handleChange}
                    required
                  />
                  Murmurs?
                      <input
                    type="text"
                    name="Murmurs"
                    value={formData.Murmurs}
                    onChange={handleChange}
                    required
                  />
                  Blood pressure?
                    <input
                    type="text"
                    name="BloodPressure"
                    value={formData.BloodPressure}
                    onChange={handleChange}
                    required
                  />
                </label>
                <br />
                <label>
                8.Examination of Lungs:<br/><br/>
                History of Tuberculosis, Bronchitis or Asthma?
                  <input
                    type="text"
                    name="Asthma"
                    value={formData.Asthma}
                    onChange={handleChange}
                    required
                  />
                  Any abnormality clinically?
                   <input
                    type="text"
                    name="abnormality"
                    value={formData.abnormality}
                    onChange={handleChange}
                    required
                  />
                </label>
                <br />
                  <label>
                  9.Examination of Abondomen:<br/><br/>
                  Any evidence of enlargement of liver of spleen?
                        <input
                    type="text"
                    name="enlargementofliver"
                    value={formData.enlargementofliver}
                    onChange={handleChange}
                    required
                  />
                    Any past history of peptic ulcer?
                         <input
                    type="text"
                    name="pepticUlcer"
                    value={formData.pepticUlcer}
                    onChange={handleChange}
                    required
                  />
                    Are the kidneys palpable?
                    <input
                    type="text"
                    name="kidneys"
                    value={formData.kidneys}
                    onChange={handleChange}
                    required
                  />
                  Any other abnormalities?
                  <input
                    type="text"
                    name="otherabnormalities"
                    value={formData.otherabnormalities}
                    onChange={handleChange}
                    required
                  />
                  </label>
                  <br/>
                  <label>
                  10.Examination of the Nervous System:<br/><br/>
                   Any  history of convulsions or insanity?
                        <input
                    type="text"
                    name="convulsions"
                    value={formData.convulsions}
                    onChange={handleChange}
                    required
                  />
                  Any past history of poliomyelitis?
                        <input
                    type="text"
                    name="poliomyelitis"
                    value={formData.poliomyelitis}
                    onChange={handleChange}
                    required
                  />
                  Fundi?
                      <input
                    type="text"
                    name="Fundi"
                    value={formData.Fundi}
                    onChange={handleChange}
                    required
                  />
                  Reflexes?
                     <input
                    type="text"
                    name="Reflexes"
                    value={formData.Reflexes}
                    onChange={handleChange}
                    required
                  />

                </label>
                <br />
                <label>
                  11.Visions:<br/><br/>
                  Without Glass?
                  <input
                    type="text"
                    name="WithoutGlass"
                    value={formData.WithoutGlass}
                    onChange={handleChange}
                    required
                  />
                  With Glass?
                     <input
                    type="text"
                    name="WithGlass"
                    value={formData.WithGlass}
                    onChange={handleChange}
                    required
                  />
                  Colour Vision?
                       <input
                    type="text"
                    name="ColourVision"
                    value={formData.ColourVision}
                    onChange={handleChange}
                    required
                  />
                </label>
                <br />
               <label>
                  12. Hearing:<br/><br/>
                  Any hearing defeats?
                      <input
                    type="text"
                    name="hearingdefeats"
                    value={formData.hearingdefeats}
                    onChange={handleChange}
                    required
                  />
                   Any past history of discharge from ear?
                       <input
                    type="text"
                    name="pasthistory"
                    value={formData.pasthistory}
                    onChange={handleChange}
                    required
                  />
                </label>
                <br/>
                   <label>
                  13. Speech:
                      <input
                    type="text"
                    name="Speech"
                    value={formData.Speech}
                    onChange={handleChange}
                    required
                  />
                </label>
                 <br/>
                   <label>
                  14. Operation  and Other Details:<br/><br/>
                  Have you ever had any operations or accidents?
                      <input
                    type="text"
                    name="Operation"
                    value={formData.Operation}
                    onChange={handleChange}
                    required
                  />
                  Any deformities - Congential or Acquired?
                      <input
                    type="text"
                    name="deformities"
                    value={formData.deformities}
                    onChange={handleChange}
                    required
                  />
                  Any evidence hernia, hydrocele, varicose veins or hemorholds?
                      <input
                    type="text"
                    name="hemorholds"
                    value={formData.hemorholds}
                    onChange={handleChange}
                    required
                  />
                  Immunisations?
                    <input
                    type="text"
                    name="Immunisations"
                    value={formData.Immunisations}
                    onChange={handleChange}
                    required
                  />
                </label>
                <br/>
                   <label>
                  15. Chest X-ray?
                      <input
                    type="text"
                    name="ChestXray"
                    value={formData.ChestXray}
                    onChange={handleChange}
                    required
                  />
                </label>
                <br/>
                  <label>
                  16.Are the indications of any other physical defect or disease?
                      <input
                    type="text"
                    name="physicaldefect"
                    value={formData.physicaldefect}
                    onChange={handleChange}
                    required
                  />
                </label>
                <div className='b-l2'>
                <button type="submit" className='btn2'onClick={()=> navigate("")}>Save Records</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default StudentProfile;
