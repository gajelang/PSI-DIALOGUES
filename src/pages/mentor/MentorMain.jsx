// src/pages/mentor/MentorMain.jsx
import React from 'react';
import MentorList from '../../components/Mentor/MentorList';
import MentoringHistory from '../../components/Mentor/MentoringHistory';
import CalendarMentor from '../../components/Mentor/CalendarMentor';
import MentorRecommendation from '../../components/Admin/mentoradmin/mentorrecommendation';

const MentorMain = () => {
  return (
    <div className="flex flex-col h-screen w-screen overflow-auto text-black">
      <div className="flex flex-row flex-1">
        <div className="flex flex-col flex-1 p-6">
          <header className="flex items-center p-4 w-full">
            <h1 className="text-4xl font-bold text-black">Dashboard Mentor</h1>
          </header>
          <main className="flex-1 flex-col p-4 overflow-auto w-full">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <MentorList />
              </div>
              <div>
                <CalendarMentor />
              </div>
            </div>
            <MentorRecommendation />
            <MentoringHistory />
          </main>
        </div>
      </div>
    </div>
  );
};

export default MentorMain;
