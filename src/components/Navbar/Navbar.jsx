import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-scroll'
import { RiMenu4Fill } from "react-icons/ri";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  },[]);
  
  const[mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  }

  return (
    <nav className={`container ${sticky ? 'fixed-nav' : ''}`}>
      <h2 className='logo'>RudraVeer</h2>
      <ul className={mobileMenu? '' : 'hide_mobile_menu'}>

        <li><Link to='header' smooth={true} offset={0} duration={500}>Home</Link> </li>
        <li><Link to='about' smooth={true} offset={-260} duration={500}>About</Link> </li>
        <li><Link to='gallery' smooth={true} offset={-260} duration={500}>Gallery</Link> </li>
        <li><Link to='events' smooth={true} offset={-260} duration={500}>Events</Link> </li>
        <li><Link to='contact' smooth={true} offset={-260} duration={500}>Contact</Link> </li>
        <li><button className='btn'>Donate now</button></li>
      </ul>
      {/* <img src={assets.menu_icon} alt="" className='menu_icon' onClick={toggleMenu} /> */}
      <RiMenu4Fill  size={30}  className='menu_icon' onClick={toggleMenu}/>
    </nav>
  )
} 

export default Navbar