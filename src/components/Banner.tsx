import React from 'react';
import '../index.css';

interface BannerProps {
    variant: 'light' | 'dark';
}

const Banner: React.FC<BannerProps> = ({ variant }) => {
    const containerClasses = variant === 'dark' ? 'bg-gray-800 text-white' : 'bg-yellow-300 text-gray-900';
    const donateClasses = variant === 'dark' ? 'text-red-400' : 'text-red-600';

    return (
        <div className={`container p-4 text-center relative flex items-center justify-center gap-6 overflow-hidden ${containerClasses}`}>
            <div className={`bg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 filter blur-xl w-full h-full opacity-30 z-0 bg-gradient-to-r from-red-500 to-green-500`}></div>
            <div className={`content flex items-center gap-3 z-10`}>
                <p className="text-lg font-medium flex items-center">
                    <img src="./Flag_of_Palestine.png" alt="" className="flag w-8 h-5 mx-2" />
                    <strong className="mx-2">Palestinian Lives Matter</strong>
                    <span className="mx-2">- Showing solidarity and love with Palestinian lives!</span>
                </p>
                <a href="https://www.pcrf.net/" target="_blank" rel="noopener noreferrer" className={`donate ${donateClasses} underline transition duration-300 transform hover:scale-105`}>
                    Donate Now <span className="ml-2">&rarr;</span>
                </a>
            </div>
        </div>
    );
};

export { Banner };
