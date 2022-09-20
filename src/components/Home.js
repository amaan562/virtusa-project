import React from 'react'
import Navbar from './Navbar'

function Home() {
  return (
    <div className='home'>
      <Navbar/>
    <h1 style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>Home</h1>
    </div>
  )
}

export default Home
