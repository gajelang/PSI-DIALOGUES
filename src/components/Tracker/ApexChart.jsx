import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import { Chart, LinearScale, CategoryScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register the necessary components for Chart.js
Chart.register(LinearScale, CategoryScale, PointElement, LineElement, Title, Tooltip, Legend);

const ApexChart = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const idLearner = 1; // Replace with your ID Learner
    const fetchHistory = async () => {
      try {
        const response = await fetch(`https://dialogue-api.vercel.app/api/sesi/pastusersesi?IdLearner=${idLearner}`);
        const data = await response.json();

        console.log('Fetched History:', data);
        setHistory(data);
      } catch (error) {
        console.error('Error fetching mentoring data:', error);
      }
    };

    fetchHistory();
  }, []);

  // Extracting data for chart
  const dates = history.map(entry => new Date(entry.datetime).toLocaleDateString());
  const listeningScores = history.map(entry => entry.listeningscore);
  const grammarScores = history.map(entry => entry.grammarscore);
  const pronunciationScores = history.map(entry => entry.pronounciationscore);

  // Chart data
  const chartData = {
    labels: dates,
    datasets: [
      {
        label: 'Listening Score',
        data: listeningScores,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        yAxisID: 'y',
      },
      {
        label: 'Grammar Score',
        data: grammarScores,
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        yAxisID: 'y1',
      },
      {
        label: 'Pronunciation Score',
        data: pronunciationScores,
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        yAxisID: 'y2',
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    stacked: false,
    plugins: {
      title: {
        display: true,
        text: 'Mentoring Scores by Date',
      },
    },
    scales: {
      y: {
        type: 'linear',
        display: true,
        position: 'left',
      },
      y1: {
        type: 'linear',
        display: true,
        position: 'right',
        grid: {
          drawOnChartArea: false,
        },
      },
      y2: {
        type: 'linear',
        display: true,
        position: 'right',
        grid: {
          drawOnChartArea: false,
        },
      },
    },
  };

  return (
    <div className="bg-white w-full">
      <div className='w-full bg-[#c5194c] rounded-md flex flex-row items-center px-8 py-4 gap-4'>
        <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 16 16"><path fill="white" fillRule="evenodd" d="M4 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm.75 7a.75.75 0 0 0-.75.75v1.5a.75.75 0 0 0 1.5 0v-1.5A.75.75 0 0 0 4.75 9m2.5-1.75a.75.75 0 0 1 1.5 0v4a.75.75 0 0 1-1.5 0zm4-3.25a.75.75 0 0 0-.75.75v6.5a.75.75 0 0 0 1.5 0v-6.5a.75.75 0 0 0-.75-.75" clipRule="evenodd"></path></svg>
        <h2 className="text-3xl font-semibold text-white">Mentoring Performance Chart</h2>
      </div>

      <div className='p-5'>
        {history.length > 0 ? (
          <Line data={chartData} options={options} />
        ) : (
          <p className="text-gray-600">Loading chart...</p>
        )}
      </div>
    </div>
  );
};

export default ApexChart;
