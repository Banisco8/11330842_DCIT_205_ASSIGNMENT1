import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './Components/styles.css'
import Login from './Components/Login'
import Help from './Components/Help'
import Instructor from './Components/Instructor'
import Missing from './Components/Missing'
import Grade from './Components/Grade'  
import Dashboard from './Components/Dashboard'
import Home from './Components/Home' 





function App  (){
  return (
   
    
      <BrowserRouter>
      <Routes>
        <Route index element={<Home />}/>
        <Route path='/' element={<Home />}/>
        <Route path='/Dashboard' element={<Dashboard />}/>
        <Route path='/GradeReport' element={<Grade />}/>
        <Route path='/MissingGrade' element={<Missing />}/>
        <Route path='/InstructorContact' element={<Instructor />}/>
        <Route path='/Help' element={<Help />}/>
        <Route path='/Login' element={<Login />}/>
      </Routes>
      </BrowserRouter>
   
     
  
  );
}

export default App;