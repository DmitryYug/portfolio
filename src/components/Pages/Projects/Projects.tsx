import React, {RefObject, useEffect} from 'react';
import {ProjectCard} from "./ProjectCard/ProjectCard";
import {Title} from "../../Title";

interface ProjectsPropsType {
}
export const Projects: React.FC<ProjectsPropsType> = () => {

    const projects = [
        {title: 'Project 1', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid id, illo labore nostrum perferendis quasi?'},
        {title: 'Project 2', description: 'Lorem ipsum dolor sit amet, conse, illo l?'},
        {title: 'Project 3', description: 'Lorem ipsum dolor sit amet, conse, illlor sit amet, conse, illo lorem10l?'},
        {title: 'Project 4', description: 'Lorem ipsum dolor sit amet, conse, lor sit lconse, lor sit lconse, lor sit lconse, lor sit l?'},
    ]

    return (
        <div id='projects' className='light-block-wrapper full-screen-height'>
            <div className='light-block-wrapper full-screen-height'>
                <Title title='My projects'
                       subtitle='Pets'
                />
                <div className='project-cards-wrapper'>
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

