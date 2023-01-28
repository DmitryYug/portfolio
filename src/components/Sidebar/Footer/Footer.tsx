import React from 'react';

export const Footer = () => {
    const footerIcons = [
        {title: 'gitHub', icon: ''},
        {title: 'codeWars', icon: ''},
        {title: 'linkedIn', icon: ''},
        {title: 'email', icon: ''}
    ]

    return (
        <footer className='footer'>
            {footerIcons.map(icon => (<img src='' alt=""/>))}
        </footer>
    );
}

