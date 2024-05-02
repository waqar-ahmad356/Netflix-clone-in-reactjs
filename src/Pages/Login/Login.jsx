import React, { useState } from 'react'
import './Login.css';
import logo from '../../assets/logo.png';

const Login = () => {

  const [signstate,setSignState]=useState("Sign In")
  return (
    <div className='login'>
    <img src={logo} className='login-logo' alt='logo'></img>
    <div className='login-form'>
      <h1>{signstate}</h1>
      <form>
      {signstate==="Sign Up"?<input type='text' placeholder='your name'></input>:<></>}
      
      <input type='email' placeholder='your email'></input>
      <input type='password' placeholder='password'></input>
      <button>{signstate}</button>
      <div className='form-help'>
        <div className='remember'>
          <input type='checkbox'></input>
          <label htmlFor=''>Remember Me</label>
        </div>
        <p>Need help?</p>
      </div>

    </form>
    <div className='form-switch'>
    {signstate==="Sign In"?<p>New to Netflix? <span onClick={()=>{setSignState("Sign Up")}}>Sign up Now</span></p>:
      
      <p>Already have account? <span onClick={()=>setSignState("Sign In")}>Sign in Now</span></p>}
    </div>
    </div>
   
    
      
    </div>
  )
}

export default Login
