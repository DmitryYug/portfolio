import {ProjectCardType} from "./types/Types";

interface ProjectsBlockDataType {
    vueProjects: ProjectCardType[]
    reactProjects: ProjectCardType[]
    htmlProjects: ProjectCardType[]
}
export const projects: ProjectsBlockDataType = {
    vueProjects: [
        {
            title: 'Vue 1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid id, illo labore nostrum perferendis quasi?'
        },
        {
            title: 'Vue 2',
            description: 'Lorem ipsum dolor sit amet, conse, illo l?'
        },
        {
            title: 'Vue 3',
            description: 'Lorem ipsum dolor sit amet, conse, illlor sit amet, conse, illo lorem10l?'
        },
        {
            title: 'Vue 4',
            description: 'Lorem ipsum dolor sit amet, conse, lor sit lconse, lor sit lconse, lor sit lconse, lor sit l?'
        },
    ],
    reactProjects: [
        {
            title: 'React 1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid id, illo labore nostrum perferendis quasi?'
        },
        {
            title: 'React 2',
            description: 'Lorem ipsum dolor sit amet, conse, illo l?'
        },
        {
            title: 'React 3',
            description: 'Lorem ipsum dolor sit amet, conse, illlor sit amet, conse, illo lorem10l?'
        },
        {
            title: 'React 4',
            description: 'Lorem ipsum dolor sit amet, conse, lor sit lconse, lor sit lconse, lor sit lconse, lor sit l?'
        },
    ],
    htmlProjects: [
        {
            title: 'Html 1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid id, illo labore nostrum perferendis quasi?'
        },
        {
            title: 'Html 2',
            description: 'Lorem ipsum dolor sit amet, conse, illo l?'
        },
        {
            title: 'Html 3',
            description: 'Lorem ipsum dolor sit amet, conse, illlor sit amet, conse, illo lorem10l?'
        },
        {
            title: 'Html 4',
            description: 'Lorem ipsum dolor sit amet, conse, lor sit lconse, lor sit lconse, lor sit lconse, lor sit l?'
        },
    ]
}