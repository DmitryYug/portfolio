import {EducationCardType, ExperienceCardType, ProjectCardType, SkillCardType} from "./types/Types";
import React from "react";
//icons
import {RiReactjsFill, RiVuejsLine} from 'react-icons/ri'
import {DiJavascript1} from "react-icons/di";
import {AiFillFacebook, AiFillGithub, AiFillLinkedin, AiOutlineHtml5} from "react-icons/ai";
import {SiCodewars} from "react-icons/si";
//images
import ntDevLanding from '../src/assets/projectCards/ntDevLanding/cover.png'

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
        title: 'NT development landing',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid id, illo labore nostrum perferendis quasi?',
        stack: ['React', 'Less'],
        background: ntDevLanding
    }
]