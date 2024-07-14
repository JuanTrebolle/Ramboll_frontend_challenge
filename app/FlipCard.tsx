'use client';
import React, { useState } from 'react';

interface FlipCardProps {
    image: string;
    description: string;
}

const FlipCard: React.FC<FlipCardProps> = ({ image, description }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped); // Directly set the opposite value
        };

    return (
        <div className="flex min-h-screen items-center justify-center">
            <div
                className="h-96 w-80 [perspective:1000px]"
                onClick={handleClick}
            >
                <div className={`relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] ${isFlipped ? 'transform rotate-y-180'  : ''}`} >
                    <div className="absolute inset-0 [backface-visibility: hidden]">
                        <img className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" src={image} alt={image}/>
                    </div>
                    <div className={`absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden] ${isFlipped ? 'rotate-y-0 [backface-visibilite: hidden]' : 'transform rotate-y-180'}`}>
                        <div className="flex min-h-full flex-col items-center justify-center">
                            <p className="text-lg">{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FlipCard;