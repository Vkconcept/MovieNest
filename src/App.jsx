import React from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Movielist from './component/Movielist/Movielist';

// Import MUI icons
import WhatshotIcon from '@mui/icons-material/Whatshot'; // fire
import StarIcon from '@mui/icons-material/Star';         // star
import PartyModeIcon from '@mui/icons-material/PartyMode'; // party

const App = () => {
  return (
    <div className='app'>
      <Navbar />
<Movielist type="popular" title="Popular" emojiType="fire" />
<Movielist type="top_rated" title="Top Rated" emojiType="star" />
<Movielist type="upcoming" title="Up Coming" emojiType="party" />

    </div>
  );
};

export default App;
