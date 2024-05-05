import React from 'react';
import './Footer.css';
import youtube_icon from '../../assets/youtube_icon.png';
import twitter_icon from '../../assets/twitter_icon.png';
import facebook_icon from '../../assets/facebook_icon.png';
import instagram_icon from '../../assets/instagram_icon.png';

// Footer component displaying social media icons and links
const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-icons'>
        {/* Social media icons */}
        <img src={facebook_icon} alt='Facebook'></img>
        <img src={instagram_icon} alt='Instagram'></img>
        <img src={youtube_icon} alt='YouTube'></img>
        <img src={twitter_icon} alt='Twitter'></img>
      </div>
      {/* List of footer links */}
      <ul>
        <li>Audio Description</li>
        <li>Help Center</li>
        <li>Gift Cards</li>
        <li>Media Center</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>
      {/* Copyright text */}
      <p className='copy-right-text'>&copy; 1997-2024 Netflix, Inc.</p>
    </div>
  );
};

export default Footer;
