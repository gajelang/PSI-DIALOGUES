import React, { useState, useEffect } from 'react';

const defaultEndpoint = 'https://dialogue-api.vercel.app/api/modul/example';

const FullPopupComponent = ({ onClose, word, type }) => {
    const [definition, setDefinition] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Define an async function to fetch data from the API
        const fetchDefinition = async () => {
            try {
                const response = await fetch(`${defaultEndpoint}?teks=${encodeURIComponent(word)}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                console.log(data);
                setDefinition(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };

        // Call the function when the component mounts
        fetchDefinition();
    }, [word]); // Depend on 'word' to trigger the fetch when it changes

    const popupContent = (
        <div className="popup-content">
            <h2 className="text-xl font-bold mb-2">{word}</h2>
            <p className="text-gray-600 mb-4">{type}</p>
            <div className='flex flex-row items-center gap-2 mb-3 bg-purple-600 w-fit py-2 px-3 text-white rounded-md'>
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 14 14"><path fill="currentColor" fillRule="evenodd" d="M9.739.85c.183-.835 1.374-.84 1.564-.005l.01.04l.017.077c.22.934.975 1.648 1.922 1.812c.872.152.872 1.404 0 1.556a2.396 2.396 0 0 0-1.925 1.827l-.024.103c-.19.834-1.38.83-1.564-.007l-.02-.088a2.38 2.38 0 0 0-1.917-1.836c-.87-.152-.87-1.402 0-1.553A2.38 2.38 0 0 0 9.718.948l.014-.064zM8.658 6.398A1.294 1.294 0 0 0 7.625 5.4v7.215a2.998 2.998 0 0 0 5.204-.85a3.016 3.016 0 0 1-.778-.183c-.595-.224-1.242-.665-1.773-1.436a.625.625 0 0 1 1.03-.709c.382.555.82.839 1.183.975c.184.07.348.1.476.11l.023.002C13.61 9.85 14 8.546 14 7.457c0-.734-.177-1.458-.483-2.072l-.079.015c-.52.09-.934.484-1.051.998l-.024.102c-.448 1.967-3.255 1.955-3.686-.016zM6.375 4.615a1.963 1.963 0 0 1 0-2.127v-.52a2.618 2.618 0 0 0-4.612 1.698v.002c.039.39.198.68.382.89c.229.261.47.368.527.38a.625.625 0 1 1-.277 1.22c-.36-.083-.82-.355-1.19-.775a2.813 2.813 0 0 1-.383-.562C.312 5.526 0 6.483 0 7.457c0 .735.178 1.568.483 2.238c.08-.09.167-.172.26-.244a.625.625 0 1 1 .774.98c-.178.141-.364.444-.478.795a2.997 2.997 0 0 0 5.336 1.389v-3.67a2.69 2.69 0 0 1-1.405.585a.625.625 0 1 1-.139-1.243c.509-.056.879-.349 1.143-.734c.268-.39.384-.818.401-1.023z" clipRule="evenodd"></path></svg>

                <p className='font-bold flex gap-2'>Sentence recommendations from AI</p>
            </div>

            {loading ? (
                <p>Loading...</p>
            ) : (
                <div>
                    {definition ? (
                        <p>{definition.exampleSentence}</p> // Adjust based on the API response structure
                    ) : (
                        <p>No definition found.</p>
                    )}
                </div>
            )}
        </div>
    );

    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
            <div className="absolute w-full h-full bg-gray-900 opacity-50"></div>
            <div className="bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
                <div className="py-4 text-left px-6">
                    <div className="flex justify-end">
                        <button className="text-gray-300 hover:text-gray-400 transition duration-150" onClick={onClose}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="red" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                        </button>
                    </div>
                    {popupContent}
                </div>
            </div>
        </div>
    );
};

export default FullPopupComponent;
