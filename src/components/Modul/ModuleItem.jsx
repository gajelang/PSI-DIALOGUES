import React, { useState } from 'react';
import FullPopupComponent from './PopupComponent'; // Sesuaikan path file sesuai dengan struktur folder Anda

const ModuleItem = ({ word, type, audioUrl }) => {
    const [showPopup, setShowPopup] = useState(false);

    const playAudio = () => {
        const audio = new Audio(audioUrl);
        audio.play().catch(error => {
            console.error("Error playing audio:", error);
            alert("Failed to play audio. Please try again later.");
        });
    };

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    return (
        <div className="bg-white border rounded-lg flex justify-between items-center p-4 shadow-sm">
            <div>
                <h2 className="text-lg font-bold">{word}</h2>
                <p className="text-gray-600 text-sm">{type}</p>
            </div>

            <div className='flex justify-center items-center'>
                <button
                    className="text-blue-500 p-2"
                    onClick={playAudio}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
                    </svg>
                </button>

                <button onClick={togglePopup} className="text-gray-600 p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                    </svg>
                </button>
            </div>

            {showPopup && <FullPopupComponent onClose={togglePopup} word={word} type={type} />}
        </div>
    );
};

export default ModuleItem;
