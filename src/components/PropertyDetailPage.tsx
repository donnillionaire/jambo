// PropertyDetailPage.tsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
// import { Property } from '../types';

import { mockProperties } from './SearchResultsPage'; // Adjust path if needed
import ImageGallery from './ImageGallery';

// Reusable icons (same as in SearchResultsPage)
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

const PropertyDetailPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    // Find property by ID (ensure id is valid number)
    const propertyId = id ? parseInt(id, 10) : NaN;
    const property = mockProperties.find((p) => p.id === propertyId);

    if (!property) {
        return (
            <div className="max-w-4xl mx-auto px-4 py-8 text-center">
                <h2 className="text-xl text-gray-700">Property not found</h2>
                <button
                    onClick={() => navigate(-1)}
                    className="mt-4 text-green-600 hover:underline"
                >
                    ← Go back
                </button>
            </div>
        );
    }

    // Clean WhatsApp number: remove non-digits and ensure it starts with 254
    const cleanWhatsAppNumber = (raw: string): string => {
        const digits = raw.replace(/\D/g, '');
        if (digits.startsWith('254')) return digits;
        if (digits.startsWith('0')) return '254' + digits.slice(1);
        if (digits.length === 9) return '254' + digits; // e.g., 700000000 → 254700000000
        return digits;
    };

    const whatsappUrl = `https://wa.me/${cleanWhatsAppNumber(property.contact.whatsapp)}`;

    return (
        <div className="max-w-4xl mx-auto px-4 py-6">
            {/* Breadcrumb */}

            {/* Main Image + Thumbnails */}
            <ImageGallery images={property.images} />

            {/* Title & Price */}
            <h1 className="text-2xl font-bold">{property.title}</h1>
            <div>📍 {property.location.address}, {property.location.neighborhood}</div>
            <div className="text-red-600 text-xl">KES {property.price.toLocaleString()} <span className="text-gray-500 text-sm">/ month</span></div>

            {/* Quick Facts Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4 text-sm">
                <div><BedIcon /> {property.bedrooms} bed</div>
                <div><BathIcon /> {property.bathrooms} bath</div>
                <div><SqftIcon /> {property.sqft} sqft</div>
                <div>📅 Listed: {new Date(property.listedOn).toLocaleDateString()}</div>
            </div>

            {/* Description */}
            <section className="mt-6">
                <h2 className="font-semibold mb-2">Description</h2>
                <p className="text-gray-700">{property.description}</p>
            </section>

            {/* Amenities */}
            {property.amenities.length > 0 && (
                <section className="mt-6">
                    <h2 className="font-semibold mb-2">Amenities</h2>
                    <div className="flex flex-wrap gap-2">
                        {property.amenities.map((amenity, i) => (
                            <span key={i} className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">{amenity}</span>
                        ))}
                    </div>
                </section>
            )}

            {/* Lease Terms (if rental) */}
            {property.leaseTerms && (
                <section className="mt-6 p-4 bg-gray-50 rounded">
                    <h2 className="font-semibold mb-2">Rental Terms</h2>
                    <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                        <li>Deposit: {property.leaseTerms.depositMonths} months’ rent</li>
                        {property.leaseTerms.agencyFeePct && (
                            <li>Agency fee: {property.leaseTerms.agencyFeePct}% of annual rent</li>
                        )}
                        {property.leaseTerms.serviceCharge && (
                            <li>Service charge: KES {property.leaseTerms.serviceCharge.toLocaleString()} / month</li>
                        )}
                        <li>Utilities: {property.leaseTerms.includesUtilities ? 'Included' : 'Not included'}</li>
                    </ul>
                </section>
            )}

            {/* Contact Agent */}
            <section className="mt-8">
                <h2 className="font-semibold mb-3">Contact {property.contact.name || 'Owner'}</h2>
                {property.contact.company && <p className="text-gray-600 text-sm">{property.contact.company}</p>}
                {/* Call / WhatsApp / Email buttons (with stopPropagation if needed) */}
            </section>

            {/* Optional: View on Map button */}
            <a
                href={`https://maps.google.com/?q=${encodeURIComponent(property.location.address + ', ' + property.location.city)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-green-600 hover:underline"
            >
                🗺️ View on Google Maps
            </a>
        </div>
    );
};

export default PropertyDetailPage;