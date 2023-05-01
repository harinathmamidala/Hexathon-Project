import React from 'react'
import DevicesList from '../ContentComponents/DevicesList'
import DevicesGraph from './DevicesGraph'

export default function DevicesBlock() {
  return (
    <div className='devices-div'>
      <DevicesList />
      <DevicesGraph/>
    </div>
  )
}
