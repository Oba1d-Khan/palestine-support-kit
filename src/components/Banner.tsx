import * as React from "react";

const Banner = () => {
    return (
        <>    <div className="relative flex items-center justify-center px-4 py-1 overflow-hidden text-center md:py-[0.18rem] md:px-0 gap-14 max-h-9 md:max-h-10">
            <div className="absolute inset-0 z-0 w-full h-full bg-black"></div>

            <div className="z-10 flex items-center md:px-2 bg-white rounded-full md:gap-12 backdrop-blur-lg">
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
                    className="flex gap-2 px-2 py-1 text-[0.6rem] font-medium text-red-600 transition duration-300 transform rounded-full md:text-sm md:px-3 hover:scale-105 hover:bg-red-100"
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
        </div></>
        // <div className={styles.container}>
        //     <div className={styles.bg}></div>
        //     <div className={styles.content}>
        //         <p>
        //             <a href="https://emoji.gg/emoji/1893-palestine-flag" className={styles.flag}>
        //                 <img
        //                     src="https://cdn3.emoji.gg/emojis/1893-palestine-flag.png"
        //                     width="32px"
        //                     height="32px"
        //                     alt="Palestine_Flag"
        //                 />
        //             </a>{" "}
        //             <strong>
        //                 Palestinian Lives Matter <span>-</span>
        //             </strong>
        //             <p className={styles.text}>
        //                 Showing solidarity and love with Palestinian lives!
        //             </p>
        //         </p>
        //         <a
        //             href="https://www.pcrf.net/"
        //             target="_blank"
        //             rel="noopener noreferrer"
        //             className={styles.donate}
        //         >
        //             Donate Now <span>&rarr;</span>
        //         </a>
        //     </div>
        // </div >
    );
};

export { Banner };
