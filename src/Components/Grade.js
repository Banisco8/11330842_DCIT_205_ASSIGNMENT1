import React from 'react';
import { useState } from 'react';
import Navbar2 from '../Components/Navbar2'
import Footer from '../Components/Footer'
import  '../Components/image.css'
const Grade = () => {
  const [data, setData] = useState({name: "",insname:"", subject: "", message: ""});
  const handleChange = (e) =>{
  const name = e.target.name;
  const value = e.target.value;
  setData({...data,[name]: value})
  }
  const handleSubmit = (e)=>{
  e.preventDefault()
  alert('Successful Submission')
  }
  return (
    <section>
      <div><Navbar2 /></div>

      <form method='post' onSubmit={handleSubmit}>
    
      <h1>Missing Grade Form</h1>
  

        <input type="text" onChange={handleChange} value={data.name}
        placeholder='Course Name'
        name='name' required />
        <input type="text" onChange={handleChange} value={data.insname}
        placeholder='Instructor Name'
        name='insname' required />
        <input type="text"
        placeholder='Expected Grade' onChange={handleChange} value={data.subject}
        name='subject' required />
        <textarea name="message" onChange={handleChange} value={data.message}
        cols="30" rows="10" placeholder='Message'></textarea>
        <button type="submit">Submit</button>
      
      </form>

      <div className='footer-grade'><Footer /></div>
   
    </section>
  );
}

export default Grade;
