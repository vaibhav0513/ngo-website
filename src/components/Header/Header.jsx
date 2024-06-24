import React from 'react'
import './Header.css'
import { assets } from '../../assets/assets'

const Header = () => {
  return (
    <div className='header'>
      <div className="header-contents">
        <h2>Give a little. change a lot.</h2>
        <h4>Together we can make a Difference</h4>
        <p>Help today because tomorrow you may be the one who needs helping!
        Forget what you can get and see what you can give.Help today because tomorrow you may be the one who needs helping!
        Forget what you can get and see what you can give.Help today because tomorrow you may be the one who needs helping!
        Forget what you can get and see what you can give.</p>
        <div className="header-contents-btns">
          <button>Join with us</button>
          <button>Donate Now</button>
        </div>
      </div>

      {/**************************************Donation Section.****************************************/}

      {/* <div className='box-container'>
        <div className="box">
          <img src={assets.money} alt="" />
          <h3>Make Donation</h3>
          <p>Help today because tomorrow you may be the one who needs helping!</p>
          <p>Read More...</p>
        </div>

        <div className="box">
          <img src={assets.growth} alt="" />
          <h3>Fundrising</h3>
          <p>Help today because tomorrow you may be the one who needs helping!</p>
          <p>Read More...</p>
        </div>

        <div className="box">
          <img src={assets.teamwork} alt="" />
          <h3>Become A Member</h3>
          <p>Help today because tomorrow you may be the one who needs helping!</p>
          <p>Read More...</p>
        </div>
      </div> */}
    </div>
  )
}

export default Header