// // src/components/FeaturedProperties.tsx

// import React from 'react';
// import PropertyCard from './PropertyCard';
// import type { Property } from '../types';




// import hero1 from '../assets/jambo/test_1.jpeg';
// import hero2 from '../assets/jambo/test_2.jpeg';
// import hero3 from '../assets/jambo/test_3.jpeg';
// import hero4 from '../assets/jambo/test_4.jpeg';
// import hero5 from '../assets/jambo/test_5.jpeg';
// import hero6 from '../assets/jambo/test_6.jpeg';
// import hero7 from '../assets/jambo/test_7.jpeg';
// import hero8 from '../assets/jambo/test_8.jpeg';
// import hero9 from '../assets/jambo/test_9.jpeg';
// import hero10 from '../assets/jambo/test_10.jpeg';

// const featuredProperties: Property[] = [
//     {
//         id: 1,
//         title: "MODERN ONE BEDROOM HOUSE AT WESTLANDS",
//         // image_url: "https://jambohomeventures.co.ke/assets/Kamulu-gated-2-DThC6BWu.jpeg",
//         image_url: hero1,
//         contact: "0784324370",
//         beds: 1,
//         baths: 1,
//         acres: "1 HA",
//         price: "KSH 10,000"
//     },
//     {
//         id: 2,
//         title: "MODERN THREE BEDROOMS AT MOUNTAIN VIEW",
//         // image_url: "https://jambohomeventures.co.ke/assets/Kamulu-gated-3-CS2eVK37.jpeg",
//         image_url: hero2,
//         contact: "0784324370",
//         beds: 3,
//         baths: 1,
//         acres: "80 ACRES",
//         price: "KSH 30,000"
//     },
//     {
//         id: 3,
//         title: "UNIQUE THREE BEDROOMS AT MEMBLEY",
//         // image_url: "https://jambohomeventures.co.ke/assets/Kamulu-gated-3-CS2eVK37.jpeg",
//         image_url: hero3,
//         contact: "0784324370",
//         beds: 3,
//         baths: 1,
//         acres: "80 ACRES",
//         price: "KSH 25,000"
//     },
//     {
//         id: 4,
//         title: "MODERN THREE BEDROOMS HOUSE",
//         // image_url: "https://jambohomeventures.co.ke/assets/Kamulu-gated-3-CS2eVK37.jpeg",
//         image_url: hero4,
//         contact: "0784324370",
//         beds: 3,
//         baths: 1,
//         acres: "70 ACRES",
//         price: "KSH 30,000"
//     },
// ];

// const FeaturedProperties = () => {
//     return (
//         <section className="bg-white py-12 px-4 relative">
//             <div className="max-w-6xl mx-auto">
//                 <h2 className="text-black text-2xl font-bold mb-8 text-center">Featured Properties</h2>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//                     {featuredProperties.map((prop) => (
//                         <PropertyCard key={prop.id} property={prop} />
//                     ))}
//                 </div>
//             </div>


//             {/* Feedback Button */}
//             <button className="fixed bottom-6 right-6 bg-[#082567] hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-colors z-10">
//                 GIVE FEEDBACK
//             </button>
//         </section>
//     );
// };

// export default FeaturedProperties;




// src/components/FeaturedProperties.tsx
import React from 'react';
import PropertyCard from './PropertyCard';
import type { Property } from '../types';

// Import local images
import hero1 from '../assets/jambo/test_1.jpeg';
import hero2 from '../assets/jambo/test_2.jpeg';
import hero3 from '../assets/jambo/test_3.jpeg';
import hero4 from '../assets/jambo/test_4.jpeg';
// Add more if needed

// ✅ Updated mock data using the new Property interface
const featuredProperties: Property[] = [
  {
    id: 1,
    title: 'Modern One Bedroom House at Westlands',
    description: 'Cozy and secure one-bedroom house in a quiet Westlands estate. Close to schools and shopping malls.',
    location: {
      address: 'Off Ring Road, Westlands',
      neighborhood: 'Westlands',
      city: 'Nairobi',
    },
    category: 'house',
    bedrooms: 1,
    bathrooms: 1,
    sqft: 650,
    price: 10000,
    currency: 'KES',
    listedOn: '2026-01-02',
    images: [hero1],
    amenities: ['Security', 'Water', 'Parking'],
    furnishing: 'unfurnished',
    parking: 1,
    contact: {
      name: 'Jambo Agent',
      phone: '+254784324370',
      email: 'info@jambohomeventures.co.ke',
      whatsapp: '+254784324370',
    },
  },
  {
    id: 2,
    title: 'Modern Three Bedrooms at Mountain View',
    description: 'Spacious family home with garden and backup water tank. Gated community with 24/7 security.',
    location: {
      address: 'Mountain View Estate',
      neighborhood: 'Ruiru',
      city: 'Nairobi',
    },
    category: 'house',
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1800,
    price: 30000,
    currency: 'KES',
    listedOn: '2026-01-05',
    images: [hero2],
    amenities: ['Security', 'Garden', 'Water', 'Parking'],
    furnishing: 'semi-furnished',
    parking: 2,
    contact: {
      name: 'Jambo Agent',
      phone: '+254784324370',
      email: 'info@jambohomeventures.co.ke',
      whatsapp: '+254784324370',
    },
  },
  {
    id: 3,
    title: 'Unique Three Bedrooms at Membley',
    description: 'Newly built maisonette with modern finishes. Ideal for families seeking comfort and space.',
    location: {
      address: 'Membley Ridge Road',
      neighborhood: 'Membley',
      city: 'Nairobi',
    },
    category: 'house',
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1600,
    price: 25000,
    currency: 'KES',
    listedOn: '2026-01-08',
    images: [hero3],
    amenities: ['Security', 'Water', 'Parking', 'Balcony'],
    furnishing: 'unfurnished',
    parking: 1,
    contact: {
      name: 'Jambo Agent',
      phone: '+254784324370',
      email: 'info@jambohomeventures.co.ke',
      whatsapp: '+254784324370',
    },
  },
  {
    id: 4,
    title: 'Modern Three Bedrooms House',
    description: 'Well-maintained home in a peaceful compound. Easy access to Thika Superhighway.',
    location: {
      address: 'Near Garden Estate',
      neighborhood: 'Embakasi',
      city: 'Nairobi',
    },
    category: 'house',
    bedrooms: 3,
    bathrooms: 1,
    sqft: 1400,
    price: 30000,
    currency: 'KES',
    listedOn: '2026-01-10',
    images: [hero4],
    amenities: ['Security', 'Water', 'Parking'],
    furnishing: 'unfurnished',
    parking: 1,
    contact: {
      name: 'Jambo Agent',
      phone: '+254784324370',
      email: 'info@jambohomeventures.co.ke',
      whatsapp: '+254784324370',
    },
  },
];

// Accept openModal as prop
interface FeaturedPropertiesProps {
  onPropertyClick: (property: Property) => void;
}

const FeaturedProperties: React.FC<FeaturedPropertiesProps> = ({ onPropertyClick }) => {
  return (
    <section className="bg-white py-12 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-black text-2xl font-bold mb-8 text-center">Featured Properties</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProperties.map((prop) => (
            <PropertyCard
              key={prop.id}
              property={prop}
              onClick={() => onPropertyClick(prop)}
            />
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