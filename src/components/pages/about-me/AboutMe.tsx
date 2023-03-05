import React, {useContext} from 'react';
import {Link} from 'react-scroll'

//@ts-ignore
import {HiChevronDown} from "react-icons/hi";
import {TypeAnimation} from "react-type-animation";
import MyButton from "../../MyButton";

interface AboutMePropsType {
}

export const AboutMe: React.FC<AboutMePropsType> = (props) => {

    return (
        <div id='aboutMe' className='main-background'>
            <div className="main-background image-wrapper"></div>
            <div className="main-background color-wrapper"></div>
            <div className="typewriter">
                <TypeAnimation
                    sequence={[
                        1000,
                        'Hello dear guest.',
                        1000,
                        'Hello dear guest. ' +
                        'My name is Dmitriy.',
                        2000,
                        'Im a frontend engineer.',
                        2000,
                        'We can discuss your project or job offer',
                        1000,
                        'We can discuss your project or job offer via contact form.',
                        2000,
                    ]}
                    deletionSpeed={60}
                    speed={10}
                    wrapper="div"
                    cursor={true}
                    repeat={Infinity}
                    style={{fontSize: '2em'}}
                />
            </div>
            <Link to='contacts'
                  smooth={true}
                  delay={300}
            >
                <MyButton size='1.5rem'
                          className='is-transparent is-bordered is-rounded'
                          myTitle='Contact Me'
                />
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

