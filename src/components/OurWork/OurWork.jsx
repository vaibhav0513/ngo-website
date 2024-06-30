import React from 'react'
import './OurWork.css'
import { assets } from '../../assets/assets'

const OurWork = () => {
  return (
    <div className='our-work'>
      <div className="gallery">
        <img src={assets.gallery_1} alt="" />
        <img src={assets.gallery_2} alt="" />
        <img src={assets.gallery_3} alt="" />
        <img src={assets.gallery_4} alt="" />
      </div>
      <button className='btn'>See more here <img src={assets.white_arrow} alt="" /></button>

    </div>
  )
}

export default OurWork