import React from 'react';
import {Link, Outlet} from 'react-router-dom'
import Image from './image';
import '../Components/styles.css'
import  '../Components/image.css'
export default function Navbar(){
  return(
    <>
    <nav className="nav">
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
          <Link to="/MissingGrade">Grade Form</Link>
        </li>
        <li>
          <Link to="/InstructorContact">Instructor Contact</Link>
        </li>
        <li>
          <Link to="/Help">Help And Support</Link>
        </li>
        <li>
          <Link to="/Login">Login</Link>
        </li>
      </ul>
      <Outlet />
    </nav>
    </>
  )
}
