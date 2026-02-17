import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { profiles } from '../data/content';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    // Only hide navbar on WhoWatching page if needed, or keeping it but checking path
    if (location.pathname === '/') return null;

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const currentProfileId = localStorage.getItem('friendflix_user_profile');
    const currentProfile = profiles.find(p => p.id === currentProfileId) || profiles[0];
    const otherProfiles = profiles.filter(p => p.id !== currentProfileId);

    const handleProfileSwitch = (id) => {
        localStorage.setItem('friendflix_user_profile', id);
        setShowDropdown(false);
        window.location.href = '/browse'; // Force reload to refresh content
    };

    const handleSignOut = () => {
        localStorage.removeItem('friendflix_user_profile');
        navigate('/');
    }


    return (
        <nav
            className={`fixed top-0 left-0 w-full z-[100] transition-colors duration-300 ease-in-out ${isScrolled ? 'bg-netflix-black' : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent'}`}
        >
            <div className="px-4 md:px-12 flex items-center justify-between h-16 md:h-[68px]">
                {/* Left: Logo & Links */}
                <div className="flex items-center gap-8">
                    <Link to="/browse">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                            alt="Netflix"
                            className="h-4 md:h-7 object-contain cursor-pointer"
                        />
                    </Link>

                    <ul className="hidden md:flex items-center gap-5 text-sm font-medium text-gray-200">
                        <li className="text-white font-bold cursor-pointer">Home</li>
                        <li className="hover:text-gray-400 transition cursor-pointer">TV Shows</li>
                        <li className="hover:text-gray-400 transition cursor-pointer">Movies</li>
                        <li className="hover:text-gray-400 transition cursor-pointer">New & Popular</li>
                        <li className="hover:text-gray-400 transition cursor-pointer">My List</li>
                    </ul>
                </div>

                {/* Right: Icons & Profile */}
                <div className="flex items-center gap-5 text-white">
                    <button className="hover:opacity-80 transition">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                    </button>

                    <button className="hover:opacity-80 transition hidden sm:block">
                        <span className="text-sm font-medium">Children</span>
                    </button>

                    <button className="hover:opacity-80 transition">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                        </svg>
                    </button>

                    {/* Profile Dropdown Trigger */}
                    <div
                        className="flex items-center gap-2 cursor-pointer group relative"
                        onMouseEnter={() => setShowDropdown(true)}
                        onMouseLeave={() => setShowDropdown(false)}
                    >
                        <div className="w-8 h-8 rounded overflow-hidden">
                            <img src={currentProfile.image} alt="Profile" className="w-full h-full object-cover" />
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className={`w-3 h-3 transition-transform duration-200 ${showDropdown ? 'rotate-180' : ''}`}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>

                        {/* Dropdown Menu */}
                        {showDropdown && (
                            <div className="absolute top-full right-0 mt-2 w-48 bg-black/95 border border-gray-700 rounded shadow-xl py-2 flex flex-col gap-2">
                                <div className="absolute -top-2 right-4 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-b-8 border-b-gray-100"></div>

                                {otherProfiles.map(profile => (
                                    <div
                                        key={profile.id}
                                        onClick={() => handleProfileSwitch(profile.id)}
                                        className="flex items-center gap-3 px-3 py-2 hover:bg-gray-800 transition cursor-pointer"
                                    >
                                        <img src={profile.image} alt={profile.name} className="w-8 h-8 rounded object-cover" />
                                        <span className="text-sm hover:underline">{profile.name}</span>
                                    </div>
                                ))}

                                <div className="border-t border-gray-700 my-1"></div>
                                <div className="px-3 py-2 hover:bg-gray-800 transition cursor-pointer text-sm hover:underline">
                                    Manage Profiles
                                </div>
                                <div className="px-3 py-2 hover:bg-gray-800 transition cursor-pointer text-sm hover:underline">
                                    Account
                                </div>
                                <div className="px-3 py-2 hover:bg-gray-800 transition cursor-pointer text-sm hover:underline">
                                    Help Center
                                </div>
                                <div className="border-t border-gray-700 my-1"></div>
                                <div
                                    onClick={handleSignOut}
                                    className="px-3 py-2 hover:bg-gray-800 transition cursor-pointer text-sm hover:underline text-center"
                                >
                                    Sign out of Netflix
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
