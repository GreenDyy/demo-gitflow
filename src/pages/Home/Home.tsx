import React from 'react'
import './Home.scss'
import Login from '../../components/Login'
import Hello from '../Hello/Hello'
import ThanhToan from '../../components/ThanhToan'

function Home() {
  return (
    <div className='home'>
        <p>Đây là dev làm</p>
        
        <Login/>
        <Hello/>
        <ThanhToan/>
    </div>
  )
}

export default Home