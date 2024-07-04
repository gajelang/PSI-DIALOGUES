import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const MonthlyIncomeChart = () => {
    const [monthlyIncomeData, setMonthlyIncomeData] = useState(Array(12).fill(0));

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('https://dialogue-api.vercel.app/api/income/income');
            if (response.ok) {
                const data = await response.json();
                console.log('Data fetched successfully:', data);
                processArrayData(data.purchasedata); // Access purchasedata array
            } else {
                console.error('Failed to fetch data:', response.statusText);
                // Fallback to local data if fetch fails
                processArrayData(purchasedata); // Replace 'purchasedata' with your local data if available
            }
        } catch (error) {
            console.error('Error fetching data:', error);
            // Fallback to local data on error
            processArrayData(purchasedata); // Replace 'purchasedata' with your local data if available
        }
    };

    const processArrayData = (data) => {
        const income = Array(12).fill(0);
        data.forEach(purchase => {
            const month = new Date(purchase.start_date).getMonth();
            income[month] += parseFloat(purchase.price); // Ensure price is parsed as float or number
        });
        setMonthlyIncomeData(income);
    };

    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
            {
                label: 'Monthly Income 2024 (in IDR)',
                data: monthlyIncomeData,
                backgroundColor: 'rgba(251, 61, 3, 1)',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: { 
                display: true, 
                position: 'top' 
            },
            title: { 
                display: true, 
                text: 'Monthly Income',
                font: {
                    size: 20,
                    weight: 'bold',
                }
            },
        },
    };

    return (
        <div className='border border-gray-400 rounded-md p-4 w-full h-full'>
            <Bar data={data} options={options} />
        </div>
    );
};

export default MonthlyIncomeChart;
