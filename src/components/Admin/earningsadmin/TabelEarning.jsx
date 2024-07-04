import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';

const TabelEarning = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://dialogue-api.vercel.app/api/income/income');
                if (response.ok) {
                    const data = await response.json();
                    setUsers(data.purchasedata); // Assuming API response structure matches purchasedata array
                } else {
                    throw new Error('Failed to fetch data');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
                // Optionally set a default or fallback data state if fetching fails
                setUsers([]);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1 className="text-2xl font-bold my-4">Subscribed Users</h1>
            <table className="table-auto w-full border-collapse border border-gray-400">
                <thead>
                    <tr>
                        <th className="border border-gray-300 px-4 py-2">ID</th>
                        <th className="border border-gray-300 px-4 py-2">Username</th>
                        <th className="border border-gray-300 px-4 py-2">Subscription Type</th>
                        <th className="border border-gray-300 px-4 py-2">Start Date</th>
                        <th className="border border-gray-300 px-4 py-2">End Date</th>
                        <th className="border border-gray-300 px-4 py-2">Price</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id_purchase}>
                            <td className="border border-gray-300 px-4 py-2">{user.id_purchase}</td>
                            <td className="border border-gray-300 px-4 py-2">{user.username}</td>
                            <td className="border border-gray-300 px-4 py-2">{user.subs_type}</td>
                            <td className="border border-gray-300 px-4 py-2">{format(new Date(user.start_date), 'd MMMM yyyy')}</td>
                            <td className="border border-gray-300 px-4 py-2">{format(new Date(user.end_date), 'd MMMM yyyy')}</td>
                            <td className="border border-gray-300 px-4 py-2">{user.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TabelEarning;
