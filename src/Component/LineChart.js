import React from 'react';
import '../CSS/Quote.css';
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
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function ShowLineChartHistory(props){
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'the Open and the Close Price',
      },
    },
  };
  
  const labels = props.date
  const value_closePrice = props.closePrice
  const value_openPrice = props.openPrice
  
  const data = {
    labels,
    datasets: [
      {
        label: 'Close Price',
        data: value_closePrice,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
      {
        label:'Open Price',
        data: value_openPrice,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

 return <Line 
 options = {options} 
 data = {data} 
 id = {"LineChart"}
 />;
}