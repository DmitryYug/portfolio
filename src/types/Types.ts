import React from "react";

export interface SkillCardType {
    title: string
    icon: React.ReactElement
    children: string[]
}

export interface ProjectCardType {
    title: string
    date: string
    url: string
    stack: string[]
    background: string
    info: string
    features: string[]
    demo: string
}

export interface EducationCardType {
    title: string
    period: string
    speciality: string
}
export interface ExperienceCardType {
    orgTitle: string
    period: string
    position: string
    duties: string[]
}
export interface BlogCardTypes {
    background: string
    title: string
    description: string
    modalContent: {
        tags: string[]
        article: string
        date: string
    }
}

