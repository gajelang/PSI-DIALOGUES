import React from 'react';
import UserInfo from '../../components/Admin/useradmin/userinfo';
import MentorInfo from '../../components/Admin/mentoradmin/mentorinfo';
import { allEarningsData } from '../../data/allearnings';
import EarningsInfo from '../../components/Admin/earningsadmin/earningsinfo';
import UserStatistics from '../../components/Admin/useradmin/UserStatistics';
import MonthlyIncomeChart from '../../components/Admin/earningsadmin/MonthlyIncomeChart';
import SubscriptionTypeChart from '../../components/Admin/earningsadmin/SubscriptionTypeChart';

const Home = () => {
    const handleLogout = () => {
        console.log('Logout clicked');
    };

    const handleProfile = () => {
        console.log('Profile clicked');
    };

    return (
        <div className="flex flex-col h-screen w-full overflow-auto text-black">
            <div className="flex flex-row flex-1">
                <div className="flex flex-col flex-1 ml-36">
                    <header className="flex justify-between items-center mt-4 w-full">
                        <h1 className="text-4xl font-bold text-black">Dashboard</h1>
                    </header>
                    <main className="flex flex-col mt-10 mr-1 bg-gray-100 ">
                        <div className='flex justify-between gap-8 mb-8'>
                            <UserInfo />
                            <MentorInfo />
                            <EarningsInfo />
                        </div>
                        <div className='mb-8'>
                            <UserStatistics />
                        </div>
                        <div className='flex justify-between gap-8'>
                            <MonthlyIncomeChart />
                            <SubscriptionTypeChart />
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default Home;
