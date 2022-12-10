import React from 'react';
import {Nav} from "./Nav/Nav";
import {PhotoBlock} from "./PhotoBlock/PhotoBlock";


export const Sidebar = () => {
    return (
        <div className='sidebar'>
            <PhotoBlock/>
            <Nav/>
        </div>
    );
}

