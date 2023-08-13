import React from 'react';
import avatar from '../../../assets/photo_2023-08-03_12-01-35.jpg'
import {animateScroll as scroll} from 'react-scroll'


export const PhotoBlock = () => {

    return (
        <div onClick={scroll.scrollToTop}
             className='photo-block-container'
        >
            <div className='side-photo'>
                <img src={avatar} alt=""/>
                <div className="side-photo color-wrapper"></div>
            </div>
            <div className='avatar-subtitle'>
                <p>Dmitriy</p>
                <p>Yuganiuk</p>
            </div>
        </div>
    );
}


