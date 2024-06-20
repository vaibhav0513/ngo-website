import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Blogs from './pages/Blogs/Blogs'


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
    </div>
  )
}

export default App