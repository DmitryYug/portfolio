import React from 'react';
import {AiFillFacebook, AiFillGithub, AiFillLinkedin} from "react-icons/ai";
import {SiCodewars} from "react-icons/si";

interface FooterProps {
}
export const Footer: React.FC<FooterProps> = () => {
    const footerIconsColor = '#aab1b8';

    const footerIcons = [
        {title: 'gitHub', icon: <AiFillGithub key={1} color={footerIconsColor} size={20}/>},
        {title: 'codeWars', icon: <SiCodewars key={2} color={footerIconsColor} size={20}/>},
        {title: 'linkedIn', icon: <AiFillLinkedin key={3} color={footerIconsColor} size={20}/>},
        {title: 'facebook', icon: <AiFillFacebook key={4} color={footerIconsColor} size={20}/>}
    ]

    return (
        <footer>
            <div className='icons-block'>
                {footerIcons.map(icon => icon.icon)}
            </div>
        </footer>
    );
}

