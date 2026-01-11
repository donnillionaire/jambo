

// SearchResultsPage.tsx
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import type { Property } from '../types';
import PropertyDetailModal from './PropertyDetailModal';

export const mockProperties: Property[] = [
    {
        id: 1,
        title: 'Modern 2-Bedroom Apartment in Kilimani',
        description: 'Newly renovated apartment in a secure gated community. 5 mins to Yaya Centre. Includes backup water tank and 24/7 security.',
        location: {
            address: 'Off Dennis Pritt Road',
            neighborhood: 'Kilimani',
            city: 'Nairobi',
            coordinates: { lat: -1.2833, lng: 36.8167 } // Example: Nairobi CBD

        },
        category: 'apartment',
        subcategory: 'maisonette',
        bedrooms: 2,
        bathrooms: 2,
        sqft: 1200,
        price: 85000,
        currency: 'KES',
        listedOn: '2026-01-05',
        furnishing: 'furnished',
        parking: 1,
        amenities: ['Water', 'Electricity', 'Security', 'Parking', 'Gym'],
        leaseTerms: {
            depositMonths: 2,
            agencyFeePct: 10,
            serviceCharge: 3000,
            includesUtilities: false
        },
        images: [
            'https://placehold.co/800x600?text=Living+Room',
            'https://placehold.co/800x600?text=Kitchen',
            'https://placehold.co/800x600?text=Bedroom',
            'https://placehold.co/800x600?text=Bathroom',
            'https://placehold.co/800x600?text=Building+Exterior'
        ],
        contact: {
            name: 'Jane Mwangi',
            company: 'Prime Properties Ltd',
            phone: '+254712345678',
            email: 'jane@primeproperties.co.ke',
            whatsapp: '+254712345678'
        }
    }
];

// Reusable icons
const BedIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18v6H3v-6z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 10v6m0 0v6m0-6h6m-6 0H3" />
    </svg>
);

const BathIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-2m-2 0h-2M7 21h2m-2 0h-2M7 3h2m-2 0H5M5 21h2" />
    </svg>
);

const SqftIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 14h.01M18 14h.01M15 11h3M12 11h.01M9 11h.01M7 21h10v-2a3 3 0 00-5.356-1.857M7 21h10v-2a3 3 0 00-5.356-1.857M7 21h10v-2a3 3 0 00-5.356-1.857M14 5H9M7 5h2" />
    </svg>
);

// ✅ Updated PropertyCard: no routing, uses onClick prop
const PropertyCard: React.FC<{ property: Property; onClick: () => void }> = ({ property, onClick }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % property.images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + property.images.length) % property.images.length);
    };

    const cleanWhatsAppNumber = (raw: string): string => {
        return raw.replace(/\D/g, '');
    };

    // Prevent inner button clicks from triggering card click
    const stopPropagation = (e: React.MouseEvent) => e.stopPropagation();

    return (
        <div
            className="bg-white rounded-lg shadow-md overflow-hidden mb-6 cursor-pointer hover:shadow-lg transition-shadow"
            onClick={onClick} // Opens modal
        >
            <div className="relative">
                <img
                    src={property.images[currentImageIndex]}
                    alt={property.title}
                    className="w-full h-48 object-cover"
                    onError={(e) => {
                        e.currentTarget.src = 'https://via.placeholder.com/600x400?text=No+Image';
                    }}
                />
                {/* Image navigation arrows */}
                {property.images.length > 1 && (
                    <>
                        <button
                            onClick={(e) => {
                                stopPropagation(e);
                                prevImage();
                            }}
                            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 text-white p-2 rounded-full hover:bg-opacity-50"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            onClick={(e) => {
                                stopPropagation(e);
                                nextImage();
                            }}
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 text-white p-2 rounded-full hover:bg-opacity-50"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </>
                )}
                {/* Image indicators */}
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
                    {property.images.map((_, index) => (
                        <div
                            key={index}
                            className={`h-2 w-2 rounded-full ${index === currentImageIndex ? 'bg-[#0047AB]' : 'bg-gray-300'}`}
                        />
                    ))}
                </div>
            </div>

            <div className="p-4">
                <h3 className="font-bold text-lg text-gray-900">{property.title}</h3>
                <div className="flex items-center gap-2 mt-1">
                    <span className="text-red-600 font-semibold">KSH {property.price.toLocaleString()}</span>
                    <span className="text-gray-500 text-sm">Monthly</span>
                    <span className="text-gray-500 text-sm">📍 {property.location.city}</span>
                </div>

                <div className="flex items-center gap-4 mt-3 text-gray-700">
                    {property.bedrooms !== null && (
                        <div className="flex items-center gap-1">
                            <BedIcon />
                            <span>{property.bedrooms}</span>
                        </div>
                    )}
                    {property.bathrooms !== null && (
                        <div className="flex items-center gap-1">
                            <BathIcon />
                            <span>{property.bathrooms}</span>
                        </div>
                    )}
                    {property.sqft !== null && (
                        <div className="flex items-center gap-1">
                            <SqftIcon />
                            <span>{property.sqft} sqf</span>
                        </div>
                    )}
                </div>

                <div className="flex gap-2 mt-4">
                    <button
                        onClick={(e) => {
                            stopPropagation(e);
                            window.location.href = `tel:${property.contact.phone}`;
                        }}
                        className="flex items-center gap-1 px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502.95l-1.498 4.493A1 1 0 018.28 16H5.5a2 2 0 01-2-2V5zM14 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502.95l-1.498 4.493A1 1 0 0118.28 16H15.5a2 2 0 01-2-2V5zM14 13a2 2 0 114 0v6m-4-6v6m-4-6a2 2 0 114 0v6m-4-6v6" />
                        </svg>
                        Call
                    </button>
                    <button
                        onClick={(e) => {
                            stopPropagation(e);
                            window.location.href = `mailto:${property.contact.email}`;
                        }}
                        className="flex items-center gap-1 px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14v2H5v-2z" />
                        </svg>
                        Email
                    </button>
                    <button
                        onClick={(e) => {
                            stopPropagation(e);
                            const cleanNumber = cleanWhatsAppNumber(property.contact.whatsapp);
                            // ✅ Fixed: removed extra spaces in URL
                            window.open(`https://wa.me/${cleanNumber}`, '_blank');
                        }}
                        className="flex items-center gap-1 px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.8-1.995l-.001-.001-.001-.001A9.863 9.863 0 013 12C3 7.582 7.03 4 12 4s9 3.582 9 8z" />
                        </svg>
                        WhatsApp
                    </button>
                    <button
                        onClick={stopPropagation}
                        className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 006.364 6.364L12 14.318l1.318 1.318a4.5 4.5 0 006.364-6.364L12 12l-1.318-1.318a4.5 4.5 0 00-6.364 6.364L12 12l-1.318-1.318a4.5 4.5 0 00-6.364-6.364L12 12l-1.318-1.318z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

// Sidebar component (unchanged)
const SearchSidebar: React.FC = () => {
    const [showMoreFilters, setShowMoreFilters] = useState(false);

    return (
        <div className="bg-gray-200 p-4 rounded-lg">
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Enter Address or Location"
                    className="w-full px-3 py-2 border border-gray-300 rounded"
                />
            </div>
            <div className="mb-4">
                <select className="w-full px-3 py-2 border border-gray-300 rounded">
                    <option>Property Type</option>
                    <option>Apartment</option>
                    <option>Townhouse</option>
                    <option>House</option>
                    <option>Office</option>
                    <option>Godown</option>
                </select>
            </div>
            <div className="mb-4">
                <select className="w-full px-3 py-2 border border-gray-300 rounded">
                    <option>Contract</option>
                    <option>Rent</option>
                    <option>Sale</option>
                </select>
            </div>
            <div className="mb-4">
                <button
                    onClick={() => setShowMoreFilters(!showMoreFilters)}
                    className="w-full text-left px-3 py-2 bg-gray-300 rounded flex justify-between items-center"
                >
                    MORE FILTERS
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-4 w-4 transition-transform ${showMoreFilters ? 'rotate-180' : ''}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
                {showMoreFilters && (
                    <div className="mt-2 p-2 bg-white rounded">
                        <div className="mb-2">
                            <label className="block text-sm mb-1">Min Price</label>
                            <input type="number" className="w-full px-2 py-1 border border-gray-300 rounded" />
                        </div>
                        <div className="mb-2">
                            <label className="block text-sm mb-1">Max Price</label>
                            <input type="number" className="w-full px-2 py-1 border border-gray-300 rounded" />
                        </div>
                        <div className="mb-2">
                            <label className="block text-sm mb-1">Bedrooms</label>
                            <select className="w-full px-2 py-1 border border-gray-300 rounded">
                                <option>Any</option>
                                <option>1+</option>
                                <option>2+</option>
                                <option>3+</option>
                            </select>
                        </div>
                    </div>
                )}
            </div>
            <button className="w-full bg-[#0047AB] text-white py-2 rounded font-medium hover:bg-[#0047AB]">
                SEARCH
            </button>
            <div className="mt-4 text-sm">
                <strong>633 Results</strong>
            </div>

            <div className="mt-6">
                <h3 className="font-bold mb-2">Quick Links</h3>
                <ul className="space-y-1 text-[#0047AB]">
                    <li><a href="#" className="hover:underline">Apartments for rent</a></li>
                    <li><a href="#" className="hover:underline">Townhouses for rent</a></li>
                    <li><a href="#" className="hover:underline">Furnished houses for rent</a></li>
                    <li><a href="#" className="hover:underline">Own Compound for rent</a></li>
                    <li><a href="#" className="hover:underline">Studios for rent</a></li>
                    <li><a href="#" className="hover:underline">Commercial Properties for rent</a></li>
                    <li><a href="#" className="hover:underline">Below 80,000</a></li>
                    <li><a href="#" className="hover:underline">Below 100,000</a></li>
                    <li><a href="#" className="hover:underline">Below 200,000</a></li>
                    <li><a href="#" className="hover:underline">Above 200,000</a></li>
                </ul>
            </div>
        </div>
    );
};

// Main SearchResultsPage
const SearchResultsPage: React.FC = () => {
    const location = useLocation();
    const searchParams = (location.state || {}) as {
        location?: string;
        category?: string;
        bedrooms?: string;
        bathrooms?: string;
        maxPrice?: string;
    };

    const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openPropertyDetail = (property: Property) => {
        setSelectedProperty(property);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProperty(null);
    };

    // Filter properties
    const filteredProperties = mockProperties.filter((prop) => {
        const matchesLocation =
            !searchParams.location ||
            prop.location.city.toLowerCase().includes(searchParams.location.toLowerCase());

        const matchesCategory =
            !searchParams.category || prop.category === searchParams.category;

        const matchesBedrooms =
            !searchParams.bedrooms ||
            (prop.bedrooms !== null &&
                prop.bedrooms >= parseInt(searchParams.bedrooms || '0', 10));

        const matchesBathrooms =
            !searchParams.bathrooms ||
            (prop.bathrooms !== null &&
                prop.bathrooms >= parseInt(searchParams.bathrooms || '0', 10));

        const matchesMaxPrice =
            !searchParams.maxPrice || prop.price <= parseInt(searchParams.maxPrice || '0', 10);

        return matchesLocation && matchesCategory && matchesBedrooms && matchesBathrooms && matchesMaxPrice;
    });

    return (
        <>
            <div className="max-w-7xl mx-auto px-4 py-6">
                {/* Breadcrumb */}
                <div className="text-[#0047AB] mb-4">
                    <a href="/">Home</a> / <span>Properties for rent</span>
                </div>

                <div className="flex flex-col lg:flex-row gap-6">
                    {/* Sidebar */}
                    <div className="lg:w-1/4">
                        <SearchSidebar />
                    </div>

                    {/* Main Content */}
                    <div className="lg:w-3/4">
                        <h2 className="text-xl font-bold mb-4">
                            {filteredProperties.length} Properties Found
                        </h2>
                        {filteredProperties.length === 0 ? (
                            <p className="text-gray-600">No properties match your search criteria.</p>
                        ) : (
                            <div className="space-y-6">
                                {filteredProperties.map((property) => (
                                    <PropertyCard
                                        key={property.id}
                                        property={property}
                                        onClick={() => openPropertyDetail(property)}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* ✅ Modal rendered at root level (outside layout constraints) */}
            <PropertyDetailModal
                property={selectedProperty}
                isOpen={isModalOpen}
                onClose={closeModal}
            />
        </>
    );
};

export default SearchResultsPage;