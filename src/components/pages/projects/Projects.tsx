import React from 'react';
import {Title} from "../../Title";
import {projects} from "../../../content";
import {ProjectCard} from "./project-card/ProjectCard";

interface ProjectsPropsType {
}

export const Projects: React.FC<ProjectsPropsType> = () => {

    const renderProjectCards = projects.map((card, i) => (
        <ProjectCard
            key={card.title + i}
            title={card.title}
            date={card.date}
            url={card.url}
            background={card.background}
            stack={card.stack}
            info={card.info}
            features={card.features}
            demo={card.demo}
        />
    ))

    return (
        <div id='projects' className='light-block-wrapper full-screen-height'>
            <div className='light-block-wrapper full-screen-height'>
                <div className="content">
                    <Title title='My projects'
                           subtitle='Pets'
                    />
                    <div className='projects-cards-wrapper'>
                        {renderProjectCards}
                    </div>
                </div>
            </div>
        </div>
    );
}

