import React from 'react';
import {Link, Outlet} from 'react-router-dom'
import Image from './image';
import '../Components/styles.css'
import  '../Components/image.css'
export default function Navbar3(){
  return(
    <>
    <nav className="nav3">
    <a href ="/" className="site-title"><Image /></a>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/GradeReport">Missing Grade Form</Link>
        </li>
        <li>
          <Link to="/MissingGrade">Grade Report</Link>
        </li>
        <li>
          <Link to="/InstructorContact">Instructor Contact</Link>
        </li>
        <li>
          <Link to="/Help">Help And Support</Link>
        </li>
      </ul>
      <Outlet />
    </nav>
    </>
  )
}
