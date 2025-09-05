import React from 'react'
import './App.css'
import Navbar from './component/Navbar'
import Movielist from './component/Movielist/Movielist'
import fire from './assets/fire.png'
import star from './assets/star.png'
import party from './assets/partying-face.png'
const App = () => {
  return (
    <div className='app'>
     <Navbar />
 <Movielist type="popular" title="Popular" emoji={fire} />
<Movielist type="top_rated" title="Top Rated" emoji={star} />
<Movielist type="upcoming" title="Up Coming" emoji={party} />

    </div>
  )
}

export default App