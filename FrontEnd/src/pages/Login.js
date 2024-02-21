import React, {useState} from 'react';
import Header from "../Components/header";
import Footer from '../Components/Footer';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission here, for now just log the data
    console.log(formData);
  };
  return (
    <>
    <Header/>
    <div className="outer-container">
    <div className="appoinment-box">
        <div className="left-part">
          <div className="left-content">
        <h1 className="header-text">Log in</h1>
          <p className="para-text">Easily reserve your time without visiting and save your valuable time</p>
          <p className= "sign-text">Already have an account? <a href="\login">Login</a></p>
          </div>
        </div>

        <div className="right-part">
        <div className="right-content">
          <h1 className="header-text">Log In</h1>
          <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"

          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </label>
      <br />
      <a href="#">Forgot password?</a>
      <button type="submit" className='btn'>Log in</button>
    </form>
          </div>
        </div>
      </div>
      <Footer />
      </div>
   </>
  )
}

export default Login;