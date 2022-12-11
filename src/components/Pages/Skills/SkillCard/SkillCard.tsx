import React from 'react';


type SkillCardPropsType = {
    title: string
    description: string
    icon: string
}

export const SkillCard = (props: SkillCardPropsType) => {
    return (
        <div className='card-container'>
            <div className='icon'>
                <img src={props.icon} alt=""/>
            </div>
            <h3 className='card-title'>{props.title}</h3>
            <span className='card-description'>
                {props.description}
            </span>
        </div>
    );
}

