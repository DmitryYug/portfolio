import React from 'react';
import styles from './Skills.module.css';
import reusableStyles from '../Common/Styles/Reusabale.module.css';
import {SkillCard} from "./SkillCard/SkillCard";
import {Title} from "../Common/Title/Title";


export const Skills = () => {

    const skills = [
        {title: 'JS', description: 'Lorem ipsum dolor sit amet.'},
        {title: 'CSS', description: 'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, saepe?.'},
        {title: 'React', description: 'Lorem ipsum dolor sit amet Lorem ipsum dolor sit '}
    ]

    return (
        <div className={`${reusableStyles.block} ${styles.skillsBlock}`}>
            <div className={`${reusableStyles.container} ${reusableStyles.flexColumn}`}>
                <Title title={'Skills'}/>
                <div className={reusableStyles.cardContainer}>
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

