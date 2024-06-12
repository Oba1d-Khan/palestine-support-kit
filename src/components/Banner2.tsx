import React from "react";
const Banner2 = () => {
    return (
        <div className="relative flex items-center justify-center px-4 py-1 overflow-hidden text-center md:py-[0.18rem] md:px-0 gap-14 max-h-9 md:max-h-10 ">
            <div className="absolute inset-0 z-0 w-full h-full bg-center md:bg-cover bg-[url('/src/assets/illustration.png')] blur-[1px] opacity-30"></div>

            <div className="z-10 flex items-center md:px-2 bg-gray-100 rounded-full md:gap-12 backdrop-blur-lg">
                <p className="flex items-center text-base font-medium leading-6 tracking-wide text-gray-700">
                    <a href="" className="px-4 cursor-default">
                        <img
                            src="https://cdn3.emoji.gg/emojis/1893-palestine-flag.png"
                            width="32px"
                            height="32px"
                            alt="Palestine_Flag"
                        />
                    </a>
                    <strong className="mr-2 text-xs font-bold tracking-wider text-black md:mr-4 text-start md:text-sm max-w-[40vw]">
                        We stand with Palestine!
                    </strong>
                </p>
                <a
                    href="https://www.pcrf.net/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex gap-2 px-2 py-1 text-[0.6rem] font-medium text-red-600 transition duration-300 transform rounded-full md:text-sm md:px-3 hover:scale-105 hover:bg-red-100 "
                >
                    <div className="">
                        <div className="relative inline-flex">
                            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                            <div className="absolute top-0 left-0 w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
                            <div className="absolute top-0 left-0 w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                        </div>
                    </div>
                    Donate Now
                </a>
            </div>
        </div>
    );
};

export { Banner2 };
