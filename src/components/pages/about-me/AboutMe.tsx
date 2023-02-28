import React from 'react';
import {Link} from 'react-scroll'

//@ts-ignore
import {HiChevronDown} from "react-icons/hi";
import {TypeAnimation} from "react-type-animation";

interface AboutMePropsType {
}

export const AboutMe: React.FC<AboutMePropsType> = () => {

    return (
        <div id='aboutMe' className='main-background'>
            <div className="main-background image-wrapper"></div>
            <div className="main-background color-wrapper"></div>
            <div className="typewriter">
                <TypeAnimation
                    sequence={[
                        'Hello dear guest.',
                        500,
                        'Hello dear guest. ' +
                        'My name is Dmitriy.',
                        1000,
                        'Im a frontend engineer.',
                        1000,
                        'We can discuss your project or job opportunity',
                        500,
                        'We can discuss your project or job opportunity via contact form.',
                        1000,
                    ]}
                    deletionSpeed={60}
                    speed={10}
                    wrapper="div"
                    cursor={true}
                    repeat={Infinity}
                    style={{fontSize: '2em'}}
                />
            </div>
            <Link className='my-button is-transparent is-bordered is-rounded'
                  to='contacts'
                  smooth={true}
                  delay={300}
            >
                Contact Me
            </Link>
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

