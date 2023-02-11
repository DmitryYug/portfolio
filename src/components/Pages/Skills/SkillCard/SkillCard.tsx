import React from 'react';

type SkillCardPropsType = {
    title: string
    icon: React.ReactElement
    childrenSkills: string[]
}
export const SkillCard = (props: SkillCardPropsType) => {

    const renderChildrenSkills = props.childrenSkills.map((skill, ind) => (
        <li key={ind}>{skill}</li>
    ))

    return (
        <div className='card-container'>
            <div className='icon'>
                {props.icon}
            </div>
            <div className='d-flex-col-start'>
                <h3 className='card-title'>{props.title}</h3>
                <ul className="card-description">
                    {renderChildrenSkills}
                </ul>
            </div>
        </div>
    );
}

