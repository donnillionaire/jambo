import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const SearchBar = () => {
    const [location, setLocation] = useState('');
    const [category, setCategory] = useState('');
    const [bedrooms, setBedrooms] = useState('');
    const [bathrooms, setBathrooms] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({ location, category, bedrooms, bathrooms, maxPrice });
        const searchParams = {
            location,
            category,
            bedrooms,
            bathrooms,
            maxPrice,
        };
        // Navigate to results and pass search criteria
        navigate('/results', { state: searchParams });
    };

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-4xl bg-white rounded-lg p-4 md:p-6 shadow-lg">
            {/* Main search input */}
            <div className="relative mb-4">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>
                <input
                    type="text"
                    placeholder="Enter Address or Location"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg
                     text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-[#082567] focus:outline-none"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                />
            </div>

            {/* bg-[#082567] */}

            {/* Filters row */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                <select
                    className="border border-gray-300 rounded px-3 py-2 text-sm
                     text-gray-900 bg-white focus:ring-2 focus:ring-[#082567] focus:outline-none"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value="" className="text-gray-500">Category</option>
                    <option value="apartment">Apartment</option>
                    <option value="house">House</option>
                    <option value="land">Land</option>
                </select>

                <input
                    type="number"
                    placeholder="Bedrooms"
                    min="0"
                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm
                     text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-[#082567] focus:outline-none"
                    value={bedrooms}
                    onChange={(e) => setBedrooms(e.target.value)}
                />

                <input
                    type="number"
                    placeholder="Bathrooms"
                    min="0"
                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm
                     text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-[#082567] focus:outline-none"
                    value={bathrooms}
                    onChange={(e) => setBathrooms(e.target.value)}
                />

                <input
                    type="number"
                    placeholder="Max Price"
                    min="0"
                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm
                     text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-[#082567] focus:outline-none"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                />

                <button
                    type="submit"
                    className="bg-[#082567] hover:bg-red-700 text-white font-bold py-2 px-4 rounded text-sm transition-colors"
                >
                    SEARCH
                </button>
            </div>
        </form>
    );
};

export default SearchBar;