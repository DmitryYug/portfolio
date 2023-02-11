import React from "react";

export interface SkillCardType {
    title: string
    icon: React.ReactElement
    children: string[]
}

export interface ProjectCardType {
    title: string
    description: string
}

export interface EducationCardType {
    title: string
    period: string
    speciality: string
}

