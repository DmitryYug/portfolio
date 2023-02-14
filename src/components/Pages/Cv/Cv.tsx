import React, {useState} from 'react';
import {SkillCard} from "./SkillCard";
import {Title} from "../../Title";
import {cv} from "../../../content";
import {EducationCard} from "./EducationCard";
import {Collapse, Timeline} from 'antd';
import {ExperienceTimelineItem} from "./ExperienceTimelineItem";


interface CvPropsType {
}

export const Cv: React.FC<CvPropsType> = () => {

    const [activePanel, setActivePanel] = useState<string | string[]>('skills');

    const activePanelHandler = (e: string) => {
        setActivePanel(e)
        // switch (e) {
        //     case '1':
        //         setActivePanel('skills')
        //         break
        //     case '2':
        //         setActivePanel('education')
        //         break
        //     case '3':
        //         setActivePanel('experience')
        //         break
        //     default:
        //         break
        // }
    }

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
        <Timeline.Item color='#1baa80'>
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
                    Front-end developer with 2 years experience of creating SPA with React/Redux and Vue/VueX.
                    Interested
                    in new technologies, now NodeJS is in my to do. Improve knowledge of Computer Science, used to
                    codewars work out before working day. Hobbies are basketball, box and movies.
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
            </div>
        </div>
    );
}

