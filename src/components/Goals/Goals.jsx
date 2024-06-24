import React from "react";
import './Goals.css';
import { assets } from "../../assets/assets";


const Goals = () => {
  return (
    <div className="Sub_Container">

      <div className="New_Container">
        <div className="Profile_section">
          <img src={assets.profile} className="Profile_img" />
          <h2 className="Profile_Name">Jonathan Smith</h2>
          <p className="Profile_Designation">CEO & Founder of Charitify.</p>
          <p className="Profile_Content">
            The secret to happiness lies in helping others. Never underestimate the difference YOU can make in the lives of the poor, the abused and the helpless.
          </p>
        </div>
        <div className="History_section">
          <img className="HistoryImg" src={assets.history} />
          <h2 className="History_heading">Our History</h2>
          <p className="History_content">
            The secret to happiness lies in helping others. Never underestimate the difference YOU can make in the lives of the poor.
          </p>
          <button className="btn_history">Read More</button>
        </div>
        <div className="OurMission_Section">
          <img className="MissionImg" src={assets.mission} />
          <h2 className="Mission_heading">Our Mission</h2>
          <p className="Mission_content">
            The secret to happiness lies in helping others. Never underestimate the difference YOU can make in the lives of the poor.
          </p>
          <button className="btn_mission">Read More</button>
        </div>
      </div>
    </div>


  )
}

export default Goals
