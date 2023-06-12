import {BlogCardTypes, EducationCardType, ExperienceCardType, ProjectCardType, SkillCardType} from "./types/Types";
import React from "react";
//icons
import {RiReactjsFill, RiVuejsLine} from "react-icons/ri";
import {DiJavascript1} from "react-icons/di";
import {AiFillFacebook, AiFillGithub, AiFillLinkedin, AiOutlineHtml5} from "react-icons/ai";
//images
import ntDevLanding from "./assets/project-cards/nt-dev-landing/cover.png";
import rsg from "./assets/project-cards/rsg/cover.png";
import cardProject from "./assets/project-cards/cardsProject/cover.png";
import contactsProject from "./assets/project-cards/contactsProject/cover.png";

import blogTest from "./assets/blog-cards/blog-test.jpeg";
//videos
import ntDevLandingDemo from "./assets/project-cards/nt-dev-landing/demo.mp4";
import rsgDemo from "./assets/project-cards/rsg/demo.mp4";
import cardProjectDemo from "./assets/project-cards/cardsProject/demo.mp4";
import contactsProjectDemo from "./assets/project-cards/contactsProject/demo1.mp4";

interface CvBlockDataType {
    skills: SkillCardType[]
    education: EducationCardType[]
    experience: ExperienceCardType[]
}

interface LinksTypes {
    navigation: { title: string, value: string }[]
    social: { title: string, icon: React.ReactElement, link: string }[]
}

export const links: LinksTypes = {
    navigation: [
        {title: 'CV', value: 'cv'},
        {title: 'Projects', value: 'projects'},
        // {title: 'Blog', value: 'blog'},
        {title: 'Contacts', value: 'contacts'},
    ],
    social: [
        {title: 'gitHub', icon: <AiFillGithub color='#aab1b8' size={20}/>, link: 'https://github.com/DmitryYug'},
        {title: 'linkedIn', icon: <AiFillLinkedin color='#aab1b8' size={20}/>, link: 'https://linkedin.com/in/dmitriy-yuganuk/'},
        {title: 'facebook', icon: <AiFillFacebook color='#aab1b8' size={20}/>, link: 'https://facebook.com/dmitry.yuganuk.39'}
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
        {
            title: 'Ulbi school',
            period: '2023-2023',
            speciality: 'Front-end for senior engineers'
        },
    ],
    experience: [
        {
            orgTitle: 'Freelance',
            period: '2020-2022',
            position: 'Frontend developer',
            duties: [
                'Developed over 20 fast and SEO-optimized websites, delivering high-quality results',
                'Collaborated effectively with backend engineers to create single-page applications (SPAs) tailored to meet client requirements',
                'Ensured comprehensive test coverage, contributing to the overall quality and stability of the projects'
            ]
        },
        {
            orgTitle: 'NT development',
            period: '2022- 2023',
            position: 'Frontend engineer',
            duties: [
                'Successfully collaborated as a front-end developer, both independently and as part of a team, on a project',
                'Demonstrated proficiency in decomposing tasks and efficiently implementing new features',
                'Achieved significant performance improvements for the web app, resulting in enhanced user experience'
            ]
        },
    ]
}

export const projects: ProjectCardType[] = [
    {
        title: 'Web site for IT company',
        deployUrl: 'https://dmitryyug.github.io/nt-dev-landing-lorem/',
        repositoryUrl: 'https://github.com/DmitryYug/nt-dev-landing-lorem',
        stack: ['React', 'Less', 'Firebase'],
        background: ntDevLanding,
        info: 'Web site for a company I`ve been working in',
        features: ['scroll navigation', 'react-router', 'complex animations', 'progressive image loading', 'adaptive'],
        demo: ntDevLandingDemo
    },
    {
        title: 'App with info cards for beer company',
        deployUrl: 'https://dmitryyug.github.io/vicuesoft/',
        repositoryUrl: 'https://github.com/DmitryYug/vicuesoft',
        stack: ['React', 'TypeScript'],
        background: cardProject,
        info: 'React SPA with routing. TypeScript. API sandbox. State management - Redux',
        features: ['routing', 'pagination', 'api search'],
        demo: cardProjectDemo
    },
    {
        title: 'Private page with contacts, available after authorization',
        deployUrl: 'https://dmitryyug.github.io/takeoff-staff/',
        repositoryUrl: 'https://github.com/DmitryYug/takeoff-staff',
        stack: ['React', 'TypeScript'],
        background: contactsProject,
        info: 'React SPA with protected routing. TypeScript. Mock json placeholder data. Redux. CRUD operations with contacts',
        features: ['authorisation', 'protected routing', 'CRUD operations with contacts', 'MaterialUI'],
        demo: contactsProjectDemo
    },
    {
        title: 'Html module for an enterprise system',
        deployUrl: 'https://dmitryyug.github.io/RSG/',
        repositoryUrl: 'https://github.com/DmitryYug/RSG',
        stack: ['HTML', 'Less', 'JQuery'],
        background: rsg,
        info: 'HTML project with jQuery UI elements logic',
        features: ['slider',  'modal windows',  'accordions', 'date pickers', 'forms'],
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