import React from 'react';
import ProfileButton from '../components/ProfileButton';
import ScheduleMentoring from '../components/Mentoring/ScheduleMentoring';
import UserTracker from '../components/Tracker/UserTracker';
import CalendarUser from '../components/Mentoring/CalendarUser';


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
                <div className="flex flex-col flex-1 ml-36 mt-6">
                    <header className="flex justify-between items-center p-4 w-full">
                        <h1 className="text-4xl font-bold text-black">Dashboard</h1>
                        <ProfileButton
                            username="John Doe"
                            profilePicture="https://via.placeholder.com/40"
                            onLogout={handleLogout}
                            onProfile={handleProfile}
                        />
                    </header>
                    <main className="flex-1 p-4 overflow-auto">
                        <img className='flex mb-5 rounded-xl' src='../img/BANNER-1.png'></img>
                        <div className="grid grid-cols-2 gap-4 mt-8">
                            <div className="col-span-1">
                                <ScheduleMentoring />
                            </div>
                            <div className="col-span-1">
                                <CalendarUser />
                            </div>
                        </div>
                        <UserTracker />
                    </main>
                </div>
            </div>
        </div>
    );
};

export default Home;
