import * as React from "react";
import { useState } from 'react';
import './Banner.css';

const Banner = () => {
    const [visible, setVisible] = useState(true);

    const handleClose = () => {
        setVisible(false);
    };
    return (
        visible && (
            <div className="banner-container">
                <div className="banner-bg"></div>
                <div className="banner-content">
                    <p className="banner-text">
                        <a href="" className="banner-flag">
                            <img
                                src="https://cdn3.emoji.gg/emojis/1893-palestine-flag.png"
                                width="32px"
                                height="32px"
                                alt="Palestine_Flag"
                            />
                        </a>
                        <strong className="banner-strong">We stand with Palestine!</strong>
                    </p>
                    <a
                        href="https://www.pcrf.net/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="banner-donate"
                    >
                        <div className="dot-container">
                            <div className="dot"></div>
                            <div className="dot ping"></div>
                            <div className="dot pulse"></div>
                        </div>
                        Donate Now
                    </a>
                </div>
                <button className="close-button" onClick={handleClose}>
                    &times;
                </button>
            </div>
        )
    )
};

export { Banner };
