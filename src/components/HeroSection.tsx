
import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
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



const HeroSection = () => {
    const images = [hero1, hero2, hero3, hero4, hero5, hero6, hero7, hero8, hero9, hero10];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [nextIndex, setNextIndex] = useState(1);
    const [isFading, setIsFading] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsFading(true);
            // After fade-out starts, switch index after a short delay
            setTimeout(() => {
                setCurrentIndex((prev) => (prev + 1) % images.length);
                setNextIndex((prev) => (prev + 1) % images.length);
                setIsFading(false);
            }, 500); // Half of fade duration
        }, 5000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <section className="relative h-[500px] flex items-center justify-center text-white text-center px-4 overflow-hidden">
            {/* Current image (base layer) */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `url(${images[currentIndex]})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    // filter: 'blur(1px)',
                    transform: 'scale(1.1)',
                }}
            ></div>

            {/* Next image (overlay that fades in) */}
            <div
                className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${isFading ? 'opacity-100' : 'opacity-0'
                    }`}
                style={{
                    backgroundImage: `url(${images[nextIndex]})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    // filter: 'blur(px)',
                    transform: 'scale(1.1)',
                }}
            ></div>

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-opacity-30 z-10"></div>

            {/* Content */}
            <div className="relative z-20 max-w-3xl">
                <h1 className="text-6xl md:text-6xl font-bold mb-6 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]">
                    Discover your dream home in Kenya.
                </h1>
                <SearchBar />
            </div>
        </section>
    );
};

export default HeroSection;