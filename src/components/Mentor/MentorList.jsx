import React, { useEffect, useState } from 'react';

const MentorList = () => {
    const [mentoringSessions, setMentoringSessions] = useState([]);
    const idMentor = 1; // Ganti dengan ID Mentor yang sesuai

    useEffect(() => {
        const fetchMentorSessions = async () => {
            try {
                const response = await fetch(`https://dialogue-api.vercel.app/api/sesi/futurementorsesi?IdMentor=${idMentor}`);

                if (!response.ok) {
                    throw new Error('Failed to fetch mentor sessions');
                }

                const data = await response.json();
                setMentoringSessions(data);
                console.log('Fetched Mentor Sessions:', data);
            } catch (error) {
                console.error('Error fetching mentor sessions:', error.message);
            }
        };

        fetchMentorSessions();
    }, [idMentor]);

    return (
        <div className="mt-8">
            <div className="bg-[#4B3DE3] rounded-[10px] p-[15px]">
                <div className="flex justify-between">
                    <div className="flex gap-4 items-center ml-3 text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                        </svg>
                        <p className="text-[25px] text-white font-bold">Mentoring Schedule</p>
                    </div>
                </div>
            </div>
            <section className="mt-6">
                {mentoringSessions.length > 0 ? (
                    <div className="grid grid-cols-1 gap-6 ">
                        {mentoringSessions.map((item, index) => (
                            <div key={index} className="bg-white shadow-sm rounded-lg p-8">
                                <div className="flex items-center gap-4 mb-2">
                                    <p className="text-sm text-gray-700">Learner: <span className="font-semibold">{item.namalearner}</span></p>
                                    <p className="text-sm text-gray-700">Date: <span className="font-semibold">{new Date(item.datetime).toLocaleString()}</span></p>
                                </div>
                                <div className="mb-2">
                                    <p className="text-sm text-gray-700">Theme:</p>
                                    <h2 className="text-3xl font-semibold">{item.theme}</h2>
                                </div>
                                <div className="flex items-center gap-4">
                                    <p className="text-sm text-gray-700">Via: <span className="font-semibold">Online</span></p>
                                    <p className="text-sm text-gray-700">Meeting Link: <a href={item.link} target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-500">{item.link}</a></p>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-sm text-gray-700 mt-4">No schedule available</p>
                )}
            </section>
        </div>
    );
};

export default MentorList;
