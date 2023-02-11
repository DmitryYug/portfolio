import React, {useEffect, useState} from 'react';
import {Link} from 'react-scroll'

interface NavPropsType {
}

export const SiderNav: React.FC<NavPropsType> = (props) => {

    // let [currentClass, setCurrentClass] = useState('d-none')
    //
    // useEffect(() => {
    //     setCurrentClass(props.isNavigationVisible ? 'expanded' : 'd-none')
    // }, [props.isNavigationVisible])

    const navigationLinks = [
        {title: 'About Me', value: 'aboutMe'},
        {title: 'Skills', value: 'skills'},
        {title: 'Projects', value: 'projects'},
        {title: 'Contacts', value: 'contacts'}
    ]
    // const closeNavigation = () => {
    //     setCurrentClass('d-none')
    //     props.showNavigation(false)
    // }


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

