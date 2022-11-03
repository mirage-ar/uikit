/**----------------------------------------------------------------------------------
 * The one stop shop for button needs baby
 * Mirage UI Kit (( v1.0 ))
 * @author max <max@mirage.space> | November 3, 2022 | Updated: nevah
 * ----------------------------------------------------------------------------------*/

import React from 'react';
import './connectButton.css';

interface ConnectButtonProps {
    primary?: boolean;
    enabled?: boolean;
    loading?: boolean;
    size: "large" | "small";
    label: string;
}

export const ConnectButton = ({ label, primary=true, size="large", loading=false }: ConnectButtonProps) => {
    const mode = primary ? 'button--primary' : 'button--secondary';
    const isLoading = loading ? '--loading' : ''
    return (
        <button className={['button', `button--${size}`, mode, isLoading].join(' ')}>
            {isLoading ? <img src={"/gifs/spinner.gif"} /> : label}
        </button>
    );
}