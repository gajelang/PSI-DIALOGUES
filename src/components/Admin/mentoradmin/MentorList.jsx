import React, { useEffect, useState } from 'react';

const MentorList = () => {
    const [mentors, setMentors] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://dialogue-api.vercel.app/api/mentor/mentordata');
                if (response.ok) {
                    const data = await response.json();
                    console.log('Fetched mentors:', data); // Log fetched data to inspect its structure
                    const mentorsArray = Object.values(data); // Convert object values to array
                    setMentors(mentorsArray);
                } else {
                    console.error('Failed to fetch data');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
                // Handle fallback or error state here if needed
            }
        };

        fetchData();
    }, []);

    return (
        <div className='mt-8'>
            <h1 className="text-2xl font-bold my-4">Mentor List</h1>
            <table className="table-auto w-full border-collapse border border-gray-400">
                <thead>
                    <tr>
                        <th className="border border-gray-300 px-4 py-2">ID</th>
                        <th className="border border-gray-300 px-4 py-2">Nama Mentor</th>
                        <th className="border border-gray-300 px-4 py-2">Email Mentor</th>
                    </tr>
                </thead>
                <tbody>
                    {mentors.map((mentor, index) => (
                        <tr key={index}>
                            <td className="border border-gray-200 px-4 py-2 flex justify-center">{index + 1}</td>
                            <td className="border border-gray-300 px-4 py-2">{mentor.namaMentor}</td>
                            <td className="border border-gray-300 px-4 py-2">{mentor.emailMentor}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MentorList;
