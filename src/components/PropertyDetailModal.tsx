// PropertyDetailModal.tsx
import React from 'react';
// import { Property } from './SearchResultsPage'; // adjust path
import ImageGallery from './ImageGallery'; // your new component
import type { Property } from '../types';

interface PropertyDetailModalProps {
    property: Property | null;
    isOpen: boolean;
    onClose: () => void;
}

const PropertyDetailModal: React.FC<PropertyDetailModalProps> = ({
    property,
    isOpen,
    onClose,
}) => {
    if (!isOpen || !property) return null;

    const cleanWhatsAppNumber = (raw: string): string => {
        return raw.replace(/\D/g, '');
    };

    return (
        <div
            className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-16 sm:p-6 bg-black/40"

            // className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-16 sm:p-6"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-labelledby="property-detail-title"
        >
            {/* Modal content */}
            <div
                className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()} // prevent closing on inner click
            >
                {/* Close button */}
                <div className="sticky top-0 bg-white py-3 px-4 border-b flex justify-end z-10">
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700"
                        aria-label="Close"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <div className="p-4 sm:p-6">
                    <h1 id="property-detail-title" className="text-2xl font-bold text-gray-900">
                        {property.title}
                    </h1>
                    <p className="text-gray-600 mt-1">
                        📍 {property.location.address}, {property.location.neighborhood}
                    </p>

                    <div className="mt-4 text-red-600 text-xl font-semibold">
                        KES {property.price.toLocaleString()}{' '}
                        <span className="text-gray-500 text-sm">/ month</span>
                    </div>

                    {/* Image Gallery */}
                    <ImageGallery images={property.images} />

                    {/* Description */}
                    <section className="mt-4">
                        <h2 className="font-semibold text-gray-800">Description</h2>
                        <p className="text-gray-700 mt-1">{property.description}</p>
                    </section>

                    {/* Key Details */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4 text-sm">
                        {property.bedrooms !== null && (
                            <div className="flex items-center gap-1">
                                <BedIcon /> {property.bedrooms} bed
                            </div>
                        )}
                        {property.bathrooms !== null && (
                            <div className="flex items-center gap-1">
                                <BathIcon /> {property.bathrooms} bath
                            </div>
                        )}
                        {property.sqft !== null && (
                            <div className="flex items-center gap-1">
                                <SqftIcon /> {property.sqft} sqft
                            </div>
                        )}
                        <div>📅 Listed: {new Date(property.listedOn).toLocaleDateString()}</div>
                    </div>

                    {/* Amenities */}
                    {property.amenities?.length > 0 && (
                        <section className="mt-4">
                            <h3 className="font-medium text-gray-800">Amenities</h3>
                            <div className="flex flex-wrap gap-2 mt-2">
                                {property.amenities.map((amenity, i) => (
                                    <span
                                        key={i}
                                        className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded"
                                    >
                                        {amenity}
                                    </span>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Contact Section */}
                    <section className="mt-6 pt-4 border-t">
                        <h3 className="font-semibold mb-2">
                            Contact {property.contact.name || 'Owner'}
                        </h3>
                        {property.contact.company && (
                            <p className="text-sm text-gray-600">{property.contact.company}</p>
                        )}
                        <div className="flex flex-wrap gap-2 mt-3">
                            <button
                                onClick={() =>
                                    window.location.href = `tel:${property.contact.phone}`
                                }
                                className="px-3 py-1.5 border border-gray-300 rounded text-sm hover:bg-gray-50"
                            >
                                📞 Call
                            </button>
                            <button
                                onClick={() =>
                                    window.open(
                                        `https://wa.me/${cleanWhatsAppNumber(property.contact.whatsapp)}`,
                                        '_blank'
                                    )
                                }
                                className="px-3 py-1.5 border border-gray-300 rounded text-sm hover:bg-gray-50"
                            >
                                💬 WhatsApp
                            </button>
                            <button
                                onClick={() =>
                                    window.location.href = `mailto:${property.contact.email}`
                                }
                                className="px-3 py-1.5 border border-gray-300 rounded text-sm hover:bg-gray-50"
                            >
                                ✉️ Email
                            </button>
                        </div>
                    </section>

                    {/* View on Map */}
                    <a
                        href={`https://maps.google.com/?q=${encodeURIComponent(
                            `${property.location.address}, ${property.location.city}`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-4 text-green-600 hover:underline text-sm"
                    >
                        🗺️ View on Google Maps
                    </a>
                </div>
            </div>
        </div>
    );
};

// Reuse icons (or import them if you extract to a file)
const BedIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18v6H3v-6z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 10v6m0 0v6m0-6h6m-6 0H3" />
    </svg>
);

const BathIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-2m-2 0h-2M7 21h2m-2 0h-2M7 3h2m-2 0H5M5 21h2" />
    </svg>
);

const SqftIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 14h.01M18 14h.01M15 11h3M12 11h.01M9 11h.01M7 21h10v-2a3 3 0 00-5.356-1.857M7 21h10v-2a3 3 0 00-5.356-1.857M7 21h10v-2a3 3 0 00-5.356-1.857M14 5H9M7 5h2" />
    </svg>
);

export default PropertyDetailModal;