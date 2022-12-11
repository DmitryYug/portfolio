import React from 'react';
import styles from '../../../../styles/ProjectCard.less';
import reusableStyles from "../../../../styles/Common.less";

type ProjectCardPropsType = {
    title: string
    description: string
}

export const ProjectCard = (props: ProjectCardPropsType) => {

    return (
        <div className='card-container'>
            <div className='icon'>
                project picture
                <button>open project</button>
            </div>
            <h3 className='card-title'>{props.title}</h3>
            <span className='card-description'>{props.description}</span>
        </div>
    );
}

