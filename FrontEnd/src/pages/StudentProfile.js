import React, { useState } from 'react';
import axios from 'axios';
import Header from "../Components/header";
import Footer from '../Components/Footer';

const StudentProfile = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    reg_number: '',
    dateOfBirth: '',
    weight: '',
    height: '',
    tonguea: '',
    hearta: '',
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
      <div className="outer-container">
        <div className="appoinment-box">
          <div className="left-part">
            <div className="left-content">
              <h1 className="header-text">Student Profile</h1>
              {/* Additional content if needed */}
            </div>
          </div>

          <div className="right-part">
            <div className="right-content">
              <h1 className="header-text">Fill out your profile</h1>
              <form onSubmit={handleSubmit}>
                <label>
                  Full Name:
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
                  Register Number:
                  <input
                    type="text"
                    name="reg_number:"
                    value={formData.reg_number}
                    onChange={handleChange}
                    required
                  />
                </label>
                <br />
                <label>
                  Date of Birth:
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
                  Weight:
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
                  Height:
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
                  Tongue:
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
                  Heart:
                  <input
                    type="text"
                    name="hearta"
                    value={formData.hearta}
                    onChange={handleChange}
                    required
                  />
                </label>
                <br />
                <label>
                  Full Name:
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
                  Full Name:
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
                  Full Name:
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
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
  );
}

export default StudentProfile;
