import React from 'react';
import { Link } from 'react-router-dom';

const HeroBanner = ({ era }) => {
    if (!era) return null;

    return (
        <div className="relative h-[70vh] md:h-[85vh] w-full overflow-hidden">
            {/* LAYER 1: Background Image */}
            <div className="absolute inset-0 w-full h-full">
                <img
                    src={era.heroImage}
                    alt={era.title}
                    className="w-full h-full object-cover object-center brightness-75 scale-105"
                    onError={(e) => {
                        e.target.style.display = 'none'; // Hide broken image
                        e.target.parentElement.style.backgroundColor = '#141414'; // Fallback bg
                    }}
                />
            </div>

            {/* LAYER 2: Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent z-[5]"></div>
            <div className="absolute bottom-0 left-0 right-0 h-full bg-gradient-to-t from-black via-black/70 to-transparent z-[5]"></div>

            {/* LAYER 3: Content */}
            <div className="relative z-10 w-full h-full flex flex-col justify-center pl-6 md:pl-20 pb-12 md:pb-0 max-w-2xl space-y-6">
                {/* Animated Title */}
                <h1 className="text-6xl md:text-7xl font-extrabold text-white drop-shadow-lg leading-tight animate-fade-in">
                    {era.title}
                </h1>

                {/* Meta Info */}
                <div className="flex items-center gap-3 text-sm font-semibold text-white/80 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                    <span className="text-green-400">98% Match</span>
                    <span>{era.year}</span>
                    <span className="border border-white/40 px-1 rounded text-xs">HD</span>
                    <span>{era.tags}</span>
                </div>

                {/* Description */}
                <p className="text-lg font-medium text-white/90 max-w-lg drop-shadow-md line-clamp-3 md:line-clamp-none animate-slide-up" style={{ animationDelay: '0.2s' }}>
                    {era.subtitle}
                </p>

                {/* Buttons */}
                <div className="flex items-center gap-4 mt-8 animate-slide-up" style={{ animationDelay: '0.3s' }}>
                    <Link
                        to={`/era/${era.id}`}
                        className="flex items-center gap-2 bg-white text-black px-8 py-2 md:py-3 rounded font-bold hover:bg-gray-200 transition duration-300"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                            <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                        </svg>
                        Play
                    </Link>
                    <button className="flex items-center gap-2 bg-gray-500/70 text-white px-8 py-2 md:py-3 rounded font-bold hover:bg-gray-500/90 transition duration-300 backdrop-blur-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                        </svg>
                        More Info
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HeroBanner;
