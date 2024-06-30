import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-scroll'
import { TiThMenu } from "react-icons/ti"

const Navbar = () => {
  const [menu,setMenu] = useState("Home");

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
      {/* <img src={assets.logo} alt="" className='logo'/> */}
      <ul className={mobileMenu? '' : 'hide_mobile_menu'}>

        <li><Link to='header' smooth={true} offset={0} duration={500}>Home</Link> </li>
        <li><Link to='about' smooth={true} offset={-260} duration={500}>About</Link> </li>
        <li><Link to='blogs' smooth={true} offset={-260} duration={500}>Blogs</Link> </li>
        <li><Link to='events' smooth={true} offset={-260} duration={500}>Events</Link> </li>
        <li><Link to='contact' smooth={true} offset={-260} duration={500}>Contact</Link> </li>
        <li><button className='btn'>Donate now</button></li>
      </ul>
      {/* <img src={assets.menu_icon} alt="" className='menu_icon' onClick={toggleMenu} /> */}
      <TiThMenu  size={30}  className='menu_icon' onClick={toggleMenu}/>

    </nav>


























    // <div className='navbar'>
    //   <h2 className='logo'>RudraVeer</h2>
  
    //   <nav className={`container ${sticky ? 'fixed-nav' : ''}`}>
    //   <ul className="navbar-menu">
    //     <li onClick={()=>setMenu("Home")} className={menu==="Home"?"active":""}><NavLink to='/' smooth={true} offset={0} duration={500}> Home </NavLink> </li>

    //     <li onClick={()=>setMenu("About")} className={menu==="About"?"active":""}><NavLink to='/about' smooth={true} offset={-260} duration={500}> About </NavLink></li>

    //     <li onClick={()=>setMenu("Events")} className={menu==="Events"?"active":""}><NavLink to='/events' smooth={true} offset={-150} duration={500}>Events</NavLink></li>

    //     <li onClick={()=>setMenu("Blogs")} className={menu==="Blogs"?"active":""}><NavLink to='/blogs' smooth={true} offset={0} duration={-260}>Blogs</NavLink></li>

    //     <li onClick={()=>setMenu("Contact")} className={menu==="Contact"?"active":""}><NavLink to='/contact' smooth={true} offset={-260} duration={500}>Contact</NavLink></li>
    //   </ul>
    //   </nav>
    //   <div className="navbar-right">
    //     <button type="button">Donate Now</button>
    //   </div>
    // </div>
  )
} 

export default Navbar