import React, {useState} from 'react';
import {SkillCard} from "./SkillCard";
import {EducationCard} from "./EducationCard";
import {Collapse, Timeline} from 'antd';
import {ExperienceTimelineItem} from "./ExperienceTimelineItem";
import {Title} from "../../Title";
import {cv} from "../../../content";


interface CvPropsType {
}

export const Cv: React.FC<CvPropsType> = () => {

    const [activePanel, setActivePanel] = useState<string | string[]>('skills');

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

    const renderExperienceTimeline = cv.experience.map((exp, ind) => (
        <Timeline.Item color='#1baa80'
                       key={ind}
        >
            <ExperienceTimelineItem period={exp.period}
                                    duties={exp.duties}
                                    orgTitle={exp.orgTitle}
                                    position={exp.position}
            />
        </Timeline.Item>
    ))

    const renderCardsHandler = (card: string) => {
        if (card === 'skills') {
            return renderSkillCards
        }
        if (card === 'education') {
            return renderEducationCards
        }
        if (card === 'experience') {
            return (
                <Timeline>
                    {renderExperienceTimeline}
                </Timeline>
            )
        }
    }

    const renderCollapseItems = Object.entries(cv).map(([key, value], ind) => (
        <Collapse.Panel header={key}
                        key={key}
                        className='accordion-panel'
        >
            <div className={`${key}-wrapper`}>
                {renderCardsHandler(key)}
            </div>
        </Collapse.Panel>
    ));

    return (
        <div id='cv' className='dark-block-wrapper full-screen-height'>
            <div className='cv'>
                <Title title={activePanel || 'about me'}
                       subtitle='Cv'
                />
                <p className='content'>
                    I am a skilled front-end engineer with 3 years of experience,
                    specializing in creating web interfaces using React, Vue, TypeScript, and JavaScript.
                    Available for project-based work, part-time engagements, and personal mentoring. Open to considering full-time offers.
                </p>
                <div className='content cv-wrapper'>
                    <Collapse defaultActiveKey={['skills']}
                              onChange={(key: string | string[]) => setActivePanel(key)}
                              accordion ghost
                              className='accordion'
                    >
                        {renderCollapseItems}
                    </Collapse>
                </div>
                <a href={'https://drive.google.com/file/d/1qDerKsP8HvxlB1Ty-PpNPMptFhS6Vt9y/view?usp=sharing'}
                   target='_blank'
                   rel="noreferrer"

                   className='my-button is-rounded is-green'
                   style={{marginTop: '30px', fontSize: '22px'}}
                >
                    Download CV
                </a>
            </div>
        </div>
    );
}

