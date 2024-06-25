import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Blogs from './pages/Blogs/Blogs'
import Goals from './components/Goals/Goals'
import TeamMember from './components/TeamMember/TeamMember'
import Title from './components/Title/Title'



const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/Blogs' element={<Blogs/>} />
         <Route path='/About' element={<About/>} />
      </Routes>
      <Home/>
      <Goals/>
      <div className="container">
        <Title title='Meet Our Members' subtitle='Help today because tomorrow you may be the one who needs more helping!'/>
         <TeamMember/>
      </div>
      
    </div>
  )
}

export default App

