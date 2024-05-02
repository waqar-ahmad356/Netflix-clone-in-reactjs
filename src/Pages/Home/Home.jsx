import React from 'react'
import './Home.css';
import Navbar from '../../components/Navbar/Navbar';
import Hero from '../../components/Hero/Hero';
import TitleCards from '../../components/TitleCards/TitleCards';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <div>
    <Navbar/>
    <Hero/>
    <div className='more-cards'>
    <TitleCards title={"Blockbuster Movies"}/>
    <TitleCards title={"Only on Netflix"}/>
    <TitleCards title={"Upcoming"}/>
    <TitleCards title={"Top pics for you"}/>
    </div>
    <Footer/>
    </div>
  )
}

export default Home
