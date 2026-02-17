import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const TransitionWrapper = ({ children }) => {
    const location = useLocation();
    const [displayLocation, setDisplayLocation] = useState(location);
    const [transitionStage, setTransitionStage] = useState('fadeIn');

    useEffect(() => {
        if (location !== displayLocation) {
            setTransitionStage('fadeOut');
        }
    }, [location, displayLocation]);

    const onAnimationEnd = () => {
        if (transitionStage === 'fadeOut') {
            setTransitionStage('fadeIn');
            setDisplayLocation(location);
        }
    };

    return (
        <div
            className={`transition-opacity duration-500 ease-in-out ${transitionStage === 'fadeIn' ? 'opacity-100' : 'opacity-0'}`}
            onTransitionEnd={onAnimationEnd}
        >
            {React.cloneElement(children, { location: displayLocation })}
        </div>
    );
};

export default TransitionWrapper;
