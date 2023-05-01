import { Bar,Doughnut} from 'react-chartjs-2';
// import {data as data3,options as options3} from '../Data/Data3'
import {data as data1 , options as options1} from '../Data/Donut'
import {data as data2,options as options2} from '../Data/Bardata'

export default function DevicesGraph() {
  return (
    <div className='devices-graphs'>
      <div className='devices-piechart'><div ><Doughnut data={data1} options={options1}/></div></div>
      <div className='devices-bargraph'><div ><Bar options={options2} data={data2} /></div></div>
    </div>
  )
}
