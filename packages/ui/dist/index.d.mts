import React from 'react';

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    variant?: 'primary' | 'secondary';
}
declare const Button: ({ children, onClick, variant }: ButtonProps) => React.JSX.Element;

export { Button, ButtonProps };
