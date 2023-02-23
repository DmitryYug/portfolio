import React, {useRef} from 'react';
//@ts-ignore
import TypeWriterEffect from 'react-typewriter-effect';

interface AboutMePropsType {
}

export const AboutMe: React.FC<AboutMePropsType> = () => {

    // const aboutMeRef = useRef()

    return (
        <div id='aboutMe' className='light-block-wrapper full-screen-height with-background-image'>
            <div className='content-block-container'>
                <div className='text-block'>
                    <TypeWriterEffect
                        textStyle={{
                            fontWeight: 500,
                            lineHeight: 1.8,
                            color: 'rgba(255, 255, 255, 1)',
                            fontSize: '1.8em',
                        }}
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

