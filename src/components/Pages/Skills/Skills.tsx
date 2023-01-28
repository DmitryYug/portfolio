import React, {RefObject, useEffect} from 'react';
import {SkillCard} from "./SkillCard/SkillCard";
import {Title} from "../../Title";
import vueIcon from "../../../assets/icons/skill-card/vue.svg"
import reactIcon from "../../../assets/icons/skill-card/react.png"
import htmlIcon from "../../../assets/icons/skill-card/html.svg"
import jslIcon from "../../../assets/icons/skill-card/js.svg"

interface SkillsPropsType {
}

export const Skills: React.FC<SkillsPropsType> = () => {

    const skills = [
        {
            title: 'JS',
            icon: jslIcon,
            children: ['TypeScript', 'jQuery', 'Solid', 'Kiss', 'Dry', 'REST API']
        },
        {
            title: 'HTML/CSS',
            icon: htmlIcon,
            children: ['SASS/Less', 'Adaptive', 'Semantics', 'Web Standards']
        },
        {
            title: 'React',
            icon: reactIcon,
            children: ['Redux', 'React Query', 'FLUX', 'TDD/Unit tests', 'StoryBook', 'UI libraries']
        },
        {
            title: 'Vue',
            icon: vueIcon,
            children: ['VueX', 'Vuetify']
        }
    ]

    return (
        <div id='skills' className='dark-block-wrapper full-screen-height'>
            <div className='skills-block-container'>
                <Title title='Stack'
                       subtitle='Skills'
                />
                <div className='card-wrapper'>
                    {skills.map((s, i) => {
                        return <SkillCard key={`${i} + ${s.title}`}
                                          title={s.title}
                                          icon={s.icon}
                                          childrenSkills={s.children}
                        />
                    })}
                </div>
            </div>
        </div>
    );
}

