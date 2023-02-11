import React from 'react';
import {SkillCard} from "./SkillCard/SkillCard";
import {Title} from "../../Title";
import {skills} from "../../../content";

interface SkillsPropsType {
}

export const Skills: React.FC<SkillsPropsType> = () => {


    return (
        <div id='skills' className='dark-block-wrapper full-screen-height'>
            <div className=' skills'>
                <Title title='Stack'
                       subtitle='Skills'
                />
                <div className='content skills-wrapper'>
                    <div className='content cards-wrapper'>
                        {skills.map((s, i) => {
                            return <SkillCard key={`${i} + ${s.title}`}
                                              title={s.title}
                                              icon={s.icon}
                                              childrenSkills={s.children}
                            />
                        })}
                    </div>
                    <div className='content education-wrapper'>
                        education will be here
                    </div>
                </div>
            </div>
        </div>
    );
}

