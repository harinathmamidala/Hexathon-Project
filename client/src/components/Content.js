import '../styles/Content.css'



import DevicesBlock from './ContentComponents/DevicesBlock'
import HistoryStats from './ContentComponents/HistoryStats'

import { useEffect, useState } from 'react'
import io from 'socket.io-client';
const socket = io('http://localhost:3001');

export default function Content() {

  const [roomProperties,setRoomProperties] = useState({})

  const [powerConsumed,setPowerConsumed] = useState(0)

  useEffect(()=>{
    fetch("http://localhost:3001/api/v1/room/1/properties")
    .then((res)=>res.json())
    .then((data)=>{
      setRoomProperties(data)
      setPowerConsumed(data.energyConsumedToday)
    })
    socket.on('server-message-energyconsuption', (data) => {
      console.log(data)
      setPowerConsumed(data);
    });
  },[])

  return (
    <div className='content'>
      <div className="header">
        <h2>Room 1</h2>
      </div>

      <HistoryStats />
      <div className='room-properties'>
        <h4>Room Status</h4>
        <p>Energy Consumed Today  : {powerConsumed} units</p>
        <p>Expected energy Today: {roomProperties.expectedEnergyToday} units</p>
        <p>ZONE : { roomProperties.expectedEnergyToday - powerConsumed>=0?
        <span style={{color:"green"}}>"Green Zone"</span>:
        <span style={{color:"red"}}>"Red Zone"</span>}</p>
        <p>Power Usage This month: {roomProperties.energyConsumedThisMonth} units</p>
        <p>No of Ports : {roomProperties.numberOfPortsAvailable} </p>
      </div>
      <DevicesBlock  />
      

      

     

      <div className="footer">
        <p>Footer</p>
      </div>
    </div>
  )
}
