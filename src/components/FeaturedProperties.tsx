// src/components/FeaturedProperties.tsx

import React from 'react';
import PropertyCard from './PropertyCard';
import type { Property } from '../types';




import hero1 from '../assets/jambo/test_1.jpeg';
import hero2 from '../assets/jambo/test_2.jpeg';
import hero3 from '../assets/jambo/test_3.jpeg';
import hero4 from '../assets/jambo/test_4.jpeg';
import hero5 from '../assets/jambo/test_5.jpeg';
import hero6 from '../assets/jambo/test_6.jpeg';
import hero7 from '../assets/jambo/test_7.jpeg';
import hero8 from '../assets/jambo/test_8.jpeg';
import hero9 from '../assets/jambo/test_9.jpeg';
import hero10 from '../assets/jambo/test_10.jpeg';

const featuredProperties: Property[] = [
    {
        id: 1,
        title: "MODERN ONE BEDROOM HOUSE AT WESTLANDS",
        // image_url: "https://jambohomeventures.co.ke/assets/Kamulu-gated-2-DThC6BWu.jpeg",
        image_url: hero1,
        contact: "0784324370",
        beds: 1,
        baths: 1,
        acres: "1 HA",
        price: "KSH 10,000"
    },
    {
        id: 2,
        title: "MODERN THREE BEDROOMS AT MOUNTAIN VIEW",
        // image_url: "https://jambohomeventures.co.ke/assets/Kamulu-gated-3-CS2eVK37.jpeg",
        image_url: hero2,
        contact: "0784324370",
        beds: 3,
        baths: 1,
        acres: "80 ACRES",
        price: "KSH 30,000"
    },
    {
        id: 3,
        title: "UNIQUE THREE BEDROOMS AT MEMBLEY",
        // image_url: "https://jambohomeventures.co.ke/assets/Kamulu-gated-3-CS2eVK37.jpeg",
        image_url: hero3,
        contact: "0784324370",
        beds: 3,
        baths: 1,
        acres: "80 ACRES",
        price: "KSH 25,000"
    },
    {
        id: 4,
        title: "MODERN THREE BEDROOMS HOUSE",
        // image_url: "https://jambohomeventures.co.ke/assets/Kamulu-gated-3-CS2eVK37.jpeg",
        image_url: hero4,
        contact: "0784324370",
        beds: 3,
        baths: 1,
        acres: "70 ACRES",
        price: "KSH 30,000"
    },
];

const FeaturedProperties = () => {
    return (
        <section className="bg-white py-12 px-4 relative">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-black text-2xl font-bold mb-8 text-center">Featured Properties</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {featuredProperties.map((prop) => (
                        <PropertyCard key={prop.id} property={prop} />
                    ))}
                </div>
            </div>


            {/* Feedback Button */}
            <button className="fixed bottom-6 right-6 bg-[#082567] hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-colors z-10">
                GIVE FEEDBACK
            </button>
        </section>
    );
};

export default FeaturedProperties;