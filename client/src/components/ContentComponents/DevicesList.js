import React, { useEffect, useState } from 'react'
// import RoomAPI from '../Data/APIdata'
import Device from '../ContentComponents/Device'


export default function DevicesList() {
  const [devicesList,setDevicesList]= useState([]);
  useEffect(()=>{
    fetch("http://localhost:3001/api/v1/room/1/devices").then((res)=>res.json()).then((data)=>{
      setDevicesList(data)
      console.log(data)
    }).catch((e)=>console.log(e))
   
  },[])


  return (
    <div className='devices-lists'>
      {
        devicesList.map((device,index)=>{
          return <Device device={device} key={index}/>
        })
      }
    </div>
  )
}
