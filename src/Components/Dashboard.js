// Dashboard.js
import React from 'react';
import Navbar2 from '../Components/Navbar2'
import Footer from '../Components/Footer'
import  '../Components/image.css'
import GradesOverview from '../Components/GradesOverview';
import MissingGradesAlerts from '../Components/MissingGradesAlert';

const Dashboard = () => {
  return (
    <div>
      <div><Navbar2 /></div>
      <h1>Student Dashboard</h1>
      <GradesOverview />
      <MissingGradesAlerts />
      <div className='footer-grade'><Footer /></div>
    </div>
  );
};

export default Dashboard;


  
