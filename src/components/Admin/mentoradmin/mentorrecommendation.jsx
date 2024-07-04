import React, { useEffect, useState } from 'react';

const MentorRecommendation = () => {
    const [recommendations, setRecommendations] = useState('');
    const [learnerName, setLearnerName] = useState('');

    useEffect(() => {
        const fetchRecommendations = async () => {
            try {
                const response = await fetch('https://dialogue-api.vercel.app/api/mentor/mentorec?userID=1');
                if (!response.ok) {
                    throw new Error('Failed to fetch recommendations');
                }
                const data = await response.text();
                console.log('Recommendations:', data); // Logging the fetched data
                setRecommendations(data); // Assuming recommendations is a string or HTML content
            } catch (error) {
                console.error('Error fetching recommendations:', error);
            }
        };

        const fetchLearnerName = async () => {
            try {
                const response = await fetch('https://dialogue-api.vercel.app/api/user/userec?userID=1');
                if (!response.ok) {
                    throw new Error('Failed to fetch learner data');
                }
                const data = await response.json();
                console.log('Learner Data:', data); // Logging the fetched learner data
                setLearnerName(data.nama); // Assuming 'nama' is the field for learner's name
            } catch (error) {
                console.error('Error fetching learner data:', error);
            }
        };

        fetchRecommendations();
        fetchLearnerName();
    }, []);

    return (
        <div className="flex justify-center mt-10 gap-8 rounded-lg">
            <img className='w-1/4' src='../../img/AIBOT.png' alt='AI Bot'></img>
            <div>
                <div className='w-full bg-[#474af1] rounded-md flex flex-row items-center px-6 py-3 gap-4'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 14 14"><path fill="white" fillRule="evenodd" d="M9.739.85c.183-.835 1.374-.84 1.564-.005l.01.04l.017.077c.22.934.975 1.648 1.922 1.812c.872.152.872 1.404 0 1.556a2.396 2.396 0 0 0-1.925 1.827l-.024.103c-.19.834-1.38.83-1.564-.007l-.02-.088a2.38 2.38 0 0 0-1.917-1.836c-.87-.152-.87-1.402 0-1.553A2.38 2.38 0 0 0 9.718.948l.014-.064zM8.658 6.398A1.294 1.294 0 0 0 7.625 5.4v7.215a2.998 2.998 0 0 0 5.204-.85a3.016 3.016 0 0 1-.778-.183c-.595-.224-1.242-.665-1.773-1.436a.625.625 0 0 1 1.03-.709c.382.555.82.839 1.183.975c.184.07.348.1.476.11l.023.002C13.61 9.85 14 8.546 14 7.457c0-.734-.177-1.458-.483-2.072l-.079.015c-.52.09-.934.484-1.051.998l-.024.102c-.448 1.967-3.255 1.955-3.686-.016zM6.375 4.615a1.963 1.963 0 0 1 0-2.127v-.52a2.618 2.618 0 0 0-4.612 1.698v.002c.039.39.198.68.382.89c.229.261.47.368.527.38a.625.625 0 1 1-.277 1.22c-.36-.083-.82-.355-1.19-.775a2.813 2.813 0 0 1-.383-.562C.312 5.526 0 6.483 0 7.457c0 .735.178 1.568.483 2.238c.08-.09.167-.172.26-.244a.625.625 0 1 1 .774.98c-.178.141-.364.444-.478.795a2.997 2.997 0 0 0 5.336 1.389v-3.67a2.69 2.69 0 0 1-1.405.585a.625.625 0 1 1-.139-1.243c.509-.056.879-.349 1.143-.734c.268-.39.384-.818.401-1.023z" clipRule="evenodd"></path></svg>
                    <h1 className='text-2xl font-bold text-white'>Mentoring Recommendation by AI</h1>
                </div>
                <div className="w-full rounded overflow-hidden shadow-md">
                    <div className="px-6 py-4">
                        <p className="text-gray-700 text-base">{learnerName ? `${learnerName}'s Recommendations:` : 'Recommendations:'}</p>
                        <p className="text-gray-700 text-base">{recommendations}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MentorRecommendation;
