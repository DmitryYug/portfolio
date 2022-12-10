import React from 'react';
import {SkillCard} from "./SkillCard/SkillCard";
import {Title} from "../../Title";


export const Skills = () => {

    const skills = [
        {title: 'JS', description: 'Lorem ipsum dolor sit amet.'},
        {title: 'CSS', description: 'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, saepe?.'},
        {title: 'React', description: 'Lorem ipsum dolor sit amet Lorem ipsum dolor sit '}
    ]

    return (
        <div className='dark-block-wrapper full-screen-height with-background-image'>
            <div className='content-block-container justify-center is-flex-column'>
                <Title title='Skills'/>
                <div className='card-wrapper'>
                    {skills.map((s, i) => {
                        return <SkillCard
                            key={i}
                            title={s.title}
                            description={s.description}
                        />
                    })}
                </div>
            </div>
        </div>
    );
}

