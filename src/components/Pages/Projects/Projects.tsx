import React from 'react';
import {Title} from "../../Title";
import {projects} from "../../../content";
import {ProjectCard} from "./ProjectCard/ProjectCard";

interface ProjectsPropsType {
}

export const Projects: React.FC<ProjectsPropsType> = () => {
    const renderProjectCards = projects.map((card, i) => (
        <ProjectCard
            key={card.title + i}
            title={card.title}
            description={card.description}
            background={card.background}
            stack={card.stack}
        />
    ))

    return (
        <div id='projects' className='light-block-wrapper full-screen-height'>
            <div className='light-block-wrapper full-screen-height'>
                <Title title='My projects'
                       subtitle='Pets'
                />
                <div className='projects-cards-wrapper'>
                    {renderProjectCards}
                    {/*<AllProjects/>*/}
                </div>
            </div>
        </div>
    );
}

