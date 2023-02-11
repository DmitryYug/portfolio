import React from 'react';

type ProjectCardPropsType = {
    title: string
    description: string
}

export const ProjectCard = (props: ProjectCardPropsType) => {

    return (
        <div className='project-cards-container'>
            <h3 className='card-title'>{props.title}</h3>
            <span className='card-description'>{props.description}</span>
        </div>
    );
}

