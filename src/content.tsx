import {BlogCardTypes, EducationCardType, ExperienceCardType, ProjectCardType, SkillCardType} from "./types/Types";
import React from "react";
//icons
import {RiReactjsFill, RiVuejsLine} from 'react-icons/ri'
import {DiJavascript1} from "react-icons/di";
import {AiFillFacebook, AiFillGithub, AiFillLinkedin, AiOutlineHtml5} from "react-icons/ai";
import {SiCodewars} from "react-icons/si";
//images
import ntDevLanding from './assets/project-cards/nt-dev-landing/cover.png'
import ntDent from './assets/project-cards/nt-dent/cover.png'
import rsg from './assets/project-cards/rsg/cover.png'
import todolist from './assets/project-cards/todolist/cover.png'

import blogTest from './assets/blog-cards/blog-test.jpeg'
//videos
import ntDevLandingDemo from './assets/project-cards/nt-dev-landing/demo.mp4'
import ntDentDemo from './assets/project-cards/nt-dent/demo.mp4'
import rsgDemo from './assets/project-cards/rsg/demo.mp4'
import tdlDemo from './assets/project-cards/todolist/demo.mp4'

interface CvBlockDataType {
    skills: SkillCardType[]
    education: EducationCardType[]
    experience: ExperienceCardType[]
}

interface LinksTypes {
    navigation: { title: string, value: string }[]
    social: { title: string, icon: React.ReactElement }[]
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
    ],
    experience: [
        {
            orgTitle: 'Freelance',
            period: '2020-2021',
            position: 'Frontend developer',
            duties: ['HTML landings', 'Custom UI kit creating', 'SPA performance optimisation']
        },
        {
            orgTitle: 'NT development',
            period: '2021- till now',
            position: 'Frontend engineer',
            duties: ['HTML', 'Legacy code bug fixing', 'Architecture decisions']
        },
    ]
}

export const projects: ProjectCardType[] = [
    {
        title: 'Web site',
        stack: ['React', 'Less'],
        background: ntDevLanding,
        info: 'Web site for a company Im working in.',
        features: ['scroll navigation', 'react-router', 'native css and animate.css animation', 'progressive image loading'],
        demo: ntDevLandingDemo
    },
    {
        title: 'Dental clinic system',
        stack: ['Vue', 'Vue X'],
        background: ntDent,
        info: 'Big project with legacy codebase on Vue2. Includes handling of visits, finances, cure plans, store',
        features: ['Vue router', 'Vuetify', 'Custom plugin with helper reusable functions', 'Handling visual and system settings of app in localStorage with VueX'],
        demo: ntDentDemo
    },
    {
        title: 'Todo list',
        stack: ['React', 'Redux'],
        background: todolist,
        info: 'Every developer should have a TDL in portfolio.',
        features: [],
        demo: tdlDemo
    },
    {
        title: 'Html module for a big system',
        stack: ['HTML', 'Less', 'JQuery'],
        background: rsg,
        info: 'Simple HTML project with jQuery UI elements logic',
        features: [],
        demo: rsgDemo
    },
]
export const blog: BlogCardTypes[] = [
    {
        title: 'Here will be smth smart',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis error eum facere fugit magni, necessitatibus officiis praesentium. ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis error eum facere fugit magni',
        background: blogTest
    },
    {
        title: 'Here will be smth smart',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis error eum facere fugit magni, necessitatibus officiis praesentium. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, id! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis error eum facere fugit magni, necessitatibus officiis praesentium. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, id',
        background: blogTest
    },
    {
        title: 'Here will be smth smart',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis error eum facere fugit magni, ',
        background: blogTest
    },
]