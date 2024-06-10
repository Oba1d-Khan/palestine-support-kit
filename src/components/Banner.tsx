import React from "react";
import "../index.css";

interface BannerProps {
    variant?: "light" | "dark";
}

const Banner: React.FC<BannerProps> = ({ variant = "light" }) => {
    const isDarkVariant = variant === "dark";

    return (
        <div className={`relative flex items-center justify-center px-4 py-2 overflow-hidden text-center md:px-0 gap-14 max-h-12 md:max-h-10 ${isDarkVariant ? 'text-white bg-black' : ''}`}>
            <div className="absolute z-0 w-screen h-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 blur-xl md:blur-2xl opacity-35 bg-custom-gradient"></div>
            <div className="z-10 flex items-center md:gap-12">
                <p className="flex items-center text-base font-medium leading-6 tracking-wide text-gray-700">
                    <img
                        src="./Flag_of_Palestine.png"
                        alt=""
                        className="w-8 h-5 mr-2 md:mr-5"
                    />
                    <strong className={`mr-2 text-xs font-semibold tracking-wider md:mr-2 text-start md:text-sm max-w-[40vw] ${isDarkVariant ? 'text-white' : 'text-black'}`}>
                        Palestinian Lives Matter
                    </strong>
                    <span className={`hidden mr-2 md:block ${isDarkVariant ? 'text-white' : 'text-gray-700'}`}>-</span>
                    <p className={`hidden text-sm font-medium leading-6 tracking-wide md:block ${isDarkVariant ? 'text-white' : 'text-gray-700'}`}>
                        Showing solidarity and love with Palestinian lives!
                    </p>
                </p>
                <a
                    href="https://www.pcrf.net/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-2 py-1 text-xs transition duration-300 transform rounded-full md:text-sm md:px-3 inlinefont-bold animate-pulse hover:scale-105 ${isDarkVariant ? 'bg-white text-black hover:bg-gray-200' : 'text-white bg-red-600 hover:bg-red-700'}`}
                >
                    Donate Now
                </a>
            </div>
        </div>
    );
};

export { Banner };
