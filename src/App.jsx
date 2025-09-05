import React from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Movielist from './component/Movielist/Movielist';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Movielist type="popular" title="Popular" emoji="/fire.png" />
      <Movielist type="top_rated" title="Top Rated" emoji="/star.png" />
      <Movielist type="upcoming" title="Up Coming" emoji="/partying-face.png" />
    </div>
  );
};

export default App;
