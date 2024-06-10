// src/components/Banner.jsx
import React from 'react';
import '../index.css';

interface BannerProps {
    variant?: "light" | "dark";
}

const Banner: React.FC<BannerProps> = ({ variant = "light" }) => {
    const isDarkVariant = variant === "dark";

    return (
        <div className={`tw-relative tw-flex tw-items-center tw-justify-center tw-px-4 tw-py-2 tw-overflow-hidden tw-text-center md:tw-px-0 tw-gap-14 tw-max-h-12 md:tw-max-h-10 ${isDarkVariant ? 'tw-text-white tw-bg-black' : ''}`}>
            <div className="tw-absolute tw-z-0 tw-w-screen tw-h-full tw-transform -tw-translate-x-1/2 -tw-translate-y-1/2 tw-top-1/2 tw-left-1/2 tw-blur-xl md:tw-blur-2xl tw-opacity-35 tw-bg-custom-gradient"></div>
            <div className="tw-z-10 tw-flex tw-items-center md:tw-gap-12">
                <p className="tw-flex tw-items-center tw-text-base tw-font-medium tw-leading-6 tw-tracking-wide tw-text-gray-700">
                    <img
                        src="./Flag_of_Palestine.png"
                        alt=""
                        className="tw-w-8 tw-h-5 tw-mr-2 md:tw-mr-5"
                    />
                    <strong className={`tw-mr-2 tw-text-xs tw-font-semibold tw-tracking-wider md:tw-mr-2 tw-text-start md:tw-text-sm tw-max-w-[40vw] ${isDarkVariant ? 'tw-text-white' : 'tw-text-black'}`}>
                        Palestinian Lives Matter
                    </strong>
                    <span className={`tw-hidden tw-mr-2 md:tw-block ${isDarkVariant ? 'tw-text-white' : 'tw-text-gray-700'}`}>-</span>
                    <p className={`tw-hidden tw-text-sm tw-font-medium tw-leading-6 tw-tracking-wide md:tw-block ${isDarkVariant ? 'tw-text-white' : 'tw-text-gray-700'}`}>
                        Showing solidarity and love with Palestinian lives!
                    </p>
                </p>
                <a
                    href="https://www.pcrf.net/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`tw-px-2 tw-py-1 tw-text-xs tw-transition tw-duration-300 tw-transform tw-rounded-full md:tw-text-sm md:tw-px-3 tw-inlinefont-bold tw-animate-pulse hover:tw-scale-105 ${isDarkVariant ? 'tw-bg-white tw-text-black hover:tw-bg-gray-200' : 'tw-text-white tw-bg-red-600 hover:tw-bg-red-700'}`}
                >
                    Donate Now
                </a>
            </div>
        </div>
    );
};

export { Banner };
