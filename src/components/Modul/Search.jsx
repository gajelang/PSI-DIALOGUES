import React from 'react';

const Search = ({ searchTerm, onSearch }) => {
    return (
        <div className="flex items-center border bg-gray-200 rounded-full px-6">
            <input
                type="text"
                className="p-3 bg-gray-200 rounded-full"
                placeholder="Search Here"
                value={searchTerm}
                onChange={(e) => onSearch(e.target.value)}
            />
            <button className="p-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>

            </button>
        </div>
    );
};

export default Search;
