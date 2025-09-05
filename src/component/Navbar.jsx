import React, { useState } from 'react';
import './Navbar.css';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import StarIcon from '@mui/icons-material/Star';
import CelebrationIcon from '@mui/icons-material/Celebration';

const iconStyle = { color: '#ffe400' }; // Yellow color

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo-hamburger">
        <h1 className="logo">MovieNest</h1>
        <button className="hamburger" onClick={() => setMenuOpen(true)}>☰</button>
      </div>

      <div className="navbar_links">
        <a href="#popular">Popular <WhatshotIcon style={iconStyle} /></a>
        <a href="#top_rated">Top Rated <StarIcon style={iconStyle} /></a>
        <a href="#upcoming">Upcoming <CelebrationIcon style={iconStyle} /></a>
      </div>

      <div className={`side_menu ${menuOpen ? 'open' : ''}`}>
        <button className='close_btn' onClick={() => setMenuOpen(false)}>×</button>
        <a href="#popular">Popular <WhatshotIcon style={iconStyle} /></a>
        <a href="#top_rated">Top Rated <StarIcon style={iconStyle} /></a>
        <a href="#upcoming">Upcoming <CelebrationIcon style={iconStyle} /></a>
      </div>

      {menuOpen && <div className='overlay' onClick={() => setMenuOpen(false)}></div>}
    </nav>
  );
};

export default Navbar;
