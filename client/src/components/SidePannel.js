import React from 'react'
import '../styles/SidePannel.css'
import home_icon from '../icons/home-icon.png'
import logout_icon from '../icons/logout-icon.png'
import history_icon from '../icons/history-icon.png'
import reports_icon from '../icons/reports-icon.png'

export default function SidePannel() {
  return (
    <div className="sidenav">
      <div className='route'>
        <img className='home-icon' src={home_icon} alt=''/>
        <p>Home</p>
      </div>
      <div className='route'>
        <img className='home-icon' src={history_icon} alt=''/>
        <p>History</p>
      </div>
      
      <div className='route'>
        <img className='home-icon' src={logout_icon} alt=''/>
        <p>logout</p>
      </div>
    </div>
  )
}
