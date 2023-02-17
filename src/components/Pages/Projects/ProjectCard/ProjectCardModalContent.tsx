import React from 'react';
import {Carousel} from 'antd';

interface ProjectCardModalPropsType {
    content: {
        title: string
        stack: string[]
        background: string
        info: string
    }
}

export const ProjectCardModalContent = (props: ProjectCardModalPropsType) => {
    const onChange = (currentSlide: number) => {
        console.log(currentSlide);
    };

    const contentStyle: React.CSSProperties = {
        margin: 0,
        height: '160px',
        color: 'gray',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };

    return (
        <div className='project-card-modal-wrapper'>
            <h3>{props.content.title}</h3>
            <div className="slider-container">
                <Carousel afterChange={onChange}>
                    <div>
                        <h3 style={contentStyle}>1</h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>2</h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>3</h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>4</h3>
                    </div>
                </Carousel>
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
            </div>
        </div>
    );
}
