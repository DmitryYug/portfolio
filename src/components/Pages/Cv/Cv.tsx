import React from 'react';
import {SkillCard} from "./SkillCard";
import {Title} from "../../Title";
import {cv} from "../../../content";
import {EducationCard} from "./EducationCard";

interface CvPropsType {
}

export const Cv: React.FC<CvPropsType> = () => {

    const renderSkillCards = cv.skills.map((s, i) => {
        return <SkillCard key={`${i} + ${s.title}`}
                          title={s.title}
                          icon={s.icon}
                          children={s.children}
        />
    })

    const renderEducationCards = cv.education.map((e, i) => (
        <EducationCard title={e.title}
                       period={e.period}
                       speciality={e.speciality}
                       key={e.title + i}
        />
    ))

    return (
        <div id='cv' className='dark-block-wrapper full-screen-height'>
            <div className='cv'>
                <Title title='Stack'
                       subtitle='Cv'
                />
                <div className='content cv-wrapper'>
                    <div className='skills-wrapper'>
                        {renderSkillCards}
                    </div>
                    <div className='education-wrapper'>
                        {renderEducationCards}
                    </div>
                </div>
            </div>
        </div>
    );
}

