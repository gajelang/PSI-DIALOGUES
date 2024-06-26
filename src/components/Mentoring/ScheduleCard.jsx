// ScheduleCard.jsx

import React from 'react';

const ScheduleCard = ({ schedule }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-4 flex items-center space-x-4">
            <div className="flex-1">
                <h3 className="text-xl font-bold">{schedule.title}</h3>
                <p className="text-gray-600">{schedule.description}</p>
                <div className="flex items-center mt-2">
                    <svg className="w-4 h-4 text-gray-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    <p className="text-gray-500">{schedule.date}</p>
                </div>
                <div className="flex items-center mt-2">
                    <svg className="w-4 h-4 text-gray-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    <p className="text-gray-500">{schedule.time}</p>
                </div>
            </div>
            <div className="flex-shrink-0 w-24 h-24 bg-gray-200 rounded-md">
                {/* Placeholder for calendar */}
                <svg className="w-12 h-12 m-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
            </div>
        </div>
    );
};

export default ScheduleCard;
