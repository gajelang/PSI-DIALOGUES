import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';

const EarningsInfo = () => {
    const [totalEarnings, setTotalEarnings] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://dialogue-api.vercel.app/api/income/income');
                if (response.ok) {
                    const data = await response.json();
                    const earningsThisMonth = data.purchasedata.reduce((acc, purchase) => acc + parseFloat(purchase.price), 0);
                    setTotalEarnings(earningsThisMonth);
                } else {
                    console.error('Failed to fetch data:', response.statusText);
                    // Fallback to local data if fetch fails
                    const earningsThisMonth = purchasedata.reduce((acc, purchase) => acc + parseFloat(purchase.price), 0);
                    setTotalEarnings(earningsThisMonth);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
                // Fallback to local data on error
                const earningsThisMonth = purchasedata.reduce((acc, purchase) => acc + parseFloat(purchase.price), 0);
                setTotalEarnings(earningsThisMonth);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='flex flex-row items-center outline outline-gray-300 w-full justify-between p-6 rounded-xl'>
            <div className="flex flex-col flex-1">
                <h1 className='text-2xl font-bold'>Total Earnings</h1>
                <p className='text-gray-400'>Total Earnings this Month</p>
                <h1 className='mt-3 font-extrabold text-3xl'>Rp{totalEarnings.toLocaleString('id-ID')}</h1>
            </div>
            <div className='flex items-center'>
                <div className='bg-[#FB3D03] p-5 rounded-full'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-12">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default EarningsInfo;
