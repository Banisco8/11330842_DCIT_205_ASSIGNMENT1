import React from "react"
import "../Components/Login.css"
import Footer from '../Components/Footer'


function Login() {

 const popup = () => {
  
    alert('Login Successful')
  }

  return (
<main className='page'>
<div className="cover">
<h1>Login</h1>
<input type="text"placeholder="Student ID" />
<input type="password"placeholder="Password" />


<div className="login-btn" onClick={popup}>Login</div>



<Footer />
</div>
</main>

    
  );
}



export default Login