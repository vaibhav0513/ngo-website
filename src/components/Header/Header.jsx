import React from 'react'
import './Header.css'
import { assets } from '../../assets/assets'

const Header = () => {
  return (
    <div className='header container'>
      <div className="header-text">
        <h1>Transforming Communities with Love and Support</h1>
        <p>Welcome to our organization, where compassion meets action. We are dedicated to providing essential support to those in need, ensuring that everyone in our community has access to the basic necessities of life.</p>
        <button className='btn'>Join Our Mission <img src={assets.white_arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Header