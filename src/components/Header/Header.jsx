import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
      <div className="header-contents">
        <h2>Give a little. change a lot.</h2>
        <p>Help today because tomorrow you may be the one who needs helping!
        Forget what you can get and see what you can give.</p>
        <div className="header-contents-buttons">
          <button>Join with us</button>
          <button>Donate Now</button>
        </div>
      </div>
    </div>
  )
}

export default Header