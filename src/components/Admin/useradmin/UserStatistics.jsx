import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { format } from 'date-fns';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const UserStatistics = () => {
    const [userCounts, setUserCounts] = useState([]);
    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

    useEffect(() => {
        fetchData();
    }, [selectedYear]);

    const fetchData = async () => {
        try {
            const response = await fetch('https://dialogue-api.vercel.app/api/income/income');
            if (response.ok) {
                const data = await response.json();
                console.log('Data fetched successfully:', data);
                processArrayData(data.purchasedata); // Access purchasedata array
            } else {
                console.error('Failed to fetch data:', response.statusText);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const processArrayData = (data) => {
        if (Array.isArray(data)) {
            const counts = Array(12).fill(0);
            data.forEach(purchase => {
                const startDate = new Date(purchase.start_date);
                if (startDate.getFullYear() === selectedYear) {
                    counts[startDate.getMonth()]++;
                }
            });
            setUserCounts(counts);
        } else {
            console.error('Data is not an array:', data);
            // Handle the case where data is not an array, if needed
        }
    };

    const handleYearChange = (event) => {
        setSelectedYear(parseInt(event.target.value));
    };

    const years = [2023, 2024, 2025]; // Customize the list of years as per your need

    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: `Subscribed Users Started Each Month in ${selectedYear}`,
                data: userCounts,
                borderColor: '#000',
                backgroundColor: '#000',
                borderWidth: 2,
                pointBackgroundColor: '#000',
                pointBorderColor: '#000',
                tension: 0.4,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: { display: false },
            title: {
                display: true,
                text: `Subscribed Users Started Each Month in ${selectedYear}`,
                font: {
                    size: 18,
                    weight: 'bold'
                },
                padding: {
                    top: 10,
                    bottom: 30
                }
            },
        },
        scales: {
            x: {
                grid: {
                    display: false,
                },
                ticks: {
                    color: '#000',
                },
            },
            y: {
                grid: {
                    borderDash: [8, 4],
                },
                ticks: {
                    color: '#000',
                },
                min: 0,
                max: Math.max(...userCounts) + 5,
            },
        },
    };

    return (
        <div className="border border-gray-400 rounded-md p-4 w-full">
            <div className="flex justify-center mb-4">
                <select value={selectedYear} onChange={handleYearChange} className="px-2 py-1 border text-white border-gray-300 rounded-md">
                    {years.map(year => (
                        <option key={year} value={year}>{year}</option>
                    ))}
                </select>
            </div>
            <Line data={data} options={options} />
        </div>
    );
};

export default UserStatistics;
