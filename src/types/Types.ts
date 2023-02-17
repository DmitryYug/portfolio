import React from "react";

export interface SkillCardType {
    title: string
    icon: React.ReactElement
    children: string[]
}

export interface ProjectCardType {
    title: string
    stack: string[]
    background: string
    info: string
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

