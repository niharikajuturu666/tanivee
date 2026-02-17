import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Billboard from '../components/Billboard';
import Row from '../components/Row';
import Lightbox from '../components/Lightbox';
import { films, profiles, getFilmsForProfile, getTrendingFilms } from '../data/content';

const Browse = () => {
    const navigate = useNavigate();
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [selectedMovie, setSelectedMovie] = useState(null);

    const handlePlay = (movie) => {
        setSelectedMovie(movie);
    };

    const closeLightbox = () => {
        setSelectedMovie(null);
    };

    useEffect(() => {
        const profileId = localStorage.getItem('friendflix_user_profile');
        if (!profileId) {
            navigate('/');
            return;
        }

        const currentProfile = profiles.find(p => p.id === profileId);
        if (currentProfile) {
            setProfile(currentProfile);
        } else {
            navigate('/');
        }
        setLoading(false);
    }, [navigate]);

    if (loading || !profile) return <div className="bg-[#141414] min-h-screen"></div>;

    // Content Strategies based on Profile
    const profileFilms = getFilmsForProfile(profile.id);
    const trendingFilms = getTrendingFilms();

    // Determine Billboard Content (Feature a key memory or a trending film)
    let billboardFilm = profileFilms[0] || trendingFilms[0];

    // Try to find a specific highlight if possible, e.g., "The First Late Night Call" for 1mile
    if (profile.id === '1mile') {
        const highlight = profileFilms.find(f => f.title.includes("Late Night"));
        if (highlight) billboardFilm = highlight;
    }

    // Other rows strategies
    const otherProfiles = profiles.filter(p => p.id !== profile.id);

    return (
        <div className="bg-[#141414] min-h-screen overflow-x-hidden">
            <Navbar />
            <Billboard era={billboardFilm} />

            <div className="pb-40 relative z-20 pl-4 md:pl-16 -mt-6 md:-mt-16 lg:-mt-24 space-y-8 md:space-y-16">

                {/* Primary Row: Specific to this Profile */}
                {profileFilms.length > 0 && (
                    <Row title={`Top Picks for ${profile.name}`} data={profileFilms} onPlay={handlePlay} />
                )}

                {/* Secondary Row: Trending / Global */}
                <Row title="Trending Now" data={trendingFilms} onPlay={handlePlay} />

                {/* Cross-Promotion Rows */}
                {otherProfiles.map(p => {
                    const pFilms = getFilmsForProfile(p.id);
                    if (pFilms.length === 0) return null;
                    return (
                        <Row
                            key={p.id}
                            title={`Because you watched ${p.name.replace(' Away', '')}`}
                            data={pFilms}
                            onPlay={handlePlay}
                        />
                    );
                })}

                {/* My List (Mock) */}
                <Row title="My List" data={[trendingFilms[0], profileFilms[1]].filter(Boolean)} onPlay={handlePlay} />
            </div>

            {/* Lightbox for "Play" on small cards */}
            {selectedMovie && (
                <Lightbox
                    image={selectedMovie.image || selectedMovie.heroImage}
                    onClose={closeLightbox}
                />
            )}
        </div>
    );
};

export default Browse;
