
// import React from 'react';
// import type { Property } from '../types';

// interface PropertyCardProps {
//     property: Property;
// }

// const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
//     return (
//         <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
//             {/* Image */}
//             <div className="h-40 bg-gray-200 relative">
//                 <img
//                     src={property.image_url}
//                     alt={property.title}
//                     className="w-full h-full object-cover"
//                     onError={(e) => {
//                         // Fallback if image fails to load
//                         e.currentTarget.src = "https://via.placeholder.com/300x160?text=No+Image";
//                         e.currentTarget.className = "w-full h-full object-cover bg-gray-200";
//                     }}
//                 />
//             </div>



//             {/* focus:ring-[#082567] */}

//             {/* Content */}
//             <div className="p-4">
//                 <h3 className="font-semibold text-gray-800 text-sm mb-2 uppercase">{property.title}</h3>
//                 <p className="text-sm text-gray-600 mb-1">
//                     {property.beds} BEDS | {property.baths} BATHS | {property.acres}
//                 </p>
//                 <p className="text-xs text-gray-600 mb-2">{property.contact}</p>
//                 <p className="font-bold text-[#082567] text-base">{property.price}</p>
//             </div>
//         </div>
//     );
// };

// export default PropertyCard;




import React from 'react';
import type { Property } from '../types';

interface PropertyCardProps {
    property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
    return (
        <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
            {/* Image — increased height */}
            <div className="h-86 w-90 bg-gray-200 relative">
                <img
                    src={property.image_url}
                    alt={property.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                        e.currentTarget.src = "https://via.placeholder.com/300x224?text=No+Image"; // Updated size to match h-56
                        e.currentTarget.className = "w-full h-full object-cover bg-gray-200";
                    }}
                />
            </div>

            {/* Content — increased padding and font sizes */}
            <div className="p-5">
                <h3 className="font-bold text-gray-800 text-base mb-2 leading-tight">{property.title}</h3>
                <p className="text-sm text-gray-600 mb-2">
                    {property.beds} BEDS | {property.baths} BATHS | {property.acres}
                </p>
                <p className="text-xs text-gray-600 mb-2">{property.contact}</p>
                <p className="font-bold text-[#082567] text-lg">{property.price}</p>
            </div>
        </div>
    );
};

export default PropertyCard;