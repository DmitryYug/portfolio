import React from 'react';

interface TitlePropsType {
    title: string | string[]
    subtitle?: string
}

export const Title: React.FC<TitlePropsType> = ({title, subtitle}) => {
    return (
        <div className='title'>
            <h2>{typeof title === 'string' && title.toUpperCase()}</h2>
            <p>{subtitle?.toUpperCase()}</p>
        </div>
    )
}

