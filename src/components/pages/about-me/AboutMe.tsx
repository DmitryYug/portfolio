import React from 'react';
import {Link} from 'react-scroll'

//@ts-ignore
import TypeWriterEffect from 'react-typewriter-effect';
import {HiChevronDown} from "react-icons/hi";

interface AboutMePropsType {
}

export const AboutMe: React.FC<AboutMePropsType> = () => {

    return (
        <div id='aboutMe' className='main-background'>
            <div className="main-background image-wrapper"></div>
            <div className="main-background color-wrapper"></div>
            <div className="typewriter">
                <TypeWriterEffect
                    startDelay={1000}
                    cursorColor="rgba(255, 255, 255, 1)"
                    multiText={[
                        'Hello dear guest.' + ' ' +
                        'Glad to see you here',
                        'Im frontend engineer'
                    ]}
                    multiTextDelay={4000}
                    typeSpeed={100}
                />
            </div>
            <Link className='arrow-down link-container'
                  to='cv'
                  smooth={true}
                  delay={300}
            >
                <HiChevronDown color='rgba(255, 255, 255, 0.4)'
                               size={50}
                               className='arrow-down icon'
                />
            </Link>
        </div>
    );
}

