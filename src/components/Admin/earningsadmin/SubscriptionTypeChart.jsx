// src/components/Admin/earningsadmin/SubscriptionTypeChart.jsx
import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const SubscriptionTypeChart = () => {
    const [subscriptionCounts, setSubscriptionCounts] = useState({
        Bronze: 0,
        Silver: 0,
        Gold: 0,
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://dialogue-api.vercel.app/api/income/income');
                if (response.ok) {
                    const data = await response.json();
                    const counts = { Bronze: 0, Silver: 0, Gold: 0 };
                    data.purchasedata.forEach(purchase => {
                        counts[purchase.subs_type]++;
                    });
                    setSubscriptionCounts(counts);
                    console.log('Subscription Counts:', counts); // Log subscription counts
                } else {
                    const counts = { Bronze: 0, Silver: 0, Gold: 0 };
                    console.error('Failed to fetch data:', response.statusText);
                    // Optionally set a default or fallback state if fetching fails
                    // Use dummy data or handle error case
                    setSubscriptionCounts(counts);
                    console.log('Subscription Counts:', counts); // Log subscription counts
                }
            } catch (error) {
                const counts = { Bronze: 0, Silver: 0, Gold: 0 };
                console.error('Error fetching data:', error);
                // Optionally set a default or fallback state if fetching fails
                // Use dummy data or handle error case
                setSubscriptionCounts(counts);
                console.log('Subscription Counts:', counts); // Log subscription counts
            }
        };

        fetchData();
    }, []);

    const data = {
        labels: ['Bronze', 'Silver', 'Gold'],
        datasets: [
            {
                label: 'Subscription Type',
                data: [subscriptionCounts.Bronze, subscriptionCounts.Silver, subscriptionCounts.Gold],
                backgroundColor: ['rgba(144, 89, 33, 1)', 'rgba(192, 192, 192, 1)', 'rgba(255, 215, 0, 1)'],
            },
        ],
    };

    return (
        <div className='border border-gray-400 rounded-md p-4 flex flex-col h-fit'>
            <h1 className='font-bold text-white border border-red-500 rounded-md text-center p-3 bg-[#FB3D03] mb-10'>Subscription Type</h1>
            <Pie data={data} />
        </div>
    );
};

export default SubscriptionTypeChart;
