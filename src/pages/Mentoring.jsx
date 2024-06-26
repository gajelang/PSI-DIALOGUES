import React from 'react';
import MainContent from '../components/Mentoring/MainContent';
import ScheduleMentoring from '../components/Mentoring/ScheduleMentoring';

const Mentoring = () => {
    return (
        <div className="ml-36 flex flex-col h-screen overflow-auto text-black p-4">
            <h1 className="text-4xl font-bold text-black">Mentoring</h1>
            <ScheduleMentoring />
            <MainContent />
        </div>
    );
};

export default Mentoring;
