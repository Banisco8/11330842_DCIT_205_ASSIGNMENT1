import React from 'react';
import  '../Components/image.css'
import Navbar2 from '../Components/Navbar2'
import ContactInfoItem from '../Components/ContactInfoItem'
import ContactInfo from '../Components/ContactInfo'

const Contactsection = () => {
  return (
    <section>
    <div><Navbar2 /></div>
       
      <div className='container'>
      <h1 >Contact</h1>
       <h2>get in touch</h2>
        
      </div>
      <div className="contactSection_wrapper">
       <div className="left">
       <ContactInfo />
       </div>
       <div className="right">
       <ContactInfoItem />
       </div>


      </div>

      
   
    </section>
  );
}

export default Contactsection;
