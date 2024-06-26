import React from 'react';

const CircleProgress = ({ total, label, progress }) => {
    // Calculate the percentage of progress relative to the total
    const percentage = (progress / total) * 100;

    return (
        <div className="relative inline-block">
            <div className="w-40 h-40 rounded-full bg-gray-300 flex items-center justify-center">
                <svg className="w-36 h-36 text-red-500">
                    <circle
                        cx="50%"
                        cy="50%"
                        r="45%"
                        strokeWidth="8"
                        stroke="#FB0953"
                        strokeLinecap="round"
                        fill="transparent"
                        strokeDasharray={`${percentage} ${100 - percentage}`}
                        transform="rotate(-90 32 32)"
                    />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                        <p className="text-2xl font-bold">{progress}</p>
                        <p className="text-sm">{label}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CircleProgress;
