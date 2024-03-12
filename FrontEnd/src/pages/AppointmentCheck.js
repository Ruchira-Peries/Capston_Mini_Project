import React, {useState} from 'react';
import Header from "../Components/header";
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import "../Styles/AppointmentCheck.css";
import axios from 'axios';

const AppointmentCheck = () => {
  const [formData, setFormData] = useState({
    doctor: '',
    date: '',
  });
  const doctors = ['Dr. Smith', 'Dr. Johnson', 'Dr. Patel', 'Dr. Garcia'];

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
      const response = await axios.post('http://localhost:5001/OnlineAppointments', formData);
      console.log(response.data); // Log the response from the backend
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  return (
    <>
    <Header/>
    <div className="outer-container18">
    <Navbar/>
    <div className="AppChk-box">
        <div className="left-part-Appch">
          <div className="left-content-Appch">
        <h1 className="header-textL1">MAKE YOUR APPOINTMENT AVAILABLE</h1>
          <p className="para-textL1">Save Your Time</p>
          <div className="sign-text1"><p>Already Have An Account?</p> <a href="\login"style={{ textDecoration: 'none' }}><h4>LogIn</h4></a>
            </div>
        </div>
        </div>

        <div className="right-part-Appch">
        <div className="right-content-Appch">
          <h1 className="header-textR">Check The Availability Of Your Appointments </h1>
          <form onSubmit={handleSubmit}>
      <label>
        Choose Your Doctor:
        <select
         name="doctor"
         value={formData.doctor}
        onChange={handleChange}
        required
        >
        <option value="">Select Doctor</option>
         {doctors.map((doctor, index) => (
        <option key={index} value={doctor}>{doctor}</option>
          ))}
      </select>
      </label>
      <br />
      <label>
        Choose Your Date:
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
      </label>
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

export default AppointmentCheck;