import React from 'react';
import {SiderNav} from "./nav/SiderNav";
import {PhotoBlock} from "./photo-block/PhotoBlock";
import {SocialIconsBlock} from "./SocialIconsBlock";

interface SidebarPropsType {
}

export const Sidebar: React.FC<SidebarPropsType> = () => {

    return (
        <div className='sidebar'>
            <PhotoBlock/>
            <SiderNav/>
            <SocialIconsBlock/>
        </div>
    );
}

