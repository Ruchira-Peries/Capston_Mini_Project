import React, { useState } from 'react';
import Header from "../Components/header";
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import "../Styles/StudentProDet.css";
import axios from 'axios';

const StudentProfileDetails = () => {
    const formData = JSON.parse(localStorage.getItem("formData"));

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Send form data to the backend
            const response = await axios.post('http://localhost:5001/StudentDetails', formData);
            console.log(response.data); // Log the response from the backend
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <>
            <Header />
            <div className="outer-container22">
                <Navbar />
                <div className="StuD-box">
                    <div className="left-part-StuD">
                        <div className="left-content-StuD">
                            <h1 className="header-textL3">SEE YOUR RECORD DETAILS</h1>
                            <p className="para-textL3">Save Your Time</p>
                            <div className="sign-text2">
                                <p>Already Have An Account?</p>
                                <a href="\login" style={{ textDecoration: 'none' }}>
                                    <h4>LogIn</h4>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="right-part-StuD">
                        <div className="right-content-StuD">
                            <h1 className="header-textR">Student Details</h1>
                            <div>
                                {formData && (
                                    <div className='details'>
                                        <p>1.Full Name: {formData.fullName}</p>
                                        <p>2.Register Number: {formData.reg_number}</p>
                                        <p>3.Date of Birth: {formData.dateOfBirth}</p>
                                        <p>4.Weight: {formData.weight}</p>
                                        <p>5.Height: {formData.height}</p>
                                        <p>6.Condition of Teeth, Gums, Throat, and Nasal Passage:</p>
                                        <p className='det'>-Are the gums and teeth healthy? (State of tongue, fauces, and nasal passages) {formData.tonguea}</p>
                                        <p>7.Examination of heart:</p>
                                        <p className='det'>-Blood group? {formData.hearta}</p>
                                        <p className='det'>-Any past history of health disease of rheumatic fever? {formData.heartb}</p>
                                        <p className='det'>-Any cardiac enlargement? {formData.heartc}</p>
                                        <p className='det'>-Heart Sound? {formData.heartd}</p>
                                        <p className='det'>-Murmurs? {formData.hearte}</p>
                                        <p className='det'>-Blood pressure? {formData.heartf}</p>
                                        <p>8.Examination of Lungs:</p>
                                        <p className='det'>-History of Tuberculosis, Bronchitis or Asthma? {formData.lungsa}</p>
                                        <p className='det'>-Any abnormality clinically? {formData.lungsb}</p>
                                        <p>9.Examination of Abdomen:</p>
                                        <p className='det'>-Any evidence of enlargement of liver of spleen? {formData.abdomena}</p>
                                        <p className='det'>-Any past history of peptic ulcer? {formData.abdomenb}</p>
                                        <p className='det'>-Are the kidneys palpable? {formData.abdomenc}</p>
                                        <p className='det'>-Any other abnormalities? {formData.abdomend}</p>
                                        <p>10.Examination of the Nervous System:</p>
                                        <p className='det'>-Any history of convulsions or insanity? {formData.nervousa}</p>
                                        <p className='det'>-Any past history of poliomyelitis? {formData.nervousb}</p>
                                        <p className='det'>-Fundi? {formData.nervousc}</p>
                                        <p className='det'>-Reflexes? {formData.nervousd}</p>
                                        <p>11.Vision:</p>
                                        <p className='det'>-Without Glass? {formData.nervouse}</p>
                                        <p className='det'>-With Glass? {formData.nervousaf}</p>
                                        <p className='det'>-Color Vision? {formData.nervousg}</p>
                                        <p>12.Hearing:</p>
                                        <p className='det'>-Any hearing defects? {formData.operationa}</p>
                                        <p className='det'>-Any past history of discharge from ear? {formData.operationb}</p>
                                        <p>13.Speech: {formData.speech}</p>
                                        <p>14.Operation and Other Details:</p>
                                        <p className='det'>-Have you ever had any operations or accidents? {formData.operationa}</p>
                                        <p className='det'>-Any deformities - Congenital or Acquired? {formData.operationb}</p>
                                        <p className='det'>-Any evidence hernia, hydrocele, varicose veins, or hemorrhoids? {formData.operationc}</p>
                                        <p className='det'>-Immunizations? {formData.operationd}</p>
                                        <p>15.Chest X-ray? {formData.x_ray}</p>
                                        <p>16.Are the indications of any other physical defect or disease? {formData.physicalDefect}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default StudentProfileDetails;
