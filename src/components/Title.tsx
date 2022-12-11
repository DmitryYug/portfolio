import React from 'react';

interface TitlePropsType {
    title: string
    subtitle?: string
}

export const Title: React.FC<TitlePropsType> = ({title, subtitle}) => {
    return (
        <div className='title'>
            <h2>{title}</h2>
            <p>{subtitle}</p>
        </div>
    )
}

