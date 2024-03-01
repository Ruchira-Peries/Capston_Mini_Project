import React, {useState} from 'react';
import Header from "../Components/header";
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import axios from 'axios';

const PhysicalAppoinment = () => {
  const [formData, setFormData] = useState({
    regnumber: '',
    doctor: '',
    date: '',
    email: '',
    description: ''
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
      const response = await axios.post('http://localhost:5001/PhysicalAppointments', formData);
      console.log(response.data); // Log the response from the backend
    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (
    <>
    <Header/>
    <div className="outer-container">
    <Navbar/>
    <div className="appoinment-box">
        <div className="left-part">
          <div className="left-content">
        <h1 className="header-text">Make your appointment</h1>
          <p className="para-text">Easily reserve your time without visiting and save your valuable time</p>
          <p className= "sign-text">Already have an account? <a href="\login">Login</a></p>
          </div>
        </div>

        <div className="right-part">
        <div className="right-content">
          <h1 className="header-text">Set Up your Physical Appoinment</h1>
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
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Description:
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit" className='btn'>Submit</button>
      </form>
          </div>
        </div>
      </div>
      <Footer />
      </div>
   </>
  )
}

export default PhysicalAppoinment;