import * as React from "react";
import { useState } from 'react';
import './Banner.css';

interface BannerProps {
    variant?: 'dark' | 'light' | 'gradient';
}

const Banner: React.FC<BannerProps> = ({ variant = 'dark' }) => {
    const [visible, setVisible] = useState(true);

    const handleClose = () => {
        setVisible(false);
    };

    return (
        visible && (
            <div className="banner-container">
                <div className={`banner-bg banner-${variant}`}></div>
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
                        href="https://docs.google.com/document/d/e/2PACX-1vQbGQgTK4xRq-OLD8lGyyX_0NcWw2FV8x9qLkPWIyXjR6_DTpeerKIFnj9mZ8DtUU_3DbesWMR_t5jT/pub"
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
    );
};

export { Banner };
