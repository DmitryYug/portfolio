import React from 'react';
import {Link} from 'react-scroll'
import {links} from "../../../content";

interface NavPropsType {
}

export const SiderNav: React.FC<NavPropsType> = (props) => {
    return (
        <nav className='nav'>
            <ul>
                {links.navigation.map((sidBarItem, idx) => (
                    <Link to={sidBarItem.value}
                          smooth={true}
                          delay={300}
                          offset={-80}
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

