import React, { useEffect, useRef } from 'react'; // Importing React, useEffect, and useRef from React library
import './Navbar.css'; // Importing CSS file for Navbar styling
import logo from '../../assets/logo.png'; // Importing logo image
import search_icon from '../../assets/search_icon.svg'; // Importing search icon image
import bell_icon from '../../assets/bell_icon.svg'; // Importing bell icon image
import profile_img from '../../assets/profile_img.png'; // Importing profile image
import caret_icon from '../../assets/caret_icon.svg'; // Importing caret icon image
import { logout } from '../../firebase'; // Importing logout function from firebase module

// Navbar component displaying the navigation bar at the top of the page
const Navbar = () => {
  // Creating a reference to the navbar element
  const navRef = useRef();

  // Effect hook to handle navbar color change on scroll
  useEffect(() => {
    // Event listener to detect scroll event
    window.addEventListener('scroll', () => {
      // Adding or removing 'nav-dark' class based on scroll position
      if (window.scrollY >= 80) {
        navRef.current.classList.add('nav-dark');
      } else {
        navRef.current.classList.remove('nav-dark');
      }
    });
    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('scroll');
    };
  }, []); // Empty dependency array ensures the effect only runs once after initial render

  // Rendering navbar elements
  return (
    <div className='navbar' ref={navRef}> {/* Navbar container with reference to navRef */}
      <div className='navbar-left'>
        <img src={logo} alt='logo'></img> {/* Netflix logo */}
        <ul> {/* List of navigation links */}
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Language</li>
        </ul>
      </div>
      <div className='navbar-right'>
        <img src={search_icon} alt='search' className='icons'></img> {/* Search icon */}
        <p>Children</p> {/* Text indicating children's section */}
        <img src={bell_icon} alt='search' className='icons'></img> {/* Bell icon for notifications */}
        <div className='navbar-profile'>
          <img src={profile_img} alt='profile-icon' className='profile'></img> {/* Profile icon */}
          <img src={caret_icon} alt='profile-icon'></img> {/* Caret icon for dropdown */}
          <div className='dropdown'> {/* Dropdown menu for user options */}
            <p onClick={() => { logout() }}>Sign Out of Netflix</p> {/* Option to sign out */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar; // Exporting Navbar component
