import * as React from "react";
import styles from "./Banner.module.css";

const Banner = () => {
    return (
        <div className={styles.container}>
            <div className={styles.bg}></div>
            <div className={styles.content}>
                <p>
                    <img src="./Flag_of_Palestine.png" alt="" className={styles.flag} />
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