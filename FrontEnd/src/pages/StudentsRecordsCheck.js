import React, {useState} from 'react';
import Header from "../Components/header";
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import "../Styles/StudentsRecordsCheck.css";
import axios from 'axios';

const StudentsRecordsCheck = () => {
  const [formData, setFormData] = useState({
    regnumber: '',
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
      // Send form data to the backend
      const response = await axios.post('http://localhost:5001/StudentsRecordsCheck', formData);
      console.log(response.data); // Log the response from the backend
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  return (
    <>
    <Header/>
    <div className="outer-container19">
    <Navbar/>
    <div className="SRC-box">
        <div className="left-part-SRC">
          <div className="left-content-SRC">
        <h1 className="header-textL1">AVAILABILITY OF STUDENT'S MEDICAL RECORDS</h1>
          <p className="para-textL1">Save Your Time</p>
          <div className="sign-text1"><p>Already Have An Account?</p> <a href="\login"style={{ textDecoration: 'none' }}><h4>LogIn</h4></a>
            </div>
        </div>
        </div>

        <div className="right-part-SRC">
        <div className="right-content-SRC">
          <h1 className="header-textR">Check The Availability Of Student's Medical Records </h1>
          <form onSubmit={handleSubmit}>
    <label>
        Student Registration Number:
        <input
          type="text"
          name="regnumber"
          value={formData.regnumber}
          onChange={handleChange}
          required
        />
    </label>
      <br />
      <div className='b-l'>
      <button type="submit" className='btn1'>Check</button>
      </div>
    </form>
          </div>
        </div>
      </div>
      <Footer />
      </div>
   </>
  )
}

export default StudentsRecordsCheck;