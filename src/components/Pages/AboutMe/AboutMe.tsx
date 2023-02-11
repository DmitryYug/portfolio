import React from 'react';

interface AboutMePropsType {
}

export const AboutMe:React.FC<AboutMePropsType> = () => {

    return (
        <div id='aboutMe' className='light-block-wrapper full-screen-height with-background-image'>
            <div className='content-block-container'>
                <div className='text-block'>
                    <span>Hi there</span>
                    <h1>I`m Dmitriy Yuganyuk</h1>
                </div>
            </div>
        </div>
    );
}

