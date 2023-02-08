import React, {useEffect} from 'react';


type SkillCardPropsType = {
    title: string
    icon: string
    childrenSkills: string[]
}
export const SkillCard = (props: SkillCardPropsType) => {

    useEffect(() => {
        console.log(typeof (props.icon))
    }, [])

    const renderChildrenSkills = props.childrenSkills.map(skill => (
        <li>{skill}</li>
    ))

    return (
        <div className='card-container'>
            <div className='icon'>
                <img src={props.icon} alt=""/>
            </div>
            <h3 className='card-title'>{props.title}</h3>
            <ul className="card-description">
                {renderChildrenSkills}
            </ul>
        </div>
    );
}

