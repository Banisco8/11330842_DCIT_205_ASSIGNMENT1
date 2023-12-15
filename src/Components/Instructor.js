// InstructorContactPage.js
import React, { useState } from 'react';
import InstructorList from './InstructorList';
import '../Components/form.css'
import Navbar3 from '../Components/Navbar3'
import Footer from '../Components/Footer'
import  '../Components/image.css'

const Instructor = () => {
  const [selectedInstructor, setSelectedInstructor] = useState(null);

  const handleInstructorClick = (instructor) => {
    setSelectedInstructor(instructor); 
  };

  const handleSendEmail = () => {
    
    if (selectedInstructor) {
      alert(`Simulated email sent to ${selectedInstructor.name}`);
    }
  };

  return (
   
    <div>
      <div ><Navbar3 /></div>
      <h2>Instructor Contact Page</h2>
      <InstructorList onInstructorClick={handleInstructorClick} />
      {selectedInstructor && (
        <div>
          <h3>Contact Details</h3>
          <p>Name: {selectedInstructor.name}</p>
          <p>Email: {selectedInstructor.email}</p>
          <button onClick={handleSendEmail}>Send Email</button>
        </div>
      )}
       <div className='footer-grade'><Footer /></div>
    </div>
  );
};

export default Instructor;

