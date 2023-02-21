import React from "react";

interface ButtonProps {
    children?: React.ReactNode;
    width: number;
    onClick?: ()=> void;
}

const Button: React.FC<ButtonProps> = (props) => {
    const { width, children, onClick } = props;
    return (
        <button
            style={{
                width: `${width}px`,
                height: "30px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
            onClick = {onClick}
        >
                {children}
        </button>
    );
};

export default Button