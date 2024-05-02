import React from 'react';
import './Hero.css';
import hero_banner from '../../assets/hero_banner.jpg';
import hero_title from '../../assets/hero_title.png';
import play_icon from '../../assets/play_icon.png';
import info_icon from '../../assets/info_icon.png';
import TitleCards from '../TitleCards/TitleCards';


const Hero = () => {
  return (
    <div className='hero'>
    <img src={hero_banner} alt='banner' className='banner-img'></img>
    <div className='hero-caption'>
        <img src={hero_title} alt='title' className='caption-img'></img>
        <p>Discovering his ties to a secret ancient order, a young
        man living in modern Istanbul embarks on a quest to save the city
        from an immortal enemy. </p>
        <div className='hero-btns'>
            <button className='btn'><img src={play_icon} alt='play'></img>Play</button>
            <button className='btn dark-btn'><img src={info_icon} alt='play'></img>More Info</button>
        </div>  
        <TitleCards/>
         </div>
        
      
    </div>
  )
}

export default Hero
