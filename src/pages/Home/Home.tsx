import React from 'react'
import './Home.scss'
import Login from '../../components/Login'
import Hello from '../Hello/Hello'

function Home() {
  return (
    <div className='home'>
        <p>Đây là dev làm</p>
        
        <Login/>
        <Hello/>
        <p>Release đã viết cài này</p>
    </div>
  )
}

export default Home