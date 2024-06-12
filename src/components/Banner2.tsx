// src/components/Banner2.jsx
import React from 'react';
import '../index.css';

const Banner2 = () => {
    return (
        <div className="bg-white tw-relative tw-flex tw-items-center tw-justify-center tw-px-4 tw-py-1 tw-overflow-hidden tw-text-center md:tw-py-1 md:tw-px-0 tw-gap-14 tw-max-h-12 md:tw-tw-bg-white">
            {/* <div
                className="tw-absolute tw-inset-0 tw-z-0 tw-w-full tw-h-full tw-bg-center md:tw-scale-105 md:tw-bg-cover tw-opacity-35 tw-blur-sm tw-contrast-500"
                style={{ backgroundImage: "url('./keffiyeh.jpg')" }}
            ></div> */}
            <div className="tw-z-10 tw-flex tw-items-center tw-px-2 tw-bg-gray-100 tw-rounded-full md:tw-gap-12 tw-backdrop-blur-lg">
                <p className="tw-flex tw-items-center tw-text-base tw-font-medium tw-leading-6 tw-tracking-wide tw-text-gray-700">
                    <a href="https://emoji.gg/emoji/1893-palestine-flag" >
                        <img
                            src="https://cdn3.emoji.gg/emojis/1893-palestine-flag.png"
                            width="32px"
                            height="32px"
                            alt="Palestine_Flag"
                        />
                    </a>
                    <strong className="tw-mr-2 tw-text-xs tw-font-bold tw-tracking-wider tw-text-black md:tw-mr-4 tw-text-start md:tw-text-sm tw-max-w-[40vw]">
                        We stand with Palestine!
                    </strong>
                </p>
                <a
                    href="https://www.pcrf.net/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tw-flex tw-gap-2 tw-px-2 tw-py-1 tw-text-xs tw-font-medium tw-text-red-600 tw-transition tw-duration-300 tw-transform tw-rounded-full md:tw-text-sm md:tw-px-3 hover:tw-scale-105 hover:tw-bg-red-100 "
                >
                    <div className="">
                        <div className="tw-relative tw-inline-flex">
                            <div className="tw-w-2 tw-h-2 tw-bg-red-500 tw-rounded-full"></div>
                            <div className="tw-absolute tw-top-0 tw-left-0 tw-w-2 tw-h-2 tw-bg-red-500 tw-rounded-full tw-animate-ping"></div>
                            <div className="tw-absolute tw-top-0 tw-left-0 tw-w-2 tw-h-2 tw-bg-red-500 tw-rounded-full tw-animate-pulse"></div>
                        </div>
                    </div>
                    Donate Now
                </a>
            </div>
        </div>
    );
};

export { Banner2 };
