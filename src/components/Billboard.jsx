import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Billboard = ({ era }) => {
    const [isMuted, setIsMuted] = useState(true);

    // Simulate video auto-play behavior
    useEffect(() => {
        const timer = setTimeout(() => {
            // Ideally this would trigger video play
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    if (!era) return null;

    return (
        <div className="relative h-[80vh] md:h-[95vh] w-full overflow-hidden">
            {/* Background Layer - Simulating Video with slow zoom */}
            <div className="absolute inset-0 w-full h-full select-none">
                <img
                    src={era.heroImage}
                    alt={era.title}
                    className="w-full h-full object-cover object-center animate-scale-up brightness-[0.7]"
                />
            </div>

            {/* Vignettes for text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent z-[1] w-2/3"></div>
            <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-[#141414] to-transparent z-[1]"></div>

            {/* Content Layer */}
            <div className="absolute top-[30%] md:top-[25%] left-4 md:left-12 z-10 w-full md:w-[45%] lg:w-[40%] flex flex-col gap-4">
                {/* Title */}
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white drop-shadow-lg leading-[0.9] md:leading-[0.9] tracking-tighter animate-fade-in-slow normal-case">
                    {era.title}
                </h1>

                {/* Info Metadata */}
                <div className="flex items-center gap-4 text-white/90 text-sm md:text-base font-bold animate-fade-in" style={{ animationDelay: '0.5s' }}>
                    <span className="text-green-400 font-black">98% Match</span>
                    <span className="text-gray-300">{era.year}</span>
                    <span className="border border-gray-400 px-1.5 py-0.5 rounded text-[10px] md:text-xs text-gray-200">HD</span>
                </div>

                {/* Description */}
                <p className="text-white text-base md:text-lg lg:text-xl font-medium drop-shadow-md line-clamp-3 w-[90%] md:w-full animate-fade-in" style={{ animationDelay: '0.8s' }}>
                    {era.tagline || era.subtitle}
                </p>

                {/* Actions */}
                <div className="flex items-center gap-4 mt-4 animate-fade-in" style={{ animationDelay: '1s' }}>
                    <Link
                        to={`/era/${era.id}`}
                        className="flex items-center gap-2 bg-white text-black px-6 md:px-8 py-2 md:py-2.5 rounded hover:bg-white/80 transition font-bold text-base md:text-xl"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 md:w-8 md:h-8">
                            <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                        </svg>
                        Play
                    </Link>
                    <Link
                        to={`/era/${era.id}`}
                        className="flex items-center gap-2 bg-gray-500/70 text-white px-6 md:px-8 py-2 md:py-2.5 rounded hover:bg-gray-500/50 transition font-bold text-base md:text-xl backdrop-blur-sm"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 md:w-8 md:h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                        </svg>
                        More Info
                    </Link>
                </div>
            </div>

            {/* Mute/Age Control Layer */}
            <div className="absolute right-0 bottom-[30%] flex items-center gap-4 z-20">
                <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="border border-white/50 rounded-full p-2 hover:bg-white/10 transition backdrop-blur-sm group"
                >
                    {isMuted ? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
                        </svg>
                    )}
                </button>
                <div className="bg-gray-500/60 border-l-2 border-white pl-2 pr-4 py-1 flex items-center backdrop-blur-sm">
                    <span className="text-white text-sm font-semibold">13+</span>
                </div>
            </div>
        </div>
    );
};

export default Billboard;
