import React from 'react';
import {SkillCardType} from "../../../types/Types";

export const SkillCard = (props: SkillCardType) => {

    const renderChildrenSkills = props.children.map((skill, ind) => {
       return ( <li key={ind}>{skill}</li>)
    })

    return (
        <div className='skills card-container'>
            <div className='icon'>
                {props.icon}
            </div>
            <div className='d-flex-col-start'>
                <h3 className='skills card-title'>{props.title}</h3>
                <ul className="skills card-description">
                    {renderChildrenSkills}
                </ul>
            </div>
        </div>
    );
}

