import * as React from 'react';
import {ExperienceCardType} from "../../../types/Types";

type ExperienceTimelineItemPropsTypes = ExperienceCardType;
export const ExperienceTimelineItem = (props: ExperienceTimelineItemPropsTypes) => {
    return (
        <div className='experience item-wrapper'>
            <div className="organisation-title">
                {props.orgTitle}
            </div>
            <div className="period">
                {props.period}
            </div>
            <div className="position">
                {props.position}
            </div>
            <ul className="duties">
                {props.duties.map((d,i) => (<li key={i}>{d}</li>))}
            </ul>
        </div>
    );
};