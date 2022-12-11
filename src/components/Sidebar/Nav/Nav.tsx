import React from 'react';

interface NavPropsType {
    getCurrentRef: (value: string) => void
}

export const Nav: React.FC<NavPropsType> = ({getCurrentRef}) => {

    const sidBarStructure = [
        {title: 'About Me', value: 'aboutMe'},
        {title: 'Skills', value: 'skills'},
        {title: 'Projects', value: 'projects'},
        {title: 'Contacts', value: 'contacts'}
    ]

    const setCurrentRef = (value: string) => {
        getCurrentRef(value)
    }

    return (
        <ul className='nav'>
            {sidBarStructure.map((sidBarItem, idx) => (
                <li key={`${idx} + ${sidBarItem.value}`}>
                    <a onClick={() => setCurrentRef(sidBarItem.value)}>
                        {sidBarItem.title}
                    </a>
                </li>
            ))}
        </ul>
    );
}

