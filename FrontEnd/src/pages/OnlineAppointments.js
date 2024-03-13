import React, {useState} from 'react';
import Header from "../Components/header";
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import "../Styles/Onlineapp.css";
import axios from 'axios';

const OnlineAppointments = () => {
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
      const response = await axios.post('http://localhost:5001/OnlineAppointments', formData);
      console.log(response.data); // Log the response from the backend
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  return (
    <>
    <Header/>
    <div className="outer-container15">
    <Navbar/>
    <div className="OnApp-box">
        <div className="left-part-on">
          <div className="left-content-on">
        <h1 className="header-textL3">Make your appointment</h1>
          <p className="para-textL3">Save Your Time</p>
          <div className="sign-text2"><p>Already Have An Account?</p> <a href="\login"style={{ textDecoration: 'none' }}><h4>LogIn</h4></a>
            </div>
        </div>
        </div>

        <div className="right-part-on">
        <div className="right-content-on">
          <h1 className="header-textR">Set Up your Online Appoinment</h1>
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
          required
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
      <div className='b-l2'>
      <button type="submit" className='btn2'>Next</button>
      </div>
    </form>
    <p className='para-textR1'>If you want physical counseling services, therapy, or psychiatric consultations to address various mental health concerns such as stress, anxiety, depression, and adjustment issues   <a href='/counseling' style={{ textDecoration: 'none' }}><span className='t1'>Click Here</span></a>.</p>
          </div>
        </div>
      </div>
      <Footer />
      </div>
   </>
  )
}

export default OnlineAppointments;