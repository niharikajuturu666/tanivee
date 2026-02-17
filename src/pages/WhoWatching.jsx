import React from 'react';
import { useNavigate } from 'react-router-dom';
import { profiles } from '../data/content';

const WhoWatching = () => {
    const navigate = useNavigate();

    const handleProfileClick = (profileId) => {
        localStorage.setItem('friendflix_user_profile', profileId);
        navigate('/browse');
    };

    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#141414] animate-fade-in">
            <h1 className="text-3xl md:text-5xl font-normal text-white mb-8 md:mb-12 text-center tracking-wide">Who's watching?</h1>

            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                {profiles.map(profile => (
                    <div
                        key={profile.id}
                        onClick={() => handleProfileClick(profile.id)}
                        className="group flex flex-col items-center gap-3 w-24 md:w-40 cursor-pointer"
                    >
                        <div className="w-24 h-24 md:w-40 md:h-40 rounded-md overflow-hidden border-2 border-transparent group-hover:border-white transition duration-200">
                            <img
                                src={profile.image}
                                alt={profile.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <span className="text-gray-400 group-hover:text-white transition duration-200 text-xs md:text-lg lg:text-xl text-center">
                            {profile.name}
                        </span>
                    </div>
                ))}

                {/* Add Profile Placeholder */}
                <div className="group flex flex-col items-center gap-3 w-24 md:w-40 cursor-pointer">
                    <div className="w-24 h-24 md:w-40 md:h-40 flex items-center justify-center rounded-md bg-transparent border-2 border-transparent group-hover:border-white transition duration-200">
                        <div className="w-[80%] h-[80%] rounded-full bg-gray-600 group-hover:bg-white flex items-center justify-center transition duration-200">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-10 h-10 md:w-16 md:h-16 text-[#141414]">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                        </div>
                    </div>
                    <span className="text-gray-400 group-hover:text-white transition duration-200 text-xs md:text-lg lg:text-xl text-center">
                        Add Profile
                    </span>
                </div>
            </div>

            <button className="mt-16 border border-gray-500 text-gray-400 px-6 py-2 uppercase tracking-widest text-sm md:text-lg hover:border-white hover:text-white transition duration-200">
                Manage Profiles
            </button>
        </div>
    );
};

export default WhoWatching;
