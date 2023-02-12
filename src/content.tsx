import {EducationCardType, ProjectCardType, SkillCardType} from "./types/Types";
import React from "react";
import {RiReactjsFill, RiVuejsLine} from 'react-icons/ri'
import {DiJavascript1} from "react-icons/di";
import {AiFillFacebook, AiFillGithub, AiFillLinkedin, AiOutlineHtml5} from "react-icons/ai";
import {SiCodewars} from "react-icons/si";


interface ProjectsBlockDataType {
    vueProjects: ProjectCardType[]
    reactProjects: ProjectCardType[]
    htmlProjects: ProjectCardType[]
}
interface CvBlockDataType {
    skills: SkillCardType[]
    education: EducationCardType[]
}
interface LinksTypes {
    navigation: {title: string, value: string}[]
    social: {title: string, icon: React.ReactElement}[]
}
export const links: LinksTypes = {
    navigation: [
        {title: 'CV', value: 'cv'},
        {title: 'Projects', value: 'projects'},
        {title: 'Contacts', value: 'contacts'}
    ],
    social: [
        {title: 'gitHub', icon: <AiFillGithub color='#aab1b8' size={20}/>},
        {title: 'codeWars', icon: <SiCodewars color='#aab1b8' size={20}/>},
        {title: 'linkedIn', icon: <AiFillLinkedin color='#aab1b8' size={20}/>},
        {title: 'facebook', icon: <AiFillFacebook color='#aab1b8' size={20}/>}
    ]
}




export const cv: CvBlockDataType = {
    skills: [
        {
            title: 'JavaScript',
            icon: <DiJavascript1 size={70} color='#1baa80'/>,
            children: ['TypeScript', 'jQuery', 'Solid', 'Kiss', 'Dry', 'REST API']
        },
        {
            title: 'HTML/CSS',
            icon: <AiOutlineHtml5 size={70} color='#1baa80'/>,
            children: ['SASS/Less', 'Adaptive', 'Semantics', 'Web Standards']
        },
        {
            title: 'React',
            icon: <RiReactjsFill size={70} color='#1baa80'/>,
            children: ['Redux', 'React Query', 'FLUX', 'TDD/Unit tests', 'StoryBook', 'UI libraries']
        },
        {
            title: 'Vue',
            icon: <RiVuejsLine size={70} color='#1baa80'/>,
            children: ['VueX', 'Vuetify']
        }
    ],
    education: [
        {
            title: 'Belorussian National Technical University',
            period: '2007-2012',
            speciality: 'Engineer'
        },
        {
            title: 'Udemy Academy',
            period: '2018-2019',
            speciality: 'HTML, JavaScript for beginners'
        },
        {
            title: 'IT-incubator',
            period: '2019-2020',
            speciality: 'React frontend engineer'
        },
    ]
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