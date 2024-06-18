import React, { useState } from 'react';
import './Toast.css';

const PalestineToast = () => {
    const [visible, setVisible] = useState(true);
    const [showDonateNow, setShowDonateNow] = useState(false);

    const handleClose = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        setVisible(false);
    };

    const handleMouseEnter = () => {
        setShowDonateNow(true);
    };

    const handleMouseLeave = () => {
        setShowDonateNow(false);
    };

    return (
        visible && (
            <a
                href="https://docs.google.com/document/d/e/2PACX-1vQbGQgTK4xRq-OLD8lGyyX_0NcWw2FV8x9qLkPWIyXjR6_DTpeerKIFnj9mZ8DtUU_3DbesWMR_t5jT/pub"
                target="_blank"
                rel="noopener noreferrer"
                className="toast-container"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div className="toast-content">
                    <img
                        src="https://cdn3.emoji.gg/emojis/1893-palestine-flag.png"
                        width="24px"
                        height="24px"
                        alt="Palestine Flag"
                        className="toast-flag"
                    />
                    <span className="toast-message">
                        {showDonateNow ? (
                            <>
                                Donate Now &rarr;
                                <span className="toast-animation"></span>
                            </>
                        ) : (
                            'We Support Palestine!'
                        )}
                    </span>
                </div>
                <button className="toast-close" onClick={handleClose}>
                    &times;
                </button>
            </a>
        )
    );
};

export { PalestineToast };
