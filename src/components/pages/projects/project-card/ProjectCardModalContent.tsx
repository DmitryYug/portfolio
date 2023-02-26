import React from 'react';

interface ProjectCardModalPropsType {
    content: {
        title: string
        stack: string[]
        background: string
        info: string
        features: string[]
        demo: string
    }
}

export const ProjectCardModalContent = (props: ProjectCardModalPropsType) => {

    return (
        <div className='projects-card-modal-wrapper'>
            <h3>{props.content.title}</h3>
            <div className="slider-container">

                <video autoPlay loop>
                    <source src={props.content.demo} />
                </video>

            </div>
            <div className='text-container'>
                <div className="item">
                    <label htmlFor="info">Info:</label>
                    <p id='info'>{props.content.info}</p>
                </div>
                <div className="item">
                    <label htmlFor="stackList">Technologies:</label>
                    <ul id='stackList'>
                        {props.content.stack.map((tech, ind) =>
                            <li key={ind}>{tech}</li>
                        )}
                    </ul>
                </div>
                <div className="item">
                    <label htmlFor="features">Features:</label>
                    <ul id='features'>
                        {props.content.features.map((tech, ind) =>
                            <li key={ind}>{tech}</li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
}
