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
    social: { title: string, icon: React.ReactElement, url: string }[]
}

export const links: LinksTypes = {
    navigation: [
        {title: 'CV', value: 'cv'},
        {title: 'Projects', value: 'projects'},
        {title: 'Blog', value: 'blog'},
        {title: 'Contacts', value: 'contacts'},
    ],
    social: [
        {title: 'gitHub', icon: <AiFillGithub color='#aab1b8' size={20}/>, url: 'https://github.com/DmitryYug'},
        {title: 'codeWars', icon: <SiCodewars color='#aab1b8' size={20}/>, url: 'https://www.codewars.com/users/DmitryYuganyuk'},
        {title: 'linkedIn', icon: <AiFillLinkedin color='#aab1b8' size={20}/>, url: 'https://www.linkedin.com/in/dmitriy-yuganuk/'},
        {title: 'facebook', icon: <AiFillFacebook color='#aab1b8' size={20}/>, url: 'https://www.facebook.com/dmitry.yuganuk'}
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
        date: '29.08.2000',
        url: 'http://some-url',
        stack: ['React', 'Less'],
        background: ntDevLanding,
        info: 'Web site for a company Im working in.',
        features: ['scroll navigation', 'react-router', 'native css and animate.css animation', 'progressive image loading'],
        demo: ntDevLandingDemo
    },
    {
        title: 'Dental clinic system',
        date: '29.08.2000',
        url: 'http://some-url',
        stack: ['Vue', 'Vue X'],
        background: ntDent,
        info: 'Big project with legacy codebase on Vue2. Includes handling of visits, finances, cure plans, store',
        features: ['Vue router', 'Vuetify', 'Custom plugin with helper reusable functions', 'Handling visual and system settings of app in localStorage with VueX'],
        demo: ntDentDemo
    },
    {
        title: 'Todo list',
        date: '29.08.2000',
        url: 'http://some-url',
        stack: ['React', 'Redux'],
        background: todolist,
        info: 'Every developer should have a TDL in portfolio.',
        features: ['Lorem ipsum dolor sit amet', 'consectetur adipisicing elit.' ,'Facilis, omnis!'],
        demo: tdlDemo
    },
    {
        title: 'Html module for a big system',
        date: '29.08.2000',
        url: 'http://some-url',
        stack: ['HTML', 'Less', 'JQuery'],
        background: rsg,
        info: 'Simple HTML project with jQuery UI elements logic',
        features: ['Lorem ipsum dolor sit',  'amet, consectetur',  'adipisicing elit', 'Exercitationem illo, modi', 'Aperiam at ex obcaecati!'],
        demo: rsgDemo
    },
]
export const blog: BlogCardTypes[] = [
    {
        title: 'Here will be smth smart',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis error eum facere fugit magni, necessitatibus officiis praesentium. ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis error eum facere fugit magni',
        background: blogTest,
        modalContent: {
            tags: ['tag 1', 'tag 2'],
            article: 'Lorem',
            date: '20.12.2022'
        }
    },
    {
        title: 'Here will be smth smart',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis error eum facere fugit magni, necessitatibus officiis praesentium. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, id! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis error eum facere fugit magni, necessitatibus officiis praesentium. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, id',
        background: blogTest,
        modalContent: {
            tags: ['tag 1', 'tag 2'],
            article: 'Lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid architecto at dignissimos distinctio earum eius excepturi harum, iusto modi molestiae neque, officiis perferendis praesentium quae quidem ratione reiciendis repudiandae sapiente sunt temporibus. Ad assumenda beatae consequatur cum dolore dolores dolorum earum eos eveniet exercitationem, iste libero minus natus, perferendis perspiciatis porro saepe temporibus unde veritatis voluptatum? Accusamus earum facere fuga odit officia pariatur tenetur unde voluptate? Ab accusantium, aliquam animi debitis deleniti dolorem doloremque ducimus eaque esse eum ex fuga ipsa laborum laudantium minus nam obcaecati officiis porro quaerat quam quas quia quibusdam quis quisquam quo reiciendis reprehenderit sequi sint sit vero! Deleniti fugit obcaecati officiis pariatur quod sapiente sequi veniam. Architecto atque consequuntur expedita, natus omnis perferendis temporibus tenetur.',
            date: '20.12.2022'
        }
    },
    {
        title: 'Here will be smth smart',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis error eum facere fugit magni, ',
        background: blogTest,
        modalContent: {
            tags: ['tag 1', 'tag 2'],
            article: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab adipisci, alias aliquid aperiam asperiores assumenda at atque aut beatae culpa delectus dignissimos distinctio ducimus eius eveniet excepturi ipsam magnam minima minus molestias natus, nobis nostrum odit officiis placeat possimus quaerat quis quisquam quos repellendus reprehenderit sapiente soluta totam vero vitae voluptatum! Deleniti distinctio eligendi enim esse, eum iure minima modi molestiae, nostrum porro quam quasi rem repellendus sint velit. Ad aliquam architecto autem delectus dicta doloremque dolorum eaque eos error exercitationem fugiat incidunt ipsum laboriosam nisi numquam odit officia, porro qui quia, repudiandae rerum sapiente sed tempora veritatis voluptatum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab adipisci, alias aliquid aperiam asperiores assumenda at atque aut beatae culpa delectus dignissimos distinctio ducimus eius eveniet excepturi ipsam magnam minima minus molestias natus, nobis nostrum odit officiis placeat possimus quaerat quis quisquam quos repellendus reprehenderit sapiente soluta totam vero vitae voluptatum! Deleniti distinctio eligendi enim esse, eum iure minima modi molestiae, nostrum porro quam quasi rem repellendus sint velit. Ad aliquam architecto autem delectus dicta doloremque dolorum eaque eos error exercitationem fugiat incidunt ipsum laboriosam nisi numquam odit officia, porro qui quia, repudiandae rerum sapiente sed tempora veritatis voluptatum.Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab adipisci, alias aliquid aperiam asperiores assumenda at atque aut beatae culpa delectus dignissimos distinctio ducimus eius eveniet excepturi ipsam magnam minima minus molestias natus, nobis nostrum odit officiis placeat possimus quaerat quis quisquam quos repellendus reprehenderit sapiente soluta totam vero vitae voluptatum! Deleniti distinctio eligendi enim esse, eum iure minima modi molestiae, nostrum porro quam quasi rem repellendus sint velit. Ad aliquam architecto autem delectus dicta doloremque dolorum eaque eos error exercitationem fugiat incidunt ipsum laboriosam nisi numquam odit officia, porro qui quia, repudiandae rerum sapiente sed tempora veritatis voluptatum.',
            date: '20.12.2022'
        }
    },
]