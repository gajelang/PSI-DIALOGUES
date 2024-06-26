// src/components/MainContent.jsx
import React from 'react';
import HistoryMentoring from './HistoryMentoring'; // Adjust the import path as per your project structure
import { dummyMentoringHistory } from '../../data/dummyMentoringHistory'; // Import dummy data directly

const MainContent = () => {
    return (
        <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Mentoring History</h2>
            <div className="grid gap-6">
                {dummyMentoringHistory.length > 0 ? (
                    dummyMentoringHistory.map(mentoring => (
                        <div key={mentoring.id} className="bg-white rounded-lg shadow-md p-4">
                            <HistoryMentoring mentoring={mentoring} />
                        </div>
                    ))
                ) : (
                    <div className="bg-white rounded-lg shadow-md p-4">
                        <p className="text-gray-600">No mentoring history found.</p>
                        {/* Render dummy card */}
                        <HistoryMentoring mentoring={dummyMentoringHistory[0]} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default MainContent;
