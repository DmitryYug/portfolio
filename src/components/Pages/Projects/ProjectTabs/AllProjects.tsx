import React from "react";
import {projects} from "../../../../content";
import {ProjectCard} from "../ProjectCard/ProjectCard";


export const AllProjects = () => {

    return (
        <>
            {
                projects.map((card, i) => (
                    <ProjectCard
                        key={card.title + i}
                        title={card.title}
                        description={card.description}
                        background={card.background}
                        stack={card.stack}
                    />
                ))
            }
        </>
    )
}