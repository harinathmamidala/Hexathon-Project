


import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);



export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'TILL NOW POWER USAGE',
    },
    scales: {
      // xAxes: [{ticks: {min: 40, max:160}}],
      yAxes: [{ticks: {min: 10, max:600}}],
    }
  },
};

const xValues = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const yValues=[40,35,48,50,70]

export const data = {
  labels:xValues,
  datasets: [
    {
      label: 'Dataset 1',
      data: yValues,
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    // {
    //   label: 'Dataset 2',
    //   data: [500,23,59,94,19,203,22],
    //   borderColor: 'rgb(53, 162, 235)',
    //   backgroundColor: 'rgba(53, 162, 235, 0.5)',
    // },
  ],
};

