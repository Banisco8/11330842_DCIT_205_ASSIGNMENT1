import React from 'react';
import { useState } from 'react';
import  '../Components/styles.css'

  
  
const ContactInfoItem = () => {
  const [data, setData] = useState({name: "",email:"", message: ""});
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
    <section className="holder" method='post' onSubmit={handleSubmit}>
   <input type="text" onChange={handleChange} value={data.name}
        placeholder='Full Name'
        name='name' required />
        <input type="email" onChange={handleChange} value={data.handleChangeemail}
        placeholder='Email'
        name='email' required />
        <textarea name="message" onChange={handleChange} value={data.message}
        cols="30" rows="10" placeholder='Message'></textarea>
        <button type="submit">Submit</button>
 
    </section>
  );   
}

export default ContactInfoItem;
