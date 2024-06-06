import React from "react";
import styles from "./Button.module.css";

type PropsType = {
    children: React.ReactNode;
    style?: React.CSSProperties;
};

const Button = ({ children, style }: PropsType) => {
    return (
        <button className={styles.button} style={style}>
            {children}
        </button>
    );
};

export { Button };
