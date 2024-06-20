import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {
  const [menu,setMenu] = useState("Home");

  return (
    <div className='navbar'>
      <h2 className='logo'>Rudra-Veer</h2>
      {/* <img src= {assets.logo} alt="" className='logo' /> */}
      <ul className="navbar-menu">
        <li onClick={()=>setMenu("Home")} className={menu==="Home"?"active":""}>Home</li>
        <li onClick={()=>setMenu("About")} className={menu==="About"?"active":""}>About</li>
        <li onClick={()=>setMenu("Events")} className={menu==="Events"?"active":""}>Events</li>
        <li onClick={()=>setMenu("Blogs")} className={menu==="Blogs"?"active":""}>Blogs</li>
        <li onClick={()=>setMenu("Contact")} className={menu==="Contact"?"active":""}>Contact</li>
      </ul>
      <div className="navbar-right">
        <button type="button">Donate</button>
      </div>
    </div>
  )
}

export default Navbar