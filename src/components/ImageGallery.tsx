// ImageGallery.tsx
import React, { useState, useEffect } from 'react';

interface ImageGalleryProps {
    images: string[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Handle keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (images.length <= 1) return;
            if (e.key === 'ArrowRight') {
                setCurrentIndex((prev) => (prev + 1) % images.length);
            } else if (e.key === 'ArrowLeft') {
                setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [images.length]);

    const goToPrev = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const goToNext = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const goToImage = (index: number) => {
        setCurrentIndex(index);
    };

    if (!images || images.length === 0) {
        return (
            <div className="w-full h-96 bg-gray-100 flex items-center justify-center rounded-lg">
                <span className="text-gray-500">No images available</span>
            </div>
        );
    }

    return (
        <div className="mb-6">
            {/* Main Image */}
            <div className="relative w-full h-96 rounded-lg overflow-hidden bg-gray-100">
                <img
                    src={images[currentIndex]}
                    alt={`Property view ${currentIndex + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                />

                {/* Navigation Arrows (only show if >1 image) */}
                {images.length > 1 && (
                    <>
                        <button
                            onClick={goToPrev}
                            aria-label="Previous image"
                            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-40 text-white p-2 rounded-full hover:bg-opacity-60 focus:outline-none"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            onClick={goToNext}
                            aria-label="Next image"
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-40 text-white p-2 rounded-full hover:bg-opacity-60 focus:outline-none"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>

                        {/* Indicator Dots */}
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1">
                            {images.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToImage(index)}
                                    aria-label={`Go to image ${index + 1}`}
                                    className={`h-2 w-2 rounded-full transition-colors ${
                                        index === currentIndex ? 'bg-white' : 'bg-gray-300'
                                    }`}
                                />
                            ))}
                        </div>
                    </>
                )}
            </div>

            {/* Thumbnails (only if >1 image) */}
            {images.length > 1 && (
                <div className="mt-3 flex space-x-2 overflow-x-auto pb-1 hide-scrollbar">
                    {images.map((src, index) => (
                        <button
                            key={index}
                            onClick={() => goToImage(index)}
                            aria-label={`Thumbnail ${index + 1}`}
                            className={`flex-shrink-0 w-16 h-16 rounded border-2 ${
                                index === currentIndex ? 'border-green-500' : 'border-transparent'
                            }`}
                        >
                            <img
                                src={src}
                                alt={`Thumbnail ${index + 1}`}
                                className="w-full h-full object-cover rounded"
                                loading="lazy"
                            />
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ImageGallery;