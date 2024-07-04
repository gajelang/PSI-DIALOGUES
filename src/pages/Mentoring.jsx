import React, { useState } from 'react';
import ApplyMentoringCard from '../components/Mentoring/ApplyMentoringCard';
import ScheduleMentoring from '../components/Mentoring/ScheduleMentoring';
import MentoringHistory from '../components/Mentoring/HistoryMentoring';
import CalendarUser from '../components/Mentoring/CalendarUser';

const Mentoring = () => {
    const [showApplyCard, setShowApplyCard] = useState(false);

    const handleShowApplyCard = () => {
        setShowApplyCard(true);
    };

    const handleCloseApplyCard = () => {
        setShowApplyCard(false);
    };

    return (
        <div className="ml-36 flex flex-col h-screen overflow-auto text-black px-4 mt-10">
            <div className="flex justify-between items-center">
                <h1 className="text-4xl font-bold text-black">Mentoring</h1>
                <button
                    onClick={handleShowApplyCard}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Apply for Mentoring
                </button>
            </div>

            {showApplyCard && <ApplyMentoringCard onClose={handleCloseApplyCard} />}

            <div className="grid grid-cols-2 gap-4">
                <div className="col-span-1">
                    <ScheduleMentoring />
                </div>
                <div className="col-span-1">
                    <CalendarUser />
                </div>
            </div>

            <MentoringHistory />
        </div>
    );
};

export default Mentoring;
