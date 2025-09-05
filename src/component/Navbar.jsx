import React, { useState } from 'react';
import './Navbar.css';
import Fire from '../assets/fire.png';
import Star from '../assets/star.png';
import Party from '../assets/partying-face.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo + Hamburger (small screens) */}
      <div className="logo-hamburger">
        <h1 className="logo">MovieNest</h1>
        <button className="hamburger" onClick={() => setMenuOpen(true)}>☰</button>
      </div>

      {/* Desktop links */}
      <div className="navbar_links">
        <a href="#popular">Popular <img src={Fire} alt="fire emoji" className='Navbar_emoji' /></a>
        <a href="#top_rated">Top Rated <img src={Star} alt="star emoji" className='Navbar_emoji' /></a>
        <a href="#upcoming">Upcoming <img src={Party} alt="party emoji" className='Navbar_emoji' /></a>
      </div>

      {/* Sliding menu for small screens */}
      <div className={`side_menu ${menuOpen ? 'open' : ''}`}>
        <button className='close_btn' onClick={() => setMenuOpen(false)}>×</button>
        <a href="#popular">Popular <img src={Fire} alt="fire emoji" className='Navbar_emoji' /></a>
        <a href="#top_rated">Top Rated <img src={Star} alt="star emoji" className='Navbar_emoji' /></a>
        <a href="#upcoming">Upcoming <img src={Party} alt="party emoji" className='Navbar_emoji' /></a>
      </div>

      {/* Overlay */}
      {menuOpen && <div className='overlay' onClick={() => setMenuOpen(false)}></div>}
    </nav>
  );
};

export default Navbar;
