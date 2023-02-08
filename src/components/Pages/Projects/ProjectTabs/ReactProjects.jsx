import React from "react";
import {projects} from "../../../../content";
import {ProjectCard} from "../ProjectCard/ProjectCard";


export const ReactProjects = () => {

    return (
        <>
            {
                projects.reactProjects.map((card, i) => (
                    <ProjectCard
                        key={i}
                        title={card.title}
                        description={card.description}
                    />
                ))
            }
        </>
    )
}