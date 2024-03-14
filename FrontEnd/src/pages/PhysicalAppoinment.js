import React, {useState} from 'react';
import Header from "../Components/header";
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import "../Styles/Physicalapp.css";
import axios from 'axios';

const PhysicalAppoinment = () => {
  const [formData, setFormData] = useState({
    appointment_type: 'physical',
    reg_number: '',
    doctor: '',
    date: '',
    time: '',
    email: '',
    phone_number: '',
    message: ''
  });
  const doctors = ['Dr. Smith', 'Dr. Johnson', 'Dr. Patel'];

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
    <div className="outer-container14">
    <Navbar/>
    <div className="PhyApp-box">
        <div className="left-part-phy">
          <div className="left-content-phy">
        <h1 className="header-textL3">MAKE YOUR APPOINTMENT</h1>
          <p className="para-textL3">Save Your Time</p>
           <div className="sign-text2"><p>Already Have An Account?</p> <a href="\login"style={{ textDecoration: 'none' }}><h4>LogIn</h4></a>
            </div>
        </div>
        </div>

        <div className="right-part-phy">
        <div className="right-content-phy">
          <h1 className="header-textR">Set Up Your Physical Appoinment</h1>
          <form onSubmit={handleSubmit}>
          <label>
                  Choose your Appointment Type:
                  <select
                    name="appointment_type"
                    value={formData.appointment_type}
                    onChange={handleChange}
                    required
                  >
                    <option value="online">Online</option>
                    <option value="physical">Physical</option>
                  </select>
                </label>
                <br />
      <label>
        Student Registration Number:
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
        Choose Your Time:
        <input
          type="time"
          name="time"
          value={formData.time}
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
        Phone Number:
        <input
          type="text"
          name="phone_number"
          value={formData.phone_number}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Description:
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
      </label>
      <br />
      <div className='b-l2'>
      <button type="submit" className='btn2'>Next</button>
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

export default PhysicalAppoinment;