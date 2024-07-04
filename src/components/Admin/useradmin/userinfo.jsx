// src/components/userinfo.jsx
import React, { useState, useEffect } from 'react';
import { purchasedata } from '../../../data/purchasedata';

const UserInfo = () => {
    const [totalUsers, setTotalUsers] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://dialogue-api.vercel.app/api/user/userdata');
                if (response.ok) {
                    const data = await response.json();
                    console.log('API fetch successful:', data);
                    const activeUsers = data.filter(user => user.aktif).length;
                    setTotalUsers(activeUsers);
                } else {
                    console.log('API fetch failed with status:', response.status);
                    // Jika API tidak tersedia, gunakan data langganan
                    const activeUsers = purchasedata.filter(purchase => new Date(purchase.end_date) >= new Date()).length;
                    setTotalUsers(activeUsers);
                }
            } catch (error) {
                console.log('API fetch error:', error);
                // Jika terjadi error, gunakan data langganan
                const activeUsers = purchasedata.filter(purchase => new Date(purchase.end_date) >= new Date()).length;
                setTotalUsers(activeUsers);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='flex flex-row items-center outline outline-gray-300 w-full justify-between p-6 rounded-xl'>
            <div>
                <div className="flex flex-col">
                    <h1 className='text-2xl font-bold'>Total User</h1>
                    <p className='text-gray-400'>Total All Active User</p>
                </div>
                <h1 className='mt-3 font-extrabold text-5xl'>{totalUsers}</h1>
            </div>
            <div className='flex bg-[#0D0FB0] p-5 rounded-full'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="white" className="size-12">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                </svg>
            </div>
        </div>
    );
};

export default UserInfo;
