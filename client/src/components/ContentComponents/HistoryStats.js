import React from 'react'
import {data as data1,options as options1} from '../Data/Data'
import {data as data2,options as options2} from '../Data/Data2'
// import {data as data3,options as options3} from '../Data/Data3'

import {Pie} from 'react-chartjs-2'
import { Line } from 'react-chartjs-2';
// import { Bar } from 'react-chartjs-2';


export default function HistoryStats() {
  return (
    <div className="row">
      {/* <div className="column">
        <h4>Till Now Usage</h4>
        <Pie data={data1} /></div> */}
      <div className="column"><Line options={options2} data={data2} /></div>
      <div className="column">
        <Pie data={data1} options={options1}/></div>
      {/* <div className="column"><Bar options={options3} data={data3} /></div> */}
    </div>
  )
}
