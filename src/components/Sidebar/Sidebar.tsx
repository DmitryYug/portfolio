import React from 'react';
import {Nav} from "./Nav/Nav";
import {PhotoBlock} from "./PhotoBlock/PhotoBlock";

interface SidebarPropsType {
    getCurrentRef: (value: string) => void
}

export const Sidebar: React.FC<SidebarPropsType> = ({getCurrentRef}) => {

    const setCurrentRef = (value: string) => {
        getCurrentRef(value)
    }

    return (
        <div className='sidebar'>
            <PhotoBlock/>
            <Nav getCurrentRef={setCurrentRef}/>
        </div>
    );
}

