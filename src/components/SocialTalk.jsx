// src/components/SocialTalk.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SocialTalk = () => {
    const [userOnline, setUserOnline] = useState(0);
    const [groupTalks, setGroupTalks] = useState(0);

    useEffect(() => {
        // Fetch data for User Online
        axios.get('http://localhost:5000/api/user-online')
            .then(response => {
                setUserOnline(response.data.count);
            })
            .catch(error => {
                console.error('Error fetching user online count:', error);
            });

        // Fetch data for Group Talks
        axios.get('http://localhost:5000/api/group-talks')
            .then(response => {
                setGroupTalks(response.data.count);
            })
            .catch(error => {
                console.error('Error fetching group talks count:', error);
            });
    }, []);

    return (
        <div className="rounded-xl mt-10 w-2/5 p-4 bg-white shadow-md">
            {/* Header */}
            <div className="flex justify-between flex-row items-center bg-[#F7D848] p-5 rounded-xl">
                <h1 className="text-3xl text-black font-bold ml-5">Social Talk!</h1>
                {/* MoreLink untuk menuju halaman lain */}
                <a href="/social.html" className="flex items-center gap-3">
                    More
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="black"
                        className="w-6 h-6"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </a>
            </div>

            {/* Main Content */}
            <div className="flex flex-row mt-5 justify-between">
                {/* User Stats */}
                <div className="flex flex-col justify-around w-full">
                    <div className="flex flex-col items-center">
                        {/* User Online */}
                        <h1>User Online :</h1>
                        <h1 className="text-7xl font-bold">{userOnline}</h1>
                    </div>
                    <div className="flex flex-col items-center">
                        {/* Group Talks */}
                        <h1>Group Talk :</h1>
                        <h1 className="text-7xl font-bold">{groupTalks}</h1>
                    </div>
                </div>

                {/* Image */}
                <div className="p-5 w-fit">
                    <img src="../img/socialtakvisual.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default SocialTalk;
