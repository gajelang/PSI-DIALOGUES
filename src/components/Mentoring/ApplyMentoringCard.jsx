import React, { useState } from 'react';

const ApplyMentoringCard = ({ onClose }) => {
    const [formData, setFormData] = useState({
        date: '',
        mentor: '',
        theme: ''
    });
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Lakukan proses pengiriman data ke backend atau simpan di state sesuai kebutuhan aplikasi Anda
        // Misalnya, di sini hanya menampilkan pesan sukses dan menutup modal

        // Simulasikan pengiriman data
        setTimeout(() => {
            setSuccessMessage('Apply berhasil!');
            onClose(); // Menutup modal setelah submit berhasil
        }, 1000);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center">
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            <div className="bg-white w-full max-w-md p-6 rounded-lg z-50">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">Apply for Mentoring</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700 focus:outline-none"
                    >
                        <svg
                            className="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date:</label>
                        <input
                            type="date"
                            id="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-white text-black"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="mentor" className="block text-sm font-medium text-gray-700">Mentor:</label>
                        <input
                            type="text"
                            id="mentor"
                            name="mentor"
                            value={formData.mentor}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-white"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="theme" className="block text-sm font-medium text-gray-700">Theme:</label>
                        <input
                            type="text"
                            id="theme"
                            name="theme"
                            value={formData.theme}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-white"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Submit
                    </button>
                </form>
                {successMessage && (
                    <p className="mt-4 text-green-500">{successMessage}</p>
                )}
            </div>
        </div>
    );
};

export default ApplyMentoringCard;
