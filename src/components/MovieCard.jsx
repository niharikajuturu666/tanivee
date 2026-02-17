import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ data, onPlay }) => {
    const [isHovered, setIsHovered] = useState(false);

    // Simulated delay to prevent scaling on fast scroll/move
    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div
            className="group relative bg-zinc-900 w-[200px] h-[12vh] md:h-[12vw] rounded-md flex-none transition-all duration-300 ease-in-out hover:z-40 hover:scale-110 hover:-translate-y-4"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <img
                src={data.image || data.heroImage}
                alt={data.title}
                className="cursor-pointer object-cover rounded-md w-full h-full"
            />

            {/* Hover overlay content - only visible on hover, contained within the scaled card */}
            <div className={`absolute inset-0 bg-black/60 rounded-md transition-opacity duration-300 flex flex-col justify-end p-2 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>

                {/* Action Buttons */}
                <div className="flex items-center gap-2 mb-2">
                    <div
                        className="cursor-pointer w-8 h-8 bg-white rounded-full flex justify-center items-center transition hover:bg-neutral-300 text-black"
                        onClick={() => onPlay && onPlay(data)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                            <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className="cursor-pointer w-8 h-8 border-2 border-gray-400 rounded-full flex justify-center items-center transition hover:border-white text-gray-400 hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    </div>
                    <div className="cursor-pointer w-8 h-8 border-2 border-gray-400 rounded-full flex justify-center items-center transition hover:border-white text-gray-400 hover:text-white ml-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                    </div>
                </div>

                {/* Metadata */}
                <div>
                    <div className="flex items-center gap-2 text-[10px] md:text-xs">
                        <span className="text-green-400 font-bold">98% Match</span>
                        <span className="border border-white/40 px-1 rounded">13+</span>
                        <span className="text-white">{data.duration || "1h 30m"}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[10px] md:text-xs text-white mt-1">
                        {data.tags && data.tags.split('•').slice(0, 3).map((tag, i) => (
                            <span key={i} className="opacity-80">{tag.trim()}{i < 2 && " •"}</span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;
