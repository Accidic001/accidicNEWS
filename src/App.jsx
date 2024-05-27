import { useState } from 'react'
import NavBar from './assets/Navbarr'
import './App.css'
import News from './assets/News'

function App() {
  
  return (
    <div className='container'>
      <NavBar />
      <h1 className='text-center text-uppercase mt-4 text-success'>wellcome to accidicNews....</h1>
      <News />
    </div>
  )
}

export default App
