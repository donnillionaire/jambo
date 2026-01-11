

// // PropertyCard.tsx
// import React from 'react';
// import type { Property } from '../types'; // or wherever your type is defined

// interface PropertyCardProps {
//     property: Property;
//     onClick?: () => void; // optional click handler for modal/detail view
// }

// const PropertyCard: React.FC<PropertyCardProps> = ({ property, onClick }) => {
//     const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
//         e.currentTarget.src = 'https://via.placeholder.com/300x224?text=No+Image';
//         e.currentTarget.classList.add('bg-gray-200');
//     };

//     return (
//         <div
//             className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
//             onClick={onClick}
//         >
//             {/* Image */}
//             <div className="h-56 w-full relative">
//                 <img
//                     src={(property.images && property.images.length > 0 ? property.images[0] : 'https://via.placeholder.com/300x224?text=No+Image')}
//                     alt={property.title}
//                     className="w-full h-full object-cover"
//                     onError={handleImageError}
//                 />
//             </div>

//             {/* Content */}
//             <div className="p-5">
//                 <h3 className="font-bold text-gray-800 text-base mb-2 leading-tight line-clamp-2">
//                     {property.title}
//                 </h3>

//                 {/* Location */}
//                 <p className="text-xs text-gray-600 mb-2">
//                     📍 {property.location.neighborhood}, {property.location.city}
//                 </p>

//                 {/* Key specs */}
//                 <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-700 mb-2">
//                     {property.bedrooms !== null && (
//                         <span>{property.bedrooms} bed</span>
//                     )}
//                     {property.bathrooms !== null && (
//                         <span>{property.bathrooms} bath</span>
//                     )}
//                     {property.sqft !== null && (
//                         <span>{property.sqft} sqft</span>
//                     )}
//                     {property.furnishing && (
//                         <span className="capitalize">{property.furnishing}</span>
//                     )}
//                 </div>

//                 {/* Price */}
//                 <p className="font-bold text-[#082567] text-lg">
//                     {property.currency === 'USD' ? 'USD ' : 'KES '}
//                     {property.price.toLocaleString()}
//                     {property.category !== 'land' && <span className="text-sm font-normal text-gray-600"> /mo</span>}
//                 </p>
//             </div>
//         </div>
//     );
// };

// export default PropertyCard;


// PropertyCard.tsx
import React from 'react';
import type { Property } from '../types'; // Adjust path if needed

interface PropertyCardProps {
    property: Property;
    onClick?: () => void; // Optional: for opening modal or detail view
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property, onClick }) => {
    // Safely get first image or fallback
    const firstImage = property.images && property.images.length > 0
        ? property.images[0]
        : 'https://via.placeholder.com/300x224?text=No+Image';

    const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
        e.currentTarget.src = 'https://via.placeholder.com/300x224?text=No+Image';
        e.currentTarget.classList.add('bg-gray-200');
    };

    return (
        <div
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            onClick={onClick}
            role="article"
            aria-label={`Property: ${property.title}`}
        >
            {/* Image */}
            <div className="h-56 w-full relative">
                <img
                    src={firstImage}
                    alt={property.title}
                    className="w-full h-full object-cover"
                    onError={handleImageError}
                />
            </div>

            {/* Content */}
            <div className="p-5">
                <h3 className="font-bold text-gray-800 text-base mb-2 leading-tight line-clamp-2">
                    {property.title}
                </h3>

                {/* Location */}
                <p className="text-xs text-gray-600 mb-2">
                    📍📍 {property.location?.neighborhood || 'N/A'}, {property.location?.city || 'N/A'}
                </p>

                {/* Key Specs */}
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-700 mb-2">
                    {property.bedrooms !== null && (
                        <span>{property.bedrooms} bed</span>
                    )}
                    {property.bathrooms !== null && (
                        <span>{property.bathrooms} bath</span>
                    )}
                    {property.sqft !== null && (
                        <span>{property.sqft} sqft</span>
                    )}
                    {property.furnishing && (
                        <span className="capitalize">{property.furnishing}</span>
                    )}
                    {property.parking !== undefined && property.parking !== 'None' && (
                        <span>
                            {typeof property.parking === 'number'
                                ? `${property.parking} parking`
                                : 'Parking'}
                        </span>
                    )}
                </div>

                {/* Price */}
                <p className="font-bold text-[#082567] text-lg">
                    {property.currency === 'USD' ? 'USD ' : 'KES '}
                    {property.price.toLocaleString()}
                    {property.category !== 'land' && (
                        <span className="text-sm font-normal text-gray-600"> /mo</span>
                    )}
                </p>
            </div>
        </div>
    );
};

export default PropertyCard;