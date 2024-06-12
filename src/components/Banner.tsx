import * as React from "react";
import styles from "./Banner.module.css";

const Banner = () => {
    return (
        <div className={styles.container}>
            <div className={styles.bg}></div>
            <div className={styles.content}>
                <p>
                    <a href="https://emoji.gg/emoji/1893-palestine-flag">
                        <img
                            src="https://cdn3.emoji.gg/emojis/1893-palestine-flag.png"
                            width="64px"
                            height="64px"
                            alt="Palestine_Flag"
                        />
                    </a>{" "}
                    <strong>
                        Palestinian Lives Matter <span>-</span>
                    </strong>
                    <p className={styles.text}>
                        Showing solidarity and love with Palestinian lives!
                    </p>
                </p>
                <a
                    href="https://www.pcrf.net/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.donate}
                >
                    Donate Now <span>&rarr;</span>
                </a>
            </div>
        </div>
    );
};

export { Banner };
