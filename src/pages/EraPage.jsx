import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import LetterSection from '../components/LetterSection';
import { getAllFilms } from '../data/content';

const EraPage = () => {
    const { id } = useParams();
    const [film, setFilm] = useState(null);

    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        const allFilms = getAllFilms();
        const foundFilm = allFilms.find(e => e.id === id);

        if (foundFilm) {
            setFilm(foundFilm);
            localStorage.setItem('friendflix_last_watched', id);
        }
    }, [id]);

    useEffect(() => {
        if (selectedImage) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [selectedImage]);

    if (!film) return (
        <div className="min-h-screen flex flex-col items-center justify-center text-white bg-[#141414]">
            <p>Title not found.</p>
            <Link to="/browse" className="mt-4 px-4 py-2 bg-white text-black font-bold rounded">Go Back</Link>
        </div>
    );

    return (
        <div className="min-h-screen bg-[#141414] text-white font-sans">
            <Navbar />

            {/* Hero Section */}
            <div className="relative h-[70vh] w-full">
                <div className="absolute inset-0">
                    <img
                        src={film.heroImage}
                        alt={film.title}
                        className="w-full h-full object-cover object-top opacity-70"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/40 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#141414] via-[#141414]/30 to-transparent" />
                </div>

                <div className="absolute bottom-0 left-0 p-4 md:p-12 lg:p-16 w-full md:w-3/4 lg:w-2/3 space-y-6">
                    <h1 className="text-4xl md:text-6xl font-black drop-shadow-lg leading-tight md:leading-snug normal-case">{film.title}</h1>

                    <div className="flex items-center flex-wrap gap-4 text-sm md:text-base text-gray-300 font-medium">
                        <span className="text-green-400 font-bold">98% Match</span>
                        <span>{film.year}</span>
                        <span className="border border-gray-500 px-2 py-0.5 text-xs rounded uppercase">{film.maturityRating}</span>
                        <span>{film.duration}</span>
                        <span className="border border-white/40 px-1 rounded text-xs">HD</span>
                    </div>

                    <p className="text-base md:text-lg text-white drop-shadow-md leading-relaxed max-w-2xl">
                        {film.tagline}
                    </p>

                    <div className="flex items-center gap-4 pt-2">
                        <button className="flex items-center gap-2 bg-white text-black px-8 py-2 md:py-3 rounded font-bold hover:bg-gray-200 transition">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                            </svg>
                            Play
                        </button>
                        <button className="flex items-center gap-2 bg-gray-600/60 text-white px-8 py-2 md:py-3 rounded font-bold hover:bg-gray-600/40 transition">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                            My List
                        </button>
                    </div>

                    <p className="text-sm text-gray-400 mt-4"><span className="text-gray-200">Genres:</span> {film.tags}</p>
                </div>
            </div>

            {/* Content Sections */}
            <div className="px-4 md:px-16 py-12 space-y-16">

                {/* Director's Note */}
                <div>
                    <div className="flex items-center justify-between border-b border-gray-700 pb-4 mb-8">
                        <h2 className="text-2xl md:text-3xl font-bold">Director's Note</h2>
                        <span className="text-sm text-gray-400 uppercase tracking-widest">{film.letter?.year || film.year}</span>
                    </div>

                    {film.letter && (
                        <LetterSection letter={film.letter} />
                    )}
                </div>

                {/* Memories (Gallery) - Now below and big */}
                <div className="space-y-8">
                    <h2 className="text-2xl md:text-3xl font-bold border-b border-gray-700 pb-4">Memories</h2>

                    {film.gallery && film.gallery.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {film.gallery.map((img, idx) => (
                                <div
                                    key={idx}
                                    className="aspect-video relative group overflow-hidden rounded-lg cursor-pointer shadow-lg"
                                    onClick={() => setSelectedImage(img)}
                                >
                                    <img
                                        src={img}
                                        alt={`Memory ${idx}`}
                                        className="w-full h-full object-cover transition duration-500 group-hover:scale-110 group-hover:brightness-110"
                                        onError={(e) => { e.currentTarget.closest('div').style.display = 'none'; }}
                                    />
                                    {/* Play icon overlay on hover */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 bg-black/40 backdrop-blur-[2px]">
                                        <div className="rounded-full border-2 border-white p-4">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-white">
                                                <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-gray-500 text-lg italic py-12 text-center border border-dashed border-gray-800 rounded-lg">
                            No visuals available for this memory yet.
                        </div>
                    )}
                </div>

            </div>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        className="absolute top-4 right-4 text-white/50 hover:text-white transition p-2"
                        onClick={() => setSelectedImage(null)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <img
                        src={selectedImage}
                        alt="Memory Fullscreen"
                        className="max-h-[90vh] max-w-[90vw] object-contain rounded-md shadow-2xl scale-100 animate-scale-in"
                        onClick={(e) => e.stopPropagation()} // Prevent close on image click
                    />
                </div>
            )}
        </div>
    );
};

export default EraPage;
