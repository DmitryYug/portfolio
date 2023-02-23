import React, { ButtonHTMLAttributes } from 'react';

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
}

function CustomButton({ className, onClick, children, title, ...rest }: CustomButtonProps) {

    return (
        <button className={`my-button ${className}`}
                onClick={onClick}
                {...rest}
        >
            {title}
        </button>
    );
}

export default CustomButton;