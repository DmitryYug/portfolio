import React from 'react';
import gitHubIcon from '../../../assets/Octicons-mark-github.svg'

export const Footer = () => {
    const footerIcons = [
        {title: 'gitHub', icon: gitHubIcon},
        {title: 'codeWars', icon: ''},
        {title: 'linkedIn', icon: ''},
        {title: 'email', icon: ''}
    ]

    return (
        <footer className='footer'>
            {footerIcons.map(icon => (
                <img src='' alt=""/>
            ))}
        </footer>
    );
}

