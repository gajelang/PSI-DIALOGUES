// src/components/MoreLink.jsx

import React from 'react';

const MoreLink = () => {
    return (
        <a href="">
            <div className="flex text-white items-center gap-3">
                More
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="white"
                    className="w-6 h-6"
                >
                    <path d="m8.25 4.5 7.5 7.5-7.5 7.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
        </a>
    );
};

export default MoreLink;
