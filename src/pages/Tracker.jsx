// src/pages/Tracker.jsx
import React from 'react';
import ApexChart from '../components/Tracker/ApexChart'; // Import ApexChart
import { calculateAverageScores } from '../data/dummyMentoringHistory'; // Import calculateAverageScores function
import UserTracker from '../components/Tracker/UserTracker';
import Recommendation from '../components/Tracker/Recommendation';

const Tracker = () => {
    const averageData = calculateAverageScores();

    // Menghitung rata-rata dan menyesuaikan dengan rentang maksimal 10
    const series = [
        (averageData.pronunciationScore / 10 * 100).toFixed(1), // Mengubah ke persen dan membatasi desimal
        (averageData.listeningScore / 10 * 100).toFixed(1), // Mengubah ke persen dan membatasi desimal
        (averageData.grammarScore / 10 * 100).toFixed(1), // Mengubah ke persen dan membatasi desimal
    ];

    const labels = ['Pronunciation', 'Listening', 'Grammar'];

    return (
        <div className="ml-36 flex flex-col h-screen overflow-auto text-black p-4 mt-6">
            <h1 className="text-4xl font-bold text-black">Tracker</h1>
            <UserTracker />
            <div className='flex flex-row justify-around mt-10 rounded-lg outline outline-gray-200 bg-white'>
                <div className='w-full'>
                    <ApexChart />
                </div>
            </div>

            <div className='mt-7'>
                <Recommendation />
            </div>
        </div>
    );
};

export default Tracker;
