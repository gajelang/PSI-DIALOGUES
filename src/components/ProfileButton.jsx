// src/components/ProfileButton.jsx

import React, { useState } from 'react';

const ProfileButton = ({ username, profilePicture, onLogout, onProfile }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleLogout = () => {
        setIsOpen(false);
        onLogout();
    };

    const handleProfile = () => {
        setIsOpen(false);
        onProfile();
    };

    return (
        <div className="relative inline-block text-left">
            <div>
                <button
                    onClick={toggleDropdown}
                    className="inline-flex items-center justify-center w-full px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    <img
                        src={profilePicture}
                        alt={`${username}'s profile`}
                        className="w-10 h-10 rounded-full mr-3"
                    />
                    <span className="font-bold">{username}</span>
                </button>
            </div>

            {isOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1">
                        <button
                            onClick={handleProfile}
                            className="block px-4 py-2 text-sm text-gray-700 w-full text-left hover:bg-gray-100"
                        >
                            Profile
                        </button>
                        <button
                            onClick={handleLogout}
                            className="block px-4 py-2 text-sm text-gray-700 w-full text-left hover:bg-gray-100"
                        >
                            Logout
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProfileButton;
