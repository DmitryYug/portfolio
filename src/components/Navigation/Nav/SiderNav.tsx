import React from 'react';
import {Link} from 'react-scroll'

interface NavPropsType {
}

export const SiderNav: React.FC<NavPropsType> = (props) => {


    const navigationLinks = [
        {title: 'About Me', value: 'aboutMe'},
        {title: 'CV', value: 'cv'},
        {title: 'Projects', value: 'projects'},
        {title: 'Contacts', value: 'contacts'}
    ]

    return (
        <nav className='nav'>
            <ul>
                {navigationLinks.map((sidBarItem, idx) => (
                    <Link to={sidBarItem.value}
                          smooth={true}
                          delay={300}
                          key={`${idx} + ${sidBarItem.value}`}
                    >
                        <li key={`${idx} + ${sidBarItem.value}`}>
                            {sidBarItem.title}
                        </li>
                    </Link>
                ))}
            </ul>
        </nav>
    );
}

