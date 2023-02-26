import React from 'react';
//@ts-ignore
import TypeWriterEffect from 'react-typewriter-effect';

interface AboutMePropsType {
}

export const AboutMe: React.FC<AboutMePropsType> = () => {

    const typeWriterTextStyle = {
        position: 'absolute',
        top: '50%',
        left: '10%',
        zIndex: 2,
        fontWeight: 500,
        lineHeight: 1.8,
        color: 'rgba(255, 255, 255, 1)',
        fontSize: '1.8em',
    }

    return (
        <div id='aboutMe' className='main-background'>
            <div className="main-background image-wrapper"></div>
            <div className="main-background color-wrapper"></div>
            <div className='content-block-container'>
                <div className='text-block'>
                    <TypeWriterEffect
                        textStyle={typeWriterTextStyle}
                        startDelay={1000}
                        cursorColor="rgba(255, 255, 255, 1)"
                        multiText={[
                            'Hello dear guest.' +
                            'Glad to see you here',
                            'Im frontend engineer'
                        ]}
                        multiTextDelay={4000}
                        typeSpeed={100}
                    />
                </div>
            </div>
        </div>
    );
}

