import React, {useState} from 'react';
import MyButton from "../../../MyButton";

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
                    <div className='d-flex-col-center'>
                        <div className='title'>{props.title}</div>
                        <ul className='stack'>{props.stack.map(tech => <li>{tech}</li>)}</ul>
                    </div>
                    <span>Click for more...</span>
                </div>
            </div>
        </div>

    );
}

