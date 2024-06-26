// src/components/MentoringCard.jsx

import React from 'react';

const MentoringCard = ({ theme, date, mentor, meetingLink }) => {
    return (
        <div className="p-8 bg-[#ffff] w-full flex flex-row rounded-xl items-center mb-3">
            {/* Theme */}
            <div className="w-3/5">
                <h1>Theme :</h1>
                <h1 className="text-3xl"><strong>{theme}</strong></h1>
            </div>

            {/* Detailed Schedule */}
            <div>
                <h1>Date : <strong>{date}</strong></h1>
                <h1>Mentor : <strong>{mentor}</strong></h1>
                <hr className="mt-2 mb-2" />
                <h1>Meeting Link : <strong>{meetingLink}</strong></h1>
            </div>
        </div>
    );
};

export default MentoringCard;
