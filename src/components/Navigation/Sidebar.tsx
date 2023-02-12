import React from 'react';
import {SiderNav} from "./Nav/SiderNav";
import {PhotoBlock} from "./PhotoBlock/PhotoBlock";
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

