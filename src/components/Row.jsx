import React, { useRef, useState } from 'react';
import MovieCard from './MovieCard';

const Row = ({ title, data, onPlay }) => {
    const rowRef = useRef(null);
    const [isMoved, setIsMoved] = useState(false);

    const handleClick = (direction) => {
        setIsMoved(true);
        if (rowRef.current) {
            const { scrollLeft, clientWidth } = rowRef.current;
            const scrollTo = direction === 'left'
                ? scrollLeft - clientWidth / 2
                : scrollLeft + clientWidth / 2;

            rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });

            if (direction === 'left' && scrollTo <= 0) {
                setIsMoved(false);
            }
        }
    };

    if (!data || data.length === 0) return null;

    return (
        <div className="mb-10 lg:mb-14 space-y-4">
            <h2 className="cursor-pointer text-sm font-semibold text-[#e5e5e5] transition duration-200 hover:text-white md:text-xl lg:text-2xl px-4 md:px-12 group/title flex items-center gap-2 whitespace-nowrap">
                {title}
                <span className="text-xs font-bold opacity-0 group-hover/title:opacity-100 transition duration-200 text-[#54b9c5] mt-1 flex items-center">
                    Explore All
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-3 h-3 ml-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </span>
            </h2>

            <div className="group relative">
                {/* Left Arrow */}
                <div
                    className={`absolute top-0 bottom-0 left-0 z-40 w-12 bg-black/50 hover:bg-black/70 flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition duration-300 ${!isMoved && "hidden"}`}
                    onClick={() => handleClick('left')}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-8 h-8 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </div>

                {/* Content Container */}
                <div
                    ref={rowRef}
                    className="flex items-center gap-2 overflow-x-auto scrollbar-hide px-4 md:px-12 py-8 scroll-smooth"
                >
                    {data.map((item) => (
                        <MovieCard key={item.id} data={item} onPlay={onPlay} />
                    ))}
                </div>

                {/* Right Arrow */}
                <div
                    className="absolute top-0 bottom-0 right-0 z-40 w-12 bg-black/50 hover:bg-black/70 flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition duration-300"
                    onClick={() => handleClick('right')}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-8 h-8 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default Row;
