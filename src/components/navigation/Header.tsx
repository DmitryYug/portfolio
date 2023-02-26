import React from 'react';
import {PhotoBlock} from "./photo-block/PhotoBlock";
import {SocialIconsBlock} from "./SocialIconsBlock";
import {HeaderNav} from "./nav/HeaderNav";


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

