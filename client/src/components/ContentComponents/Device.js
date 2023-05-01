import { useState, useEffect } from 'react'
import Switch from './Switch'
import '../../styles/Switch.css'
import io from 'socket.io-client';
const socket = io('http://localhost:3001');

export default function Device({device}) {

  useEffect(() => {
    socket.on('server-message', (data) => {
      console.log('Received message from server:', data);
      if(data.id === device.id) setSwitchValue(data.status)
    });
  }, []);

  const sendToServer=(message)=>{
    console.log("sending to server",message)
    socket.emit('client-message',message);
  }

  
  const [switchValue,setSwitchValue] = useState(device.status);
  const [onTime,setOnTime] = useState(device.onTime)
  const [offTime,setOffTime] = useState(device.offTime)

  return (
    <div className='deviceContent'>

      <div className='device'>
        <div className='deviceNameDiv'>
          {device.name}
        </div>
        <div className='deviceStatusDiv'>
          <Switch 
            id={device.id}
            isOn={switchValue}
            handleToggle={()=>{
              
              sendToServer({
                ...device,
                onTime:onTime,
                offTime:offTime,
                status:!switchValue
              })
              // setSwitchValue(!switchValue)
            }}
          />
        </div>
      </div>
      <details>
          <div className='device-details'>
            <p>PortNumber : </p>
            <p>1</p>
            <p>Status: </p>
            <p>{switchValue?"Running":"Not Running"}</p>
            <p>ScheduleTiming : </p>
            {switchValue?
               <p>offTime :
                <input onChange={(e)=>setOffTime(e.target.value)} value={offTime} type='time'/>
                <br/>
               <button onClick={
                ()=>sendToServer(
                {
                  ...device,
                  offTime:offTime,
                  status:true,
                }
               )}>
                 submit
                </button>
              </p>
              :
               <p>onTime :
                <input onChange={(e)=>setOnTime(e.target.value)} value={onTime} type='time'/> 
                <br/> 
                offTime :
                <input onChange={(e)=>setOffTime(e.target.value)} value={offTime} type='time'/>
                <br/>
                <button onClick={
                ()=>sendToServer(
                  {
                    ...device,
                    onTime:onTime,
                    offTime:offTime,
                    status:false,
                  }
               )}>
                 submit
                </button>
               </p>
            }
          </div>
      </details>

    </div>
    // <div className='device'>
    //   <div className='deviceNameDiv'>
    //     {device.name}
    //   </div>
    //   <div className='deviceStatusDiv'>
    //     <Switch 
    //        id={device.id}
    //        isOn={switchValue}
    //        handleToggle={()=>{
    //          setSwitchValue(!switchValue)
    //          sendToServer({
    //           id:device.id,
    //           status:!switchValue
    //          })
    //        }}
    //     />
    //   </div>
    // </div>
  )
}
