import * as React from "react";
import { ReactNode } from "react";

type PropsType = {
    children: React.ReactNode;
};

const Button = ({ children }: PropsType) => {
    return (
        <button
            style={{
                backgroundColor: "green",
                color: "black",
                padding: "10px 20px",
                borderRadius: "5px",
                border: "none",
                cursor: "pointer",
                fontSize: "16px",
                fontWeight: "bold",
                transition: "all 0.3s ease",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
            }}
        >
            {children}
        </button>
    );
};

export { Button };
