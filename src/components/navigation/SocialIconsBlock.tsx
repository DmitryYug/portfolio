import React from 'react';
import {links} from "../../content";

interface SocialProps {
}
export const SocialIconsBlock: React.FC<SocialProps> = () => {

    return (
        <footer>
            <div className='icons-block'>
                {
                    links.social.map((icon, i) =>
                    <a key={i} href={icon.link} target='_blank'>
                        {icon.icon}
                    </a>)
                }
            </div>
        </footer>
    );
}

