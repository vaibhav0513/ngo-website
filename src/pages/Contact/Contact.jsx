import React from 'react'
import './Contact.css'
import { assets } from '../../assets/assets'
import { IoMailOpen } from "react-icons/io5";


const Contact = () => {
    const [result, setResult] = React.useState("");
  
    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending message.");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "0e1494d2-6fd1-4152-bace-422f1fafcbd4");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully...😊");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message <img src={assets.msg_icon} alt="" /></h3>
        <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our NGO community.</p>
        <ul>
          <li><img src={assets.mail_icon} alt="" />Contact@RudraVeer.in</li>
          <li><img src={assets.phone_icon} alt="" /> +91 9876543210</li>
          <li><img src={assets.location_icon} alt="" /> 102-A,Galaxy Apt. Kolshet, MH, India</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your name</label>
          <input type="text" name='name' placeholder='Enter your name' required />

          <label>Phone Number</label>
          <input type="text" name='phone' placeholder='Enter your mobile number' required />

          <label>Write your message here</label>
          <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>

          <button type='submit' className='btn '>Send Message <img src={assets.white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
        
      </div>
    </div>
  )
}

export default Contact