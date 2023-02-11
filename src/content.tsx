import {ProjectCardType, SkillCardType} from "./types/Types";
import React from "react";
import {RiReactjsFill, RiVuejsFill} from 'react-icons/ri'
import {DiJavascript} from "react-icons/di";
import {SiJavascript} from "react-icons/si";


interface ProjectsBlockDataType {
    vueProjects: ProjectCardType[]
    reactProjects: ProjectCardType[]
    htmlProjects: ProjectCardType[]
}

export const skills: SkillCardType[] = [
    {
        title: 'JavaScript',
        icon: <SiJavascript size={70} color='#aab1b8'/>,
        children: ['TypeScript', 'jQuery', 'Solid', 'Kiss', 'Dry', 'REST API']
    },
    {
        title: 'HTML/CSS',
        icon: <DiJavascript size={70} color='#aab1b8'/>,
        children: ['SASS/Less', 'Adaptive', 'Semantics', 'Web Standards']
    },
    {
        title: 'React',
        icon: <RiReactjsFill size={70} color='#aab1b8'/>,
        children: ['Redux', 'React Query', 'FLUX', 'TDD/Unit tests', 'StoryBook', 'UI libraries']
    },
    {
        title: 'Vue',
        icon: <RiVuejsFill size={70} color='#aab1b8'/>,
        children: ['VueX', 'Vuetify']
    }
]
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

// export const footerIcons = [
//     {title: 'gitHub', icon: AiFillGithub},
//     {title: 'codeWars', icon: SiCodewars},
//     {title: 'linkedIn', icon: AiFillLinkedin},
//     {title: 'facebook', icon: AiFillFacebook}
// ]