import React from 'react';
import {EducationCardType} from "../../../types/Types";

export const EducationCard = (props: EducationCardType) => {

    return (
        <div className='education card-container'>
            <div className='period'>
                {props.period}
            </div>
            <div className='org-title'>
                {props.title}
            </div>
            <div className="speciality">
                {props.speciality}
            </div>
        </div>
    );
};
