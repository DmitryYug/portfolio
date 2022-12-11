import React from 'react';
import avatar from '../../../assets/test-sidebar-avatar.jpeg'

export const PhotoBlock = () => {

    return (
        <>
            <div className='side-photo'>
                <img src={avatar} alt=""/>
            </div>
            <div className='avatar-subtitle'>
                <p>Dmitriy</p>
                <p>Yuganiuk</p>
            </div>
        </>
    );
}


