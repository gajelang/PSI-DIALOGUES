import React from 'react';
import UserInfo from '../../components/Admin/userinfo';
import MentorInfo from '../../components/Admin/mentorinfo';
import { allEarningsData } from '../../data/allearnings';
import EarningsInfo from '../../components/Admin/earningsinfo';

const Home = () => {
    const handleLogout = () => {
        console.log('Logout clicked');
    };

    const handleProfile = () => {
        console.log('Profile clicked');
    };

    return (
        <div className="flex flex-col h-screen overflow-auto text-black">
            <div className="flex flex-row flex-1">
                <div className="flex flex-col flex-1 ml-36">
                    <header className="flex justify-between items-center mt-4 w-full">
                        <h1 className="text-4xl font-bold text-black">Earnings</h1>
                    </header>
                    <main className="flex flex-col mt-10 mr-1">
                        <div className='flex justify-between gap-8'>
                            <EarningsInfo />
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default Home;
