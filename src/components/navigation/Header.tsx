import React, {useState} from 'react';
import {PhotoBlock} from "./photo-block/PhotoBlock";
import {SocialIconsBlock} from "./SocialIconsBlock";
import {HeaderNav} from "./nav/HeaderNav";


interface HeaderPropsType {
}

export const Header: React.FC<HeaderPropsType> = () => {
    const [headerClass, setHeaderClass] = useState<string>('');

    let prevScrollPos = window.pageYOffset;

    window.onscroll = function() {
        const currentScrollPos = window.pageYOffset;
        setHeaderClass((prevScrollPos > currentScrollPos) ? '' : 'hidden')
        prevScrollPos = currentScrollPos;
    }
    return (
        <div className={`header ${headerClass}`}>
            <PhotoBlock/>
            <SocialIconsBlock/>
            <HeaderNav/>
        </div>
    );
}

