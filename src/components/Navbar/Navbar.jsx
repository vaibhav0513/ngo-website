import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const [menu,setMenu] = useState("Home");

  return (
    <div className='navbar'>
      <h2 className='logo'>RudraVeer</h2>
      {/* <img src= {assets.logo} alt="" className='logo' /> */}
      <nav className='container'>
      <ul className="navbar-menu">
        <li onClick={()=>setMenu("Home")} className={menu==="Home"?"active":""}><NavLink to='/' smooth={true} offset={0} duration={500}> Home </NavLink> </li>

        <li onClick={()=>setMenu("About")} className={menu==="About"?"active":""}><NavLink to='/about' smooth={true} offset={-260} duration={500}> About </NavLink></li>

        <li onClick={()=>setMenu("Events")} className={menu==="Events"?"active":""}><NavLink to='/events' smooth={true} offset={-150} duration={500}>Events</NavLink></li>

        <li onClick={()=>setMenu("Blogs")} className={menu==="Blogs"?"active":""}><NavLink to='/blogs' smooth={true} offset={0} duration={-260}>Blogs</NavLink></li>

        <li onClick={()=>setMenu("Contact")} className={menu==="Contact"?"active":""}><NavLink to='/contact' smooth={true} offset={-260} duration={500}>Contact</NavLink></li>
      </ul>
      </nav>
      <div className="navbar-right">
        <button type="button">Donate Now</button>
      </div>
    </div>
  )
} 

export default Navbar