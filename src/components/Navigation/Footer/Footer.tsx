import React, {useEffect, useState} from 'react';
import {AiFillFacebook, AiFillGithub, AiFillLinkedin, AiOutlineClose} from "react-icons/ai";
import {SiCodewars} from "react-icons/si";
import {FaHamburger} from "react-icons/fa";
interface FooterProps {
}
export const Footer: React.FC<FooterProps> = () => {
    const footerIconsColor = '#aab1b8';

    const footerIcons = [
        {title: 'gitHub', icon: <AiFillGithub color={footerIconsColor} size={20}/>},
        {title: 'codeWars', icon: <SiCodewars color={footerIconsColor} size={20}/>},
        {title: 'linkedIn', icon: <AiFillLinkedin color={footerIconsColor} size={20}/>},
        {title: 'facebook', icon: <AiFillFacebook color={footerIconsColor} size={20}/>}
    ]

    return (
        <footer>
            <div className='icons-block'>
                {footerIcons.map(icon => icon.icon)}
            </div>
        </footer>
    );
}

