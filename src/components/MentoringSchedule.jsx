// src/components/MentoringSchedule.jsx

import React, { useState, useEffect } from 'react';
import MentoringCard from './MentoringCard';
import MoreLink from './MoreLink';
import axios from 'axios';

const MentoringSchedule = () => {
    const [mentoringData, setMentoringData] = useState([]);

    useEffect(() => {
        // Mengambil data dari API menggunakan Axios
        axios.get('http://localhost:5000/api/mentoring')
            .then(response => {
                setMentoringData(response.data);
            })
            .catch(error => {
                console.error('Error fetching mentoring schedule:', error);
            });
    }, []);

    return (
        <div className="rounded-xl gap-5 mt-15 bg-[#221c74]">
            {/* Header */}
            <div className="flex justify-between items-center bg-[#2a228c] p-5 rounded-xl">
                <h1 className="text-3xl ml-4 font-bold text-white">Mentoring Schedule</h1>
                <MoreLink />
            </div>

            {/* Main Content Schedule */}
            <div className="flex flex-row px-5 pb-5">
                <div className="mt-5 w-auto flex flex-col">
                    {/* Rendering Mentoring Cards */}
                    {mentoringData.map((item, index) => (
                        <MentoringCard key={index} theme={item.theme} date={item.date} mentor={item.mentor} meetingLink={item.meetingLink} />
                    ))}
                </div>
                <div className="w-1/2 pt-5 pl-5">
                    <img className="rounded-xl" src="img/banner2.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default MentoringSchedule;
