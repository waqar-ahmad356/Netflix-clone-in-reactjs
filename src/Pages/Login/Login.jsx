import React, { useState } from 'react'
import './Login.css';
import logo from '../../assets/logo.png';
import {login,signUp} from '../../firebase'
import netflix_spinner from '../../assets/netflix_spinner.gif';

const Login = () => {

  const [signstate,setSignState]=useState("Sign In")
  const [name,setName]=useState("");
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [loading,setLoading]=useState(false);


  const userAuth=async(event)=>{
    event.preventDefault();
    setLoading(true);
    if(signstate==="Sign In"){
      await login(email,password);

    }
    else{
      await signUp(name,email,password)
    }
    setLoading(false)
  }
  return (
    
      loading?<div className="login-spinner">
      <img src={netflix_spinner} alt=''></img>

      </div>:
    
    <div className='login'>
    <img src={logo} className='login-logo' alt='logo'></img>
    <div className='login-form'>
      <h1>{signstate}</h1>
      <form>
      {signstate==="Sign Up"?<input value={name} onChange={(e)=>setName(e.target.value)} type='text' placeholder='your name'></input>:<></>}
      
      <input value={email} onChange={(e)=>setEmail(e.target.value)} type='email' placeholder='your email'></input>
      <input value={password} onChange={(e)=>setPassword(e.target.value)} type='password' placeholder='password'></input>
      <button onClick={userAuth} type='submit'>{signstate}</button>
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
