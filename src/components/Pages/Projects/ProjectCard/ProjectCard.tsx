import React, {useState} from 'react';

type ProjectCardPropsType = {
    title: string
    description: string
    stack: string[]
    background: string
}


export const ProjectCard = (props: ProjectCardPropsType) => {

    let [isActive, setIsActive] = useState<string>('')

    return (
        <div className='project-card'>
            <div className='container'>
                <div style={{backgroundImage: `url(${props.background})`}}
                     className='background'
                     onMouseEnter={() => setIsActive('active')}
                     onMouseLeave={() => setIsActive('')}
                >
                </div>
                <div className={`text-container ${isActive}`}>
                    <h3>{props.title}</h3>
                    <span>{props.stack.map(tech => tech)}</span>
                </div>
            </div>
        </div>

    );
}

