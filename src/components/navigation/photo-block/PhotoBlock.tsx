import React from 'react';
import avatar from '../../../assets/test-sidebar-avatar-1.jpg'
import {animateScroll as scroll} from 'react-scroll'


export const PhotoBlock = () => {

    return (
        <div onClick={scroll.scrollToTop}
             className='photo-block-container'
        >
            <div className='side-photo'>
                <img src={avatar} alt=""/>
            </div>
            <div className='avatar-subtitle'>
                <p>Dmitriy</p>
                <p>Yuganiuk</p>
            </div>
        </div>
    );
}


