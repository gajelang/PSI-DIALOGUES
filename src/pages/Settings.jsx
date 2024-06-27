import React from 'react';
import userData from '../data/UserData';

const Settings = () => {
    const { fullName, username, email, education, dateOfBirth, phoneNumber } = userData;

    const handleLogout = () => {
        localStorage.removeItem('mode');
        window.location.reload();
    };

    return (
        <div className="ml-36 p-4 text-black">
            <h1 className="text-4xl font-bold text-black">Profile Settings</h1>
            <div className="mr-10 w-full">
                <div className="rounded-lg mt-10">
                    <div className="flex items-center mb-6">
                        <div className="w-24 h-24 rounded-full bg-gray-200 mr-4"></div>
                        <div>
                            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg mr-2 hover:bg-blue-700">Upload</button>
                            <button className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700">Remove</button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div>
                            <h5>Full Name</h5>
                            <input
                                type="text"
                                placeholder="Full Name"
                                value={fullName}
                                className="border border-gray-300 p-2 rounded-lg w-full  bg-transparent"
                            />
                        </div>
                        <div>
                            <h5>Username</h5>
                            <input
                                type="text"
                                placeholder="Username"
                                value={username}
                                className="border border-gray-300 p-2 rounded-lg w-full bg-transparent"
                            />
                        </div>

                        <div>
                            <h5>Email Address</h5>
                            <input
                                type="text"
                                placeholder="Email Address"
                                value={email}
                                className="border border-gray-300 p-2 rounded-lg w-full  bg-transparent"
                            />
                        </div>

                        <div>
                            <h5>Education Level</h5>
                            <input
                                type="text"
                                placeholder="Education Level"
                                value={education}
                                className="border border-gray-300 p-2 rounded-lg w-full  bg-transparent"
                            />
                        </div>
                        <div>
                            <h5>Date of Birth</h5>
                            <input
                                type="date"
                                placeholder="Date of Birth"
                                value={dateOfBirth}
                                className="border border-gray-300 p-2 rounded-lg w-full bg-transparent"
                            />
                        </div>
                        <div>
                            <h5>Phone Number</h5>
                            <input
                                type="tel"
                                placeholder="Phone Number"
                                value={phoneNumber}
                                className="border border-gray-300 p-2 rounded-lg w-full bg-transparent"
                            />
                        </div>
                    </div>

                    <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                        Save Changes
                    </button>
                </div>

                <hr className="mt-10" />

                <div className="mt-10">
                    <h2 className="text-xl font-semibold mb-4">Account Settings</h2>
                    <div className="flex flex-row justify-between">
                        <h2>Switch Account?</h2>
                        <button
                            onClick={handleLogout}
                            className="bg-red-600 text-white px-6 py-2 rounded-lg mt-4 hover:bg-red-700"
                        >
                            LOG OUT
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Settings;
