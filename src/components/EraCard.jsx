import React from 'react';
import { Link } from 'react-router-dom';

const EraCard = ({ era }) => {
    return (
        <Link to={`/era/${era.id}`} className="block flex-none w-64 md:w-80 aspect-video relative group transition duration-300 hover:scale-105 hover:z-10">
            <div className="w-full h-full rounded-md overflow-hidden bg-gray-800 shadow-lg relative">
                <img
                    src={era.heroImage}
                    alt={era.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition duration-300"
                    onError={(e) => {
                        // Placeholder color generator based on ID string
                        e.target.style.display = 'none';
                        e.target.parentNode.style.backgroundColor = '#333';
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-4">
                    <h3 className="text-white font-bold text-lg">{era.title}</h3>
                    <p className="text-xs text-green-400 font-semibold">98% Match</p>
                    <p className="text-xs text-gray-300 mt-1">{era.tags}</p>
                </div>
            </div>
        </Link>
    );
};

export default EraCard;
