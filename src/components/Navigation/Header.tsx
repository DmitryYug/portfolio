import React from 'react';
import {PhotoBlock} from "./PhotoBlock/PhotoBlock";
import {SocialIconsBlock} from "./SocialIconsBlock";
import {HeaderNav} from "./Nav/HeaderNav";


interface HeaderPropsType {
}

export const Header: React.FC<HeaderPropsType> = () => {

    return (
        <div className='header'>
            <PhotoBlock/>
            <SocialIconsBlock/>
            <HeaderNav/>
        </div>
    );
}

