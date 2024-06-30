import React from 'react'
import './TeamMember.css'
import { assets } from '../../assets/assets'

const TeamMember = () => {
  return (
    <div className='TeamMembers'>
      <div className="TeamMember">
        <img src={assets.teamMemberThree} alt="" />
        <div className="caption">
          <p>Shubham Gadge</p> 
          <p>Director</p>
        </div>
      </div>

      <div className="TeamMember">
        <img src={assets.teamMemberOne} alt="" />
        <div className="caption">
          <p>Anna D'souza</p>
          <p>General Director</p>
        </div>
      </div>

      <div className="TeamMember">
        <img src={assets.teamMemberTwo} alt="" />
        <div className="caption">
          <p>Danny Stark</p> 
          <p>Secretory</p>
        </div>
      </div>
    </div>
  )
}

export default TeamMember