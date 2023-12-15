import React from 'react';
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Trim from './Cs-logos/trim video.mp4'


const Home = () => {
  return (
    <>
    <div className='video'>

      <video src={Trim} autoPlay muted loop class="video-bg" />

      <div className="bg-overlay"></div>

      <div className='title'>
      <div className="navbar"><Navbar/></div>
        <h1>Missing Grade Reporting System</h1>
        <p>The Department of Computer Science Missing Grade Reporting System is a system designed for students
          to enable them measure and record their academic performances. The grades can be reported using this system for students to get accurate information about their grades.
          The system allows students to give complains to their course instructors for grades correction.
          This system also have various features that will enable students to make the necessary correction in their grades thus improving their academic performance.
        </p>

        <div className='footer'><Footer /></div>
      </div>

    </div>
    
    </>
   
  );
}

export default Home;
