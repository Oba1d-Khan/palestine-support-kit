import * as React from 'react';
import styles from './Banner.module.css';

const Banner = () => {
    return (
        <div className={styles.container}>
            <div className={styles.bg}></div>
            <div className={styles.content}>
                <p>
                    <strong>Palestinian Lives Matter</strong>
                    <svg viewBox="0 0 2 2" className={styles.icon}><circle cx="1" cy="1" r="1" /></svg>
                    Showing solidarity and love with Palestinian lives.
                </p>
                <a href="https://www.pcrf.net/" target="_blank" rel="noopener noreferrer" className={styles.button}>
                    Donate Now <span>&rarr;</span>
                </a>
            </div>
            <div className={styles.closeButton}>
                <button type="button">
                    <svg className={styles.closeIcon} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export { Banner };
