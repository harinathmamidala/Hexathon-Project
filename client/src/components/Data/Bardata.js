import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' ,
    },
    title: {
      display: true,
      text: 'On Timings',
    },
  },
};

const labels = ['bulb1', 'bulb2', 'fan', 'heater'];

export const data = {
  labels,
  datasets: [
    {
      label: 'hours',
      data: [5,12,7,8,3,12],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    }
  ],
};

