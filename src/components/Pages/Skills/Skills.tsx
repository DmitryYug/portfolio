import React, {RefObject, useEffect} from 'react';
import {SkillCard} from "./SkillCard/SkillCard";
import {Title} from "../../Title";
import vueIcon from "../../../assets/icons/skill-card/vue.svg"
import reactIcon from "../../../assets/icons/skill-card/react.png"
import htmlIcon from "../../../assets/icons/skill-card/html.svg"
import jslIcon from "../../../assets/icons/skill-card/js.svg"

interface SkillsPropsType {
    setSkillsRef: (ref: RefObject<HTMLDivElement>) => void
}

export const Skills: React.FC<SkillsPropsType> = ({setSkillsRef}) => {

    const skillsRef = React.useRef<HTMLDivElement>(null)

    useEffect(() => {
        setSkillsRef(skillsRef)
    }, [])

    const skills = [
        {title: 'JS', icon: jslIcon, description: 'Lorem ipsum dolor sit amet.'},
        {title: 'HTML/CSS', icon: htmlIcon, description: 'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, saepe?.'},
        {title: 'React', icon: reactIcon, description: 'Lorem ipsum dolor sit amet Lorem ipsum dolor sit '},
        {title: 'Vue', icon: vueIcon, description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium aliquid commodi deserunt enim inventore iusto minima quibusdam similique voluptatum!'}
    ]

    return (
        <div ref={skillsRef} className='dark-block-wrapper full-screen-height'>
            <div className='content-block-container is-flex-column'>
                <Title title='Stack'
                       subtitle='Skills'
                />
                <div className='card-wrapper'>
                    {skills.map((s, i) => {
                        return <SkillCard
                            key={`${i} + ${s.title}`}
                            title={s.title}
                            description={s.description}
                            icon={s.icon}
                        />
                    })}
                </div>
            </div>
        </div>
    );
}

