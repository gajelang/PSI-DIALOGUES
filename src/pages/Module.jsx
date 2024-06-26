import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Dropdown from '../components/Modul/Dropdown';
import Search from '../components/Modul/Search';
import ModuleItem from '../components/Modul/ModuleItem';

const Module = () => {
    const [modules, setModules] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const categories = ['All', 'verb', 'noun', 'adjective', 'adverb'];

    const vercelToken = 'yourtokenvalue'; // Replace with your token if needed
    const apiEndPt = 'https://dialogue-api.vercel.app/api/modul/modul';

    useEffect(() => {
        const config = {
            method: 'get',
            url: apiEndPt,
            headers: {
                Authorization: 'Bearer ' + vercelToken, // Include this if API requires authorization
            },
        };
        let results = [];

        const fetchModules = async () => {
            const loop = async (url) => {
                try {
                    const response = await axios({ ...config, url });
                    results.push(...response.data);

                    console.log('Fetched data:', response.data); // Log data fetched from API

                    // Check if pagination is needed
                    if (response.data.pagination && response.data.pagination.next !== null) {
                        await loop(`${apiEndPt}?until=${response.data.pagination.next}`);
                    } else {
                        setModules(results);
                        console.log('Final results:', results); // Log final results
                    }
                } catch (error) {
                    console.error('There was an error fetching the data!', error);
                }
            };

            await loop(apiEndPt);
        };

        fetchModules();
    }, []);

    const handleSearch = (searchTerm) => {
        setSearchTerm(searchTerm);
    };

    const filteredModules = modules.filter(module =>
        (selectedCategory === 'All' || module.kategori === selectedCategory) &&
        module.teks.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="h-full ml-36 p-4 text-black">
            <main className="flex flex-col">
                <div className='flex justify-between'>
                    <h1 className="text-4xl font-bold text-black">Speaking Module</h1>
                    <Search
                        searchTerm={searchTerm}
                        onSearch={handleSearch}
                    />
                </div>

                <hr className='mt-8'></hr>

                <div className="mt-4 flex justify-between items-center">
                    <p className="text-[20px] text-black">Sort by Category</p>
                    <div className='flex flex-row gap-5'>
                        <Dropdown
                            categories={categories}
                            selectedCategory={selectedCategory}
                            onChangeCategory={setSelectedCategory}
                        />
                    </div>
                </div>

                <hr className='mt-4'></hr>

                <section className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {filteredModules.map((module, index) => (
                        <ModuleItem
                            key={index}
                            word={module.teks}
                            type={module.kategori}
                            audioUrl={module.sound}
                        />
                    ))}
                </section>
            </main>
        </div>
    );
};

export default Module;
