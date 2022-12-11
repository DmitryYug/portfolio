import React, {RefObject, useEffect} from 'react';
import styles from '../../../styles/Projects.less';
import reusableStyles from '../../../styles/Common.less';
import {ProjectCard} from "./ProjectCard/ProjectCard";
import {Title} from "../../Title";

interface ProjectsPropsType {
    setProjectsRef: (ref: RefObject<HTMLDivElement>) => void
}
export const Projects: React.FC<ProjectsPropsType> = ({setProjectsRef}) => {

    const projectsRef = React.useRef<HTMLDivElement>(null)

    useEffect(() => {
        setProjectsRef(projectsRef)
    }, [])

    const projects = [
        {title: 'Social Network', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid id, illo labore nostrum perferendis quasi?'},
        {title: 'Todolist', description: 'Lorem ipsum dolor sit amet, conse, illo l?'}
    ]

    return (
        <div ref={projectsRef} className='light-block-wrapper full-screen-height'>
            <div className='light-block-wrapper full-screen-height'>
                <Title title='My projects'
                       subtitle='Pets'
                />
                <div className='card-wrapper'>
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

