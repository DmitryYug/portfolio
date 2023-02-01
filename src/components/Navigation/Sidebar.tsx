import React from 'react';
import {SiderNav} from "./Nav/SiderNav";
import {PhotoBlock} from "./PhotoBlock/PhotoBlock";
import {Footer} from "./Footer/Footer";

interface SidebarPropsType {
}

export const Sidebar: React.FC<SidebarPropsType> = () => {

    return (
        <div className='sidebar'>
            <PhotoBlock/>
            <SiderNav/>
            <Footer/>
        </div>
    );
}

