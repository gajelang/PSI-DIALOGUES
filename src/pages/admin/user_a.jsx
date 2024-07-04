import React from 'react';
import UserStatistics from '../../components/Admin/useradmin/UserStatistics';
import UserList from '../../components/Admin/useradmin/UserList';
import UserInfo from '../../components/Admin/useradmin/userinfo';

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
                        <h1 className="text-4xl font-bold text-black">User Data</h1>
                    </header>
                    <main className="flex flex-col mt-10 mr-1">
                        <div className='flex flex-col gap-8'>
                            <UserInfo />
                            <UserStatistics />
                            <UserList />
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default Home;

