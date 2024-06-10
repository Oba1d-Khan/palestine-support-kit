import React from 'react'
import "../index.css";

const Banner2 = () => {
    return (
        <div className="relative flex items-center justify-center px-4 py-1 overflow-hidden text-center md:py-1 md:px-0 gap-14 max-h-12 md:max-h-10">
            <div
                className="absolute inset-0 z-0 w-full h-full bg-center md:scale-105 md:bg-cover opacity-35 blur-sm contrast-500"
                style={{ backgroundImage: "url('./keffiyeh.jpg')" }}
            ></div>
            <div className="z-10 flex items-center px-2 bg-gray-100 rounded-full md:gap-12 backdrop-blur-lg">
                <p className="flex items-center text-base font-medium leading-6 tracking-wide text-gray-700">
                    <img
                        src="./Flag_of_Palestine.png"
                        alt=""
                        className="w-8 h-5 mr-2 md:mr-5"
                    />
                    <strong className="mr-2 text-xs font-bold tracking-wider text-black md:mr-4 text-start md:text-sm max-w-[40vw]">
                        We stand with Palestine!
                    </strong>

                </p>

                <a
                    href="https://www.pcrf.net/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex gap-2 px-2 py-1 text-xs font-medium text-red-600 transition duration-300 transform rounded-full md:text-sm md:px-3 hover:scale-105 hover:bg-red-100 "
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
        </div>)
}

export { Banner2 }