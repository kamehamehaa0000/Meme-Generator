import React from 'react'
import navlogo from '../assets/navlogo.png'
const Header = () => {
  return (
    <div>
      <div className="nav">
        <img src={navlogo} alt="" />
        <h1>Meme Generator</h1>
        <h3>Project 3</h3>
      </div>
    </div>
  )
}

export default Header
