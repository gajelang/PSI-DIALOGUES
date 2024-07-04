import React, { useEffect, useState } from 'react';

const MentoringHistory = () => {
    const [history, setHistory] = useState([]);
    const idMentor = 1; // Ganti dengan ID Mentor yang sesuai

    useEffect(() => {
        const fetchHistory = async () => {
            try {
                const response = await fetch(`https://dialogue-api.vercel.app/api/sesi/pastmentorsesi?IdMentor=${idMentor}`);
                const text = await response.text(); // Ambil respon sebagai teks
                console.log('API Response Text:', text); // Log respon API sebagai teks

                // Coba parsing teks sebagai JSON
                try {
                    const data = JSON.parse(text);
                    setHistory(data);
                    console.log('Fetched History:', data);
                } catch (jsonError) {
                    console.error('Error parsing JSON:', jsonError);
                }
            } catch (error) {
                console.error('Error fetching history:', error);
            }
        };

        fetchHistory();
    }, [idMentor]);

    return (
        <div className="mt-8">
            <div className="bg-[#1a1364] rounded-[10px] p-[15px]">
                <div className="flex justify-between">
                    <div className="flex gap-4 items-center ml-3 text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                        </svg>
                        <p className="text-[25px] text-white font-bold">Mentoring History</p>
                    </div>
                </div>
            </div>
            <section className="mt-6">
                {history.length > 0 ? (
                    <div className="grid grid-cols-1 gap-6">
                        {history.map((item, index) => (
                            <MentoringCard key={index} mentoring={item} />
                        ))}
                    </div>
                ) : (
                    <p className="text-sm text-gray-700 mt-4">No history available</p>
                )}
            </section>
        </div>
    );
};

const MentoringCard = ({ mentoring }) => {
    return (
        <div className="bg-white rounded-lg outline outline-gray-200 p-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="flex flex-col justify-between mb-4">
                    <div className='mb-3'>
                        <p className="font-medium text-gray-700">Theme</p>
                        <p className="mt-1 text-3xl font-semibold text-gray-900">{mentoring.theme}</p>
                    </div>
                </div>
                <div className="flex flex-row items-center gap-6 md:gap-8">
                    <div>
                        <p className="font-medium text-gray-700">Learner</p>
                        <p className="mt-1 text-lg font-semibold text-gray-900">{mentoring.learnername}</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="font-medium text-gray-700">Date</p>
                        <p className="mt-1 text-lg text-gray-900">{new Date(mentoring.datetime).toLocaleDateString()}</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="font-medium text-gray-700">Mentoring Time</p>
                        <p className="mt-1 text-lg text-gray-900">{`${mentoring.duration.hours}h ${mentoring.duration.minutes}m`}</p>
                    </div>
                    <div className='flex p-5 gap-7'>
                        <div className="flex flex-col items-center">
                            <p className="font-medium text-gray-700">Words Learned</p>
                            <p className="mt-1 text-4xl text-gray-900">{mentoring.wordslearned}</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <p className="font-medium text-gray-700">Listening</p>
                            <p className="mt-1 text-4xl text-gray-900">{mentoring.listeningscore}</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <p className="font-medium text-gray-700">Grammar</p>
                            <p className="mt-1 text-4xl text-gray-900">{mentoring.grammarscore}</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <p className="font-medium text-gray-700">Pronunciation</p>
                            <p className="mt-1 text-4xl text-gray-900">{mentoring.pronounciationscore}</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default MentoringHistory;
