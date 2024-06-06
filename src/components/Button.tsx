import * as React from "react";
import { ReactNode, CSSProperties } from "react";

type PropsType = {
    children: React.ReactNode;
    style: React.CSSProperties;
};

const Button = ({ children, style }: PropsType) => {
    return (
        <button
            style={{
                backgroundColor: "#00a651",
                color: "#ffffff",
                padding: "10px 20px",
                borderRadius: "5px",
                border: "none",
                cursor: "pointer",
                fontSize: "16px",
                fontWeight: "bold",
                transition: "all 0.8s ease",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
                ...style,
            }}

        >
            {children}
        </button>
    );
};

export { Button };
