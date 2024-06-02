import { useState } from 'react'
import {Route, BrowserRouter, Routes} from "react-router-dom"
import NavBar from './assets/Navbarr'
import './App.css'
import News from './assets/News'
import Bussiness from './assets/Bussiness'
import Technology from './assets/Technology'
import Sport from './assets/Sport'
import Science from './assets/Science'
import Entertainment from './assets/Entertainment'
import newsLetter from './assets/newsLetter'


function App() {
  
  return (
    <div className='container'>
      <NavBar />
      <newsLetter />
      <Routes>
        <Route path="/"  element={<News />} />
        <Route path="/Bussiness"  element={<Bussiness />} />
        <Route path="/Technology"  element={<Technology />} />
        <Route path="/Sport"  element={<Sport />} />
        <Route path="/Science"  element={<Science />} />
        <Route path="/Entertainment"  element={<Entertainment />} />
      </Routes>
    </div>
  )
}

export default App
