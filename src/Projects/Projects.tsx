import React from 'react';
import styles from '../Common/Styles/Projects.less';
import reusableStyles from '../Common/Styles/Common.less';
import {ProjectCard} from "./ProjectCard/ProjectCard";
import {Title} from "../Common/Title/Title";


export const Projects = () => {

    const projects = [
        {
            title: 'Social Network',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid id, illo labore nostrum perferendis quasi?'
        },
        {title: 'Todolist', description: 'Lorem ipsum dolor sit amet, conse, illo l?'}
    ]

    return (
        <div className={`${reusableStyles.block} ${styles.projectsBlock}`}>
            <div className={`${reusableStyles.container} ${reusableStyles.flexColumn}`}>
                <Title title={'My projects'}/>
                <div className={reusableStyles.cardContainer}>
                    {projects.map((p, i) => {
                        return <ProjectCard
                            key={i}
                            title={p.title}
                            description={p.description}
                        />
                    })}
                </div>
            </div>
        </div>
    );
}

