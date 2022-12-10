import React from 'react';

export const Title = (props: {title: string}) => {
    return (
        <div className='title'>
            <h2>{props.title}</h2>
        </div>
    )
}

