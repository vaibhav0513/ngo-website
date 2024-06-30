import React, { useRef } from 'react'
import './VideoPlayer.css'
import { assets } from '../../assets/assets'

const VideoPlayer = ({playState, setPlayState}) => {

  const player = useRef(null);
  const closePlayer = (e) => {
    if(e.target === player.current) {
      setPlayState(false);
    }
  }
  return (
    <div className={`video-player ${playState?'' : 'hide'}`} ref={player} onClick={closePlayer}>
      <video src={assets.about_video} autoPlay muted controls></video>
      VideoPlayer
    </div>
  )
}

export default VideoPlayer