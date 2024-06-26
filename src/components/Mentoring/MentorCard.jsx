// src/components/MentorCard.jsx

import React from 'react';

const MentorCard = ({ imageUrl, mentorName }) => {
    return (
        <div className="flex justify-between items-center border-b-[1px] border-[#D9D9D9] pb-[16px] mb-[16px]">
            <div className="flex gap-[20px]">
                <img src={imageUrl} alt="Mentor Avatar" />
                <p className="text-[20px] text-[#1b1b1b] font-bold">{mentorName}</p>
            </div>
            <button className="cursor-pointer">
                <img src="./assets/arrow right.svg" alt="View Details" />
            </button>
        </div>
    );
};

export default MentorCard;