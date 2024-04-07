import React from 'react';
import Navbar from '../Components/Navbar';
import Header from '../Components/header';
import Footer from '../Components/Footer';
import '../Styles/Counseling.css';

const Counseling = () => {
  return (
    <>
    <Header/>
    <div className="outer-container23">
    <Navbar/>
    <div className="Coun-box">
        <div className="left-part-Coun">
          <div className="left-content-Coun">
        <h1 className="header-textL3">HAVE A HEALTHY MENTAL LIFE</h1>
          <p className="para-textL3">Seek For Help</p>
          <div className="sign-text2"><p>Already Have An Account?</p> <a href="\login"style={{ textDecoration: 'none' }}><h4>LogIn</h4></a>
            </div>
        </div>
        </div>

        <div className="right-part-Coun">
        <div className="right-content-Coun">
          <h1 className="header-textR">Counseling for University Students</h1>
        <p className='para-textR2'>
          University life can be both exciting and challenging, but it's not uncommon for students to face various mental health issues during their academic journey. At our counseling center, we provide support and resources to help students navigate these challenges and thrive in their academic and personal lives.
        </p>

        <h2 className="header-textR7">Common Mental Health Issues</h2>
        <h3 className="header-textR8">Stress</h3>
        <p className='para-textR61'>
          Stress is a natural response to the demands of university life, such as exams, assignments, and social pressures. While some stress can be motivating, excessive stress can lead to physical and emotional exhaustion, difficulty concentrating, and impaired performance. Our counselors can help you develop healthy coping strategies to manage stress effectively.
        </p>

        <h3 className="header-textR8">Anxiety</h3>
        <p className='para-textR61'>
          Anxiety disorders are among the most prevalent mental health issues affecting university students. Symptoms may include persistent worry, restlessness, irritability, and panic attacks. Our counselors offer evidence-based treatments such as cognitive-behavioral therapy (CBT) to help you understand and manage your anxiety symptoms.
        </p>

        {/* Include more sections for depression, relationship issues, etc. */}

        <h2 className="header-textR7">Importance of Counseling</h2>
        <p className='para-textR6'>
          Counseling plays a crucial role in promoting self-awareness, developing coping skills, enhancing academic performance, and improving overall quality of life. By seeking support from our counseling center, you can gain valuable insights, learn effective strategies for managing stress and emotional difficulties, and take proactive steps toward better mental health.
        </p>

        <h2 className="header-textR7">Get Started Today</h2>
        <p className='para-textR6'>
          If you're struggling with mental health issues or simply need someone to talk to, our counseling center is here to help. Our experienced counselors offer confidential support, compassionate care, and evidence-based therapies tailored to your individual needs. Don't hesitate to reach out and take the first step toward a happier, healthier you.
        </p>

        <p className='para-textR9'>Contact us today to schedule an appointment or learn more about our counseling services.</p>
      </div>

      
    </div>
          </div>
          <Footer />
        </div>
   </>
  );
};

export default Counseling;
