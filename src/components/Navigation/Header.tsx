import React from 'react';
import {PhotoBlock} from "./PhotoBlock/PhotoBlock";
import {Footer} from "./Footer/Footer";
import {HeaderNav} from "./Nav/HeaderNav";


interface HeaderPropsType {
}

export const Header: React.FC<HeaderPropsType> = () => {

    return (
        <div className='header'>
            <PhotoBlock/>
            <Footer/>
            <HeaderNav/>
        </div>
    );
}

