import React from 'react';


type SkillCardPropsType = {
    title: string
    description: string
}

export const SkillCard = (props: SkillCardPropsType) => {
    return (
        <div className='card-container'>
            <div className='icon'>skill picture</div>
            <h3 className='card-title'>{props.title}</h3>
            <span className='card-description'>
                {props.description}
            </span>
        </div>
    );
}

