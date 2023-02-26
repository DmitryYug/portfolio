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
                    <React.Fragment key={i}>
                        {icon.icon}
                    </React.Fragment>)
                }
            </div>
        </footer>
    );
}

