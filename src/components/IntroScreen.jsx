import React, { useEffect, useState, useRef } from 'react';

const IntroScreen = ({ onComplete }) => {
    const [show, setShow] = useState(true);
    const audioRef = useRef(null);

    useEffect(() => {
        // Check session storage to only play once per session
        const hasPlayed = sessionStorage.getItem('friendflix_intro_played');

        if (hasPlayed) {
            onComplete();
            return;
        }

        // Play intro
        const timer = setTimeout(() => {
            setShow(false);
            setTimeout(onComplete, 500); // Allow fade out
            sessionStorage.setItem('friendflix_intro_played', 'true');
        }, 4000);

        // Play audio logic
        if (audioRef.current) {
            audioRef.current.volume = 0.5;
            audioRef.current.play().catch(e => console.log("Audio autoplay blocked", e));
        }

        return () => clearTimeout(timer);
    }, [onComplete]);

    if (!show) return null;

    return (
        <div className={`fixed inset-0 z-[100] bg-black flex items-center justify-center transition-opacity duration-1000 ${show ? 'opacity-100' : 'opacity-0'}`}>
            <audio ref={audioRef} src="/audio/intro.mp3" />

            <div className="relative animate-intro-zoom origin-center">
                <div className="netflix-n h-40 w-24 md:h-64 md:w-40 relative">
                    {/* Left Leg */}
                    <div className="absolute left-0 top-0 w-[20%] h-full bg-[#E50914] shadow-[0_0_20px_rgba(0,0,0,0.5)] z-10"></div>
                    {/* Right Leg */}
                    <div className="absolute right-0 top-0 w-[20%] h-full bg-[#E50914] shadow-[0_0_20px_rgba(0,0,0,0.5)] z-10"></div>
                    {/* Diagonal */}
                    <div className="absolute left-0 top-0 w-[20%] h-full bg-[#B20710] shadow-[0_0_30px_rgba(0,0,0,0.5)] z-20 transform -skew-x-[20deg] origin-top-left translate-x-[90%] scale-y-[1.05]"></div>
                </div>
            </div>
        </div>
    );
};

export default IntroScreen;
