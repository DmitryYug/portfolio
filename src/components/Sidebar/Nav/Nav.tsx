import React from 'react';

interface NavPropsType {
    getCurrentRef: (value: string) => void
}

export const Nav: React.FC<NavPropsType> = ({getCurrentRef}) => {

    const setCurrentRef = (value: string) => {
        getCurrentRef(value)
    }

    return (
        <ul className='nav'>
            <div className='nav-item' onClick={() => setCurrentRef('aboutMe')}>about me</div>
            <div className='nav-item' onClick={() => setCurrentRef('skills')}>skills</div>
        </ul>
    );
}

