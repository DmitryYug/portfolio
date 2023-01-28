import React from 'react';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

interface NavPropsType {

}

export const Nav: React.FC<NavPropsType> = () => {

    const sidBarStructure = [
        {title: 'About Me', value: 'aboutMe'},
        {title: 'Skills', value: 'skills'},
        {title: 'Projects', value: 'projects'},
        {title: 'Contacts', value: 'contacts'}
    ]


    return (
        <nav>
            <ul className='nav'>
                {sidBarStructure.map((sidBarItem, idx) => (
                    <li key={`${idx} + ${sidBarItem.value}`}>
                        <Link to={sidBarItem.value} smooth={true} delay={300}>
                            {sidBarItem.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

