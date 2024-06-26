import React from 'react';
import './Hero.css';
import hero_banner from '../../assets/hero_banner.jpg';
import hero_title from '../../assets/hero_title.png';
import play_icon from '../../assets/play_icon.png';
import info_icon from '../../assets/info_icon.png';
import TitleCards from '../TitleCards/TitleCards';

// Hero component displaying the main banner, title, description, and buttons
const Hero = () => {
  return (
    <div className='hero'>
      {/* Main banner image */}
      <img src={hero_banner} alt='banner' className='banner-img'></img>
      <div className='hero-caption'>
        {/* Title image */}
        <img src={hero_title} alt='title' className='caption-img'></img>
        {/* Description */}
        <p className='title-card'>Discovering his ties to a secret ancient order, a young
          man living in modern Istanbul embarks on a quest to save the city
          from an immortal enemy. </p>
        <div className='hero-btns'>
          {/* Play button */}
          <button className='btn'><img src={play_icon} alt='play'></img>Play</button>
          {/* More info button */}
          <button className='btn dark-btn'><img src={info_icon} alt='play'></img>More Info</button>
        </div>
        {/* Component for displaying title cards */}
        <div className='caption-card'>
          <TitleCards/>
        </div>
      </div>
    </div>
  );
}

export default Hero;
