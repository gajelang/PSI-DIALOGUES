// src/components/mentorinfo.jsx
import React, { useState, useEffect } from 'react';
import { allMentorsData } from '../../data/allmentordata';

const MentorInfo = () => {
    const [totalMentors, setTotalMentors] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('YOUR_API_ENDPOINT_HERE');
                if (response.ok) {
                    const data = await response.json();
                    const activeMentors = data.filter(mentor => mentor.status === 'active').length;
                    setTotalMentors(activeMentors);
                } else {
                    // Jika API tidak tersedia, gunakan data dummy
                    const activeMentors = allMentorsData.filter(mentor => mentor.status === 'active').length;
                    setTotalMentors(activeMentors);
                }
            } catch (error) {
                // Jika terjadi error, gunakan data dummy
                const activeMentors = allMentorsData.filter(mentor => mentor.status === 'active').length;
                setTotalMentors(activeMentors);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='flex flex-row items-center outline outline-gray-300 w-full justify-between p-6 rounded-xl'>
            <div>
                <div className="flex flex-col">
                    <h1 className='text-2xl font-bold'>Total Mentor</h1>
                    <p className='text-gray-400'>Total All Active Mentor</p>
                </div>
                <h1 className='mt-3 font-extrabold text-5xl'>{totalMentors}</h1>
            </div>
            <div className='flex bg-[#FDB23D] p-5 rounded-full'>
                <svg className='mb-2 mx-1' xmlns="http://www.w3.org/2000/svg" width="2.7em" height="2.7em" viewBox="0 0 24 24">
                    <path fill="none" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.3} d="m12 22l-2-6H2l2 6zm0 0h4m-4-9v-.5c0-1.886 0-2.828-.586-3.414S9.886 8.5 8 8.5s-2.828 0-3.414.586S4 10.614 4 12.5v.5m15 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-9-9a2 2 0 1 1-4 0a2 2 0 0 1 4 0m4 13.5h6a2 2 0 0 1 2 2v.5a2 2 0 0 1-2 2h-1" color="currentColor"></path>
                </svg>
            </div>
        </div>
    );
};

export default MentorInfo;
