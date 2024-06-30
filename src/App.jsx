import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Blogs from './pages/Blogs/Blogs'
import Goals from './components/Goals/Goals'
import TeamMember from './components/TeamMember/TeamMember'
import Title from './components/Title/Title'
import About from './pages/About/About'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './pages/Contact/Contact'
import VideoPlayer from './components/VideoPlayer/VideoPlayer'
import OurWork from './components/OurWork/OurWork'

const App = () => {

  const [playState, setPlayState] = useState(false);

  return (
    <div className='app'>
      <Navbar/>
      <Routes>
         <Route path='/home' element={<Home/>} />
         <Route path='/about' element={<About/>} />
         <Route path='/gallery' element={<Blogs/>} />
         {/* <Route path='/about' element={<Events/>} /> */}
         <Route path='/contact' element={<Contact/>} />
      </Routes>
      <Home/>
      <Goals/>
      <div className="container">
        <Title title='Meet Our Members' subtitle='Help today because tomorrow you may be the one who needs more helping!'/>
         <TeamMember/>
         <About setPlayState = {setPlayState}/>

         <Title title='Helping Hands: Essential Services for All' subtitle='Recent work photos'/>
         <OurWork/>

         <Title title='What People Say About Us' subtitle='Help today because tomorrow you may be the one who needs more helping!'/>
         <Testimonials/>

         <Title title='Contact With Us' subtitle='Get in Touch'/>
         <Contact/>
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </div>
  )
}

export default App

