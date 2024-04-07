import React, { useState } from 'react';
import axios from 'axios';
import Header from "../Components/header";
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import "../Styles/Studentpro.css";
const StudentProfile = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    reg_number: '',
    dateOfBirth: '',
    weight: '',
    height: '',
    tonguea: '',
    hearta: '',
    heartb: '',
    heartc: '',
    heartd: '',
    hearte: '',
    heartf: '',
    lungsa: '',
    lungsb: '',
    abondomena: '',
    abondomenb: '',
    abondomenc: '',
    abondomend: '',
    nervousa: '',
    nervousb: '',
    nervousc: '',
    nervousd: '',
    nervouse: '',
    nervousf: '',
    nervousg: '',
    operationa: '',
    operationb: '',
    operationc: '',
    operationd: '',
    x_ray: '',
    physicalDefect: '',


  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5001/UserProfile', formData);
      console.log(response.data);
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
                    name="hearta"
                    value={formData.hearta}
                    onChange={handleChange}
                    required
                  />
                  Any past history of health disease of rheumatic fever?
                    <input
                    type="text"
                    name="heartb"
                    value={formData.heartb}
                    onChange={handleChange}
                    required
                  />
                  Any cardiac enlargement?
                      <input
                    type="text"
                    name="heartc"
                    value={formData.heartc}
                    onChange={handleChange}
                    required
                  />
                  Heart Sound?
                      <input
                    type="text"
                    name="heartd"
                    value={formData.heartd}
                    onChange={handleChange}
                    required
                  />
                  Murmurs?
                      <input
                    type="text"
                    name="hearte"
                    value={formData.hearte}
                    onChange={handleChange}
                    required
                  />
                  Blood pressure?
                    <input
                    type="text"
                    name="heartf"
                    value={formData.heartf}
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
                    name="lungsa"
                    value={formData.lungsa}
                    onChange={handleChange}
                    required
                  />
                  Any abnormality clinically?
                   <input
                    type="text"
                    name="lungsb"
                    value={formData.lungsb}
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
                    name="abondomena"
                    value={formData.abondomena}
                    onChange={handleChange}
                    required
                  />
                    Any past history of peptic ulcer?
                         <input
                    type="text"
                    name="abondomenb"
                    value={formData.abondomenb}
                    onChange={handleChange}
                    required
                  />
                    Are the kidneys palpable?
                    <input
                    type="text"
                    name="abondomenc"
                    value={formData.abondomenc}
                    onChange={handleChange}
                    required
                  />
                  Any other abnormalities?
                  <input
                    type="text"
                    name="abondomend"
                    value={formData.abondomend}
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
                    name="nervousa"
                    value={formData.nervousa}
                    onChange={handleChange}
                    required
                  />
                  Any past history of poliomyelitis?
                        <input
                    type="text"
                    name="nervousb"
                    value={formData.nervousb}
                    onChange={handleChange}
                    required
                  />
                  Fundi?
                      <input
                    type="text"
                    name="nervousc"
                    value={formData.nervousc}
                    onChange={handleChange}
                    required
                  />
                  Reflexes?
                     <input
                    type="text"
                    name="nervousd"
                    value={formData.nervousd}
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
                    name="nervouse"
                    value={formData.nervouse}
                    onChange={handleChange}
                    required
                  />
                  With Glass?
                     <input
                    type="text"
                    name="nervousf"
                    value={formData.nervousf}
                    onChange={handleChange}
                    required
                  />
                  Colour Vision?
                       <input
                    type="text"
                    name="nervousg"
                    value={formData.nervousg}
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
                    name="operationa"
                    value={formData.operationa}
                    onChange={handleChange}
                    required
                  />
                   Any past history of discharge from ear?
                       <input
                    type="text"
                    name="operationb"
                    value={formData.operationb}
                    onChange={handleChange}
                    required
                  />
                </label>
                <br/>
                   <label>
                  13. Speech:
                      <input
                    type="text"
                    name="operationc"
                    value={formData.operationc}
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
                    name="Operationa"
                    value={formData.operationa}
                    onChange={handleChange}
                    required
                  />
                  Any deformities - Congential or Acquired?
                      <input
                    type="text"
                    name="operationb"
                    value={formData.operationb}
                    onChange={handleChange}
                    required
                  />
                  Any evidence hernia, hydrocele, varicose veins or hemorholds?
                      <input
                    type="text"
                    name="operationc"
                    value={formData.operationc}
                    onChange={handleChange}
                    required
                  />
                  Immunisations?
                    <input
                    type="text"
                    name="operationd"
                    value={formData.operationd}
                    onChange={handleChange}
                    required
                  />
                </label>
                <br/>
                   <label>
                  15. Chest X-ray?
                      <input
                    type="text"
                    name="x_ray"
                    value={formData.x_ray}
                    onChange={handleChange}
                    required
                  />
                </label>
                <br/>
                  <label>
                  16.Are the indications of any other physical defect or disease?
                      <input
                    type="text"
                    name="physicalDefect"
                    value={formData.physicalDefect}
                    onChange={handleChange}
                    required
                  />
                </label>
                <div className='b-l2'>
                <button type="submit" className='btn2'>Save Records</button>
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
