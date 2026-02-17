import React from 'react';
import { Link } from 'react-router-dom';

const ProfileCard = ({ name, image }) => {
    return (
        <Link to="/browse" className="group flex flex-col items-center gap-3 w-32 md:w-44">
            <div className="w-24 h-24 md:w-40 md:h-40 rounded-md overflow-hidden border-2 border-transparent group-hover:border-white transition duration-200">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                        e.target.src = 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'; // Fallback
                    }}
                />
            </div>
            <span className="text-gray-400 group-hover:text-white transition duration-200 text-sm md:text-lg text-center">
                {name}
            </span>
        </Link>
    );
};

export default ProfileCard;
