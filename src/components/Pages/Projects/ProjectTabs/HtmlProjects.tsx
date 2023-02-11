import React from "react";
import {projects} from "../../../../content";
import {ProjectCard} from "../ProjectCard/ProjectCard";


export const HtmlProjects = () => {

    return (
        <>
            {
                projects.htmlProjects.map((card, i) => (
                    <ProjectCard
                        key={card.title + i}
                        title={card.title}
                        description={card.description}
                    />
                ))
            }
        </>
    )
}