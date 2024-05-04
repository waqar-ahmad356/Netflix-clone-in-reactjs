import React, { useEffect } from 'react'
import Home from './Pages/Home/Home'
import { Route,Routes, useNavigate } from 'react-router-dom'
import Login from'./Pages/Login/Login'
import Player from './Pages/Player/Player'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {

  const naviaget=useNavigate();

  useEffect(()=>{
    onAuthStateChanged(auth,async(user)=>{
      if(user){
        console.log("Logged in");
        naviaget('/');
      }
      else{
        console.log("Logout")
        naviaget('/login')
      }

    })
  },[])
  return (
    <div>
    <ToastContainer theme='dark'/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/player/:id' element={<Player/>}></Route>
    </Routes>
   
      
    </div>
  )
}

export default App
