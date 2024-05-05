import React, { useState } from 'react';
import './Login.css';
import logo from '../../assets/logo.png';
import { login, signUp } from '../../firebase';
import netflix_spinner from '../../assets/netflix_spinner.gif';

// Login component for user authentication
const Login = () => {
  const [signState, setSignState] = useState("Sign In"); // State for sign-in/sign-up toggle
  const [name, setName] = useState(""); // State for user's name
  const [email, setEmail] = useState(""); // State for user's email
  const [password, setPassword] = useState(""); // State for user's password
  const [loading, setLoading] = useState(false); // State for loading spinner

  // Function to handle user authentication
  const userAuth = async (event) => {
    event.preventDefault();
    setLoading(true);
    if (signState === "Sign In") {
      await login(email, password);
    } else {
      await signUp(name, email, password);
    }
    setLoading(false);
  }

  // Rendering login form
  return (
    loading ? (
      <div className="login-spinner">
        <img src={netflix_spinner} alt='' />
      </div>
    ) : (
      <div className='login'>
        <img src={logo} className='login-logo' alt='logo' />
        <div className='login-form'>
          <h1>{signState}</h1>
          <form>
            {signState === "Sign Up" ? (
              <input value={name} onChange={(e) => setName(e.target.value)} type='text' placeholder='Your name' />
            ) : null}
            <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Your email' />
            <input value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Password' />
            <button onClick={userAuth} type='submit'>{signState}</button>
            <div className='form-help'>
              <div className='remember'>
                <input type='checkbox' />
                <label htmlFor=''>Remember Me</label>
              </div>
              <p>Need help?</p>
            </div>
          </form>
          <div className='form-switch'>
            {signState === "Sign In" ? (
              <p>New to Netflix? <span onClick={() => { setSignState("Sign Up") }}>Sign up Now</span></p>
            ) : (
              <p>Already have an account? <span onClick={() => setSignState("Sign In")}>Sign in Now</span></p>
            )}
          </div>
        </div>
      </div>
    )
  );
}

export default Login;
