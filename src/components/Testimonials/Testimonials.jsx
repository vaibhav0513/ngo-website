import React, { useRef } from 'react'
import './Testimonials.css'
import { assets } from '../../assets/assets'


const Testimonials = () => {
  const slider = useRef();
  let tx=0;

  const slideForward = () =>  {
    if(tx > -50){
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  }
  const slideBackward = () =>  {
    if(tx < 0){
      tx += 25;
    }    
    slider.current.style.transform = `translateX(${tx}%)`;
  }
  return (
    <div className='Testimonials blogs'>
      <img src={assets.next_icon} alt="" className='next-btn' onClick={slideForward}  />
      <img src={assets.back_icon} alt="" className='back-btn' onClick={slideBackward} />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={assets.user_1} alt="" />
                <div>
                  <h3>Anna Stark</h3>
                  <span>Tech Info, Noida</span>
                </div>
              </div>
              <p>
              Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment.
              </p>
            </div>
          </li>

          {/* User-info-2  */}
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={assets.user_2} alt="" />
                <div>
                  <h3>Thor</h3>
                  <span>Tech mahindra, Pune</span>
                </div>
              </div>
              <p>
              Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment.
              </p>
            </div>
          </li>

          {/* User-info-3  */}
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={assets.user_3} alt="" />
                <div>
                  <h3>Jullie Costa</h3>
                  <span>Tech Sierra, Thane</span>
                </div>
              </div>
              <p>
              Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment.
              </p>
            </div>
          </li>

          {/* User-info-4  */}
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={assets.user_4} alt="" />
                <div>
                  <h3>Captain</h3>
                  <span>Microsoft, Hydrabad</span>
                </div>
              </div>
              <p>
              Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment.
              </p>
            </div>
          </li>
        </ul>
      </div>

    </div>
  )
}

export default Testimonials