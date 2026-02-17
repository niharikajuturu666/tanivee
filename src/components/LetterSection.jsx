import React from 'react';

const LetterSection = ({ letter }) => {
    if (!letter) return null;

    return (
        <div className="bg-[#1a1a1a] p-8 md:p-12 rounded-lg border border-gray-800 shadow-xl">
            <div className="flex justify-between text-sm text-gray-400 mb-8 font-mono tracking-wide">
                <span>FROM: {letter.from}</span>
                <span>TO: {letter.to}</span>
            </div>
            <p className="text-xl md:text-2xl leading-relaxed text-gray-200 whitespace-pre-wrap font-serif italic text-center md:text-left">
                "{letter.content}"
            </p>
        </div>
    );
};

export default LetterSection;
