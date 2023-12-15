import React from 'react';
import Navbar2 from '../Components/Navbar2'
import GradeList from '../Components/GradeList'
import FilterSemester from '../Components/FilterSemester';
import Footer from '../Components/Footer'
import  '../Components/image.css'
const Missing = () => {
  return (
  <section>
    <div ><Navbar2 /></div>
    <FilterSemester />
    <GradeList />
    <div className='footer-grade'><Footer /></div>
  </section>
  );
}

export default Missing;
