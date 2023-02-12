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
                        startDelay={2000}
                        cursorColor="#3F3D56"
                        multiText={[
                            'Hey there, This is a type writer animation package',
                            'it consist of two types...',
                            'Single text display and multi text display',
                            'Fonts can be customized.',
                            'The type speed can be customized as well',
                        ]}
                        multiTextDelay={1000}
                        typeSpeed={30}
                    />


                    <span>Hi there</span>
                    <h1>I`m Dmitriy Yuganyuk</h1>
                </div>
            </div>
        </div>
    );
}

