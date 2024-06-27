import React from 'react';
import ProfileButton from '../components/ProfileButton';
import ScheduleMentoring from '../components/Mentoring/ScheduleMentoring';
import UserTracker from '../components/Tracker/UserTracker';


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
                        <ScheduleMentoring />
                        <UserTracker />
                    </main>
                </div>
            </div>
        </div>
    );
};

export default Home;
