import React from 'react';
import EarningsInfo from '../../components/Admin/earningsadmin/earningsinfo';
import MonthlyIncomeChart from '../../components/Admin/earningsadmin/MonthlyIncomeChart';
import SubscriptionTypeChart from '../../components/Admin/earningsadmin/SubscriptionTypeChart';
import TabelEarning from '../../components/Admin/earningsadmin/TabelEarning';

const EarningsA = () => {
    const handleLogout = () => {
        console.log('Logout clicked');
    };

    const handleProfile = () => {
        console.log('Profile clicked');
    };

    return (
        <div className="flex flex-col h-screen overflow-y-auto text-black">
            <div className="flex flex-row flex-1">
                <div className="flex flex-col flex-1 ml-36">
                    <header className="flex justify-between items-center mt-4 w-full">
                        <h1 className="text-4xl font-bold text-black">Earnings</h1>
                    </header>

                    <main className="flex flex-col mt-10 mr-1">
                        <div className='mb-5'><EarningsInfo /></div>
                        <div className='flex justify-between gap-8'>
                            <MonthlyIncomeChart />
                            <div className='flex flex-col gap-4'>
                                <div className='text-center'>
                                    <SubscriptionTypeChart />
                                </div>
                            </div>
                        </div>
                        <TabelEarning />
                    </main>
                </div>
            </div>
        </div>
    );
};

export default EarningsA;
