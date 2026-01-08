// // SearchResultsPage.tsx
// import React from 'react';
// import { useLocation } from 'react-router-dom';

// // Define types
// interface Property {
//   id: number;
//   title: string;
//   location: string;
//   category: 'apartment' | 'house' | 'land';
//   bedrooms: number;
//   bathrooms: number;
//   price: number;
//   image: string;
// }

// interface SearchParams {
//   location?: string;
//   category?: string;
//   bedrooms?: string;
//   bathrooms?: string;
//   maxPrice?: string;
// }

// // Mock property data
// const mockProperties: Property[] = [
//   {
//     id: 1,
//     title: 'Modern Apartment in Nairobi',
//     location: 'Westlands, Nairobi',
//     category: 'apartment',
//     bedrooms: 2,
//     bathrooms: 2,
//     price: 25000,
//     image: 'https://placehold.co/600x400?text=Apartment',
//   },
//   {
//     id: 2,
//     title: 'Spacious House in Karen',
//     location: 'Karen, Nairobi',
//     category: 'house',
//     bedrooms: 4,
//     bathrooms: 3,
//     price: 85000,
//     image: 'https://placehold.co/600x400?text=House',
//   },
//   {
//     id: 3,
//     title: 'Residential Plot in Ruiru',
//     location: 'Ruiru, Kiambu',
//     category: 'land',
//     bedrooms: 0,
//     bathrooms: 0,
//     price: 150000,
//     image: 'https://placehold.co/600x400?text=Land',
//   },
//   {
//     id: 4,
//     title: 'Cozy 1-Bed Apartment',
//     location: 'Eastleigh, Nairobi',
//     category: 'apartment',
//     bedrooms: 1,
//     bathrooms: 1,
//     price: 18000,
//     image: 'https://placehold.co/600x400?text=1-Bed',
//   },
// ];

// const PropertyCard: React.FC<{ property: Property }> = ({ property }) => (
//   <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
//     <img src={property.image} alt={property.title} className="w-full h-48 object-cover" />
//     <div className="p-4">
//       <h3 className="font-bold text-lg text-gray-900">{property.title}</h3>
//       <p className="text-gray-600 text-sm mt-1">{property.location}</p>
//       <div className="flex justify-between mt-3 text-gray-700">
//         <span>{property.bedrooms} bed</span>
//         <span>{property.bathrooms} bath</span>
//         <span className="font-semibold">KSh {property.price.toLocaleString()}</span>
//       </div>
//       <p className="text-xs text-gray-500 mt-2 capitalize">{property.category}</p>
//     </div>
//   </div>
// );

// const SearchResultsPage: React.FC = () => {
//   const location = useLocation();
//   const searchParams = (location.state || {}) as SearchParams;

//   // Filter properties based on search criteria
//   const filteredProperties = mockProperties.filter((prop) => {
//     const matchesLocation =
//       !searchParams.location || prop.location.toLowerCase().includes(searchParams.location.toLowerCase());

//     const matchesCategory = !searchParams.category || prop.category === searchParams.category;

//     const matchesBedrooms =
//       !searchParams.bedrooms || prop.bedrooms >= parseInt(searchParams.bedrooms || '0', 10);

//     const matchesBathrooms =
//       !searchParams.bathrooms || prop.bathrooms >= parseInt(searchParams.bathrooms || '0', 10);

//     const matchesMaxPrice =
//       !searchParams.maxPrice || prop.price <= parseInt(searchParams.maxPrice || '0', 10);

//     return matchesLocation && matchesCategory && matchesBedrooms && matchesBathrooms && matchesMaxPrice;
//   });

//   return (
//     <div className="max-w-6xl mx-auto">
//       <h2 className="text-2xl font-bold text-gray-800 mb-4">
//         {filteredProperties.length} Properties Found
//       </h2>

//       {filteredProperties.length === 0 ? (
//         <p className="text-gray-600">No properties match your search criteria.</p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filteredProperties.map((property) => (
//             <PropertyCard key={property.id} property={property} />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default SearchResultsPage;



// components/SearchResultsPage.tsx
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

// Define types
interface Property {
    id: number;
    title: string;
    location: string;
    category: 'apartment' | 'house' | 'land' | 'office' | 'godown';
    bedrooms: number | null;
    bathrooms: number | null;
    sqft: number | null;
    price: number;
    images: string[];
    contact: {
        phone: string;
        email: string;
        whatsapp: string;
    };
}

// Mock data (replace with API later)
const mockProperties: Property[] = [
    {
        id: 1,
        title: 'Townhouse for rent isipe road',
        location: 'Nairobi',
        category: 'house',
        bedrooms: 2,
        bathrooms: 2,
        sqft: null,
        price: 25000,
        images: [
            'https://placehold.co/600x400?text=Living+Room',
            'https://placehold.co/600x400?text=Kitchen',
            'https://placehold.co/600x400?text=Bedroom',
        ],
        contact: {
            phone: '+254700000000',
            email: 'owner@example.com',
            whatsapp: '+254700000000',
        },
    },
    {
        id: 2,
        title: 'Godown for Lease/Rent',
        location: 'Nairobi',
        category: 'godown',
        bedrooms: null,
        bathrooms: null,
        sqft: 6000,
        price: 250000,
        images: [
            'https://placehold.co/600x400?text=Godown+Interior',
            'https://placehold.co/600x400?text=Loading+Area',
        ],
        contact: {
            phone: '+254700000000',
            email: 'owner@example.com',
            whatsapp: '+254700000000',
        },
    },
    {
        id: 3,
        title: 'Office Space',
        location: 'Nairobi',
        category: 'office',
        bedrooms: null,
        bathrooms: null,
        sqft: 1530,
        price: 80000,
        images: [
            'https://placehold.co/600x400?text=Office+Front',
            'https://placehold.co/600x400?text=Reception',
        ],
        contact: {
            phone: '+254700000000',
            email: 'owner@example.com',
            whatsapp: '+254700000000',
        },
    },
    {
        id: 4,
        title: 'Furnished Office Space',
        location: 'Old Mombasa Rd',
        category: 'office',
        bedrooms: null,
        bathrooms: null,
        sqft: null,
        price: 25000,
        images: [
            'https://placehold.co/600x400?text=Furnished+Office',
            'https://placehold.co/600x400?text=Meeting+Room',
        ],
        contact: {
            phone: '+254700000000',
            email: 'owner@example.com',
            whatsapp: '+254700000000',
        },
    },
];

// Reusable icons
const BedIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18v6H3v-6z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 10v6m0 0v6m0-6h6m-6 0H3" />
    </svg>
);

const BathIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-2m-2 0h-2M7 21h2m-2 0h-2M7 3h2m-2 0H5M5 21h2" />
    </svg>
);

const SqftIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 14h.01M18 14h.01M15 11h3M12 11h.01M9 11h.01M7 21h10v-2a3 3 0 00-5.356-1.857M7 21h10v-2a3 3 0 00-5.356-1.857M7 21h10v-2a3 3 0 00-5.356-1.857M14 5H9M7 5h2" />
    </svg>
);

// PropertyCard Component
const PropertyCard: React.FC<{ property: Property }> = ({ property }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % property.images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + property.images.length) % property.images.length);
    };

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
            <div className="relative">
                <img
                    src={property.images[currentImageIndex]}
                    alt={property.title}
                    className="w-full h-48 object-cover"
                />
                {/* Image navigation arrows */}
                {property.images.length > 1 && (
                    <>
                        <button
                            onClick={prevImage}
                            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 text-white p-2 rounded-full hover:bg-opacity-50"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            onClick={nextImage}
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
                            className={`h-2 w-2 rounded-full ${index === currentImageIndex ? 'bg-green-500' : 'bg-gray-300'
                                }`}
                        />
                    ))}
                </div>
            </div>

            <div className="p-4">
                <h3 className="font-bold text-lg text-gray-900">{property.title}</h3>
                <div className="flex items-center gap-2 mt-1">
                    <span className="text-red-600 font-semibold">KSH {property.price.toLocaleString()}</span>
                    <span className="text-gray-500 text-sm">Monthly</span>
                    <span className="text-gray-500 text-sm">📍 {property.location}</span>
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
                        onClick={() => window.location.href = `tel:${property.contact.phone}`}
                        className="flex items-center gap-1 px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502.95l-1.498 4.493A1 1 0 018.28 16H5.5a2 2 0 01-2-2V5zM14 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502.95l-1.498 4.493A1 1 0 0118.28 16H15.5a2 2 0 01-2-2V5zM14 13a2 2 0 114 0v6m-4-6v6m-4-6a2 2 0 114 0v6m-4-6v6" />
                        </svg>
                        Call
                    </button>
                    <button
                        onClick={() => window.location.href = `mailto:${property.contact.email}`}
                        className="flex items-center gap-1 px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14v2H5v-2z" />
                        </svg>
                        Email
                    </button>
                    <button
                        onClick={() => window.location.href = `https://wa.me/${property.contact.whatsapp.replace(/\D/g, '')}`}
                        className="flex items-center gap-1 px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.8-1.995l-.001-.001-.001-.001A9.863 9.863 0 013 12C3 7.582 7.03 4 12 4s9 3.582 9 8z" />
                        </svg>
                        WhatsApp
                    </button>
                    <button className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 006.364 6.364L12 14.318l1.318 1.318a4.5 4.5 0 006.364-6.364L12 12l-1.318-1.318a4.5 4.5 0 00-6.364 6.364L12 12l-1.318-1.318a4.5 4.5 0 00-6.364-6.364L12 12l-1.318-1.318z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

// Sidebar component
const SearchSidebar = () => {
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
            <button className="w-full bg-green-500 text-white py-2 rounded font-medium hover:bg-green-600">
                SEARCH
            </button>
            <div className="mt-4 text-sm">
                <strong>633 Results</strong>
            </div>

            <div className="mt-6">
                <h3 className="font-bold mb-2">Quick Links</h3>
                <ul className="space-y-1 text-green-600">
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

    // Filter properties based on search criteria
    const filteredProperties = mockProperties.filter((prop) => {
        const matchesLocation =
            !searchParams.location ||
            prop.location.toLowerCase().includes(searchParams.location.toLowerCase());

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
        <div className="max-w-7xl mx-auto px-4 py-6">
            {/* Breadcrumb */}
            <div className="text-green-600 mb-4">
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
                                <PropertyCard key={property.id} property={property} />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SearchResultsPage;