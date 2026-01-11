// src/types.ts

// export interface Property {
//   id: number;
//   image_url: string;
//   title: string;
//   contact: string;
//   beds: number;
//   baths: number;
//   acres: string; // e.g., "1 HA", "80 ACRES"
//   price: string; // e.g., "KSH 10,000"
// }


export interface Property {
  id: number;
  title: string;
  description: string; // e.g., "Quiet gated community with 24/7 security..."
  location: {
    address: string;       // e.g., "Off Isiolo Road, Kilimani"
    neighborhood: string;  // e.g., "Kilimani"
    city: string;          // e.g., "Nairobi"
    coordinates?: {
      lat: number;
      lng: number;
    };
  };
  category: 'apartment' | 'house' | 'land' | 'office' | 'godown';
  subcategory?: 'standalone' | 'maisonette' | 'bungalow' | 'duplex' | 'serviced' | 'bare'; // optional refinement
  bedrooms: number | null;
  bathrooms: number | null;
  sqft: number | null;
  price: number;
  currency: 'KES' | 'USD'; // default to KES
  listedOn: string; // ISO date string, e.g., "2026-01-10"
  images: string[];
  amenities: string[]; // e.g., ["Water", "Security", "Parking", "Gym"]
  furnishing?: 'furnished' | 'semi-furnished' | 'unfurnished';
  parking?: number | 'Available' | 'None'; // e.g., 2 or "Covered"
  leaseTerms?: {
    depositMonths: number;      // e.g., 2
    agencyFeePct?: number;      // e.g., 10 (means 10% of annual rent)
    serviceCharge?: number;     // monthly, in KES
    includesUtilities?: boolean;
  };
  contact: {
    name?: string;              // Agent or owner name
    company?: string;           // Agency name
    phone: string;
    email: string;
    whatsapp: string;
  };
}