import React from "react";
import {projects} from "../../../../content";
import {ProjectCard} from "../ProjectCard/ProjectCard";


export const VueProjects = () => {


    return (
        <>
            {
                projects.vueProjects.map((card, i) => (
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