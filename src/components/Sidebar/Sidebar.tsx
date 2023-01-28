import React from 'react';
import {Nav} from "./Nav/Nav";
import {PhotoBlock} from "./PhotoBlock/PhotoBlock";
import {Footer} from "./Footer/Footer";

interface SidebarPropsType {
}

export const Sidebar: React.FC<SidebarPropsType> = () => {


    return (
        <div className='sidebar'>
            <PhotoBlock/>
            <Nav/>
            <Footer/>
        </div>
    );
}

