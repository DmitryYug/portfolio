import React from 'react';
import {MdClose} from "react-icons/md";
import {BsCalendar3} from "react-icons/bs";
import {ProjectCardType} from "../../../../types/Types";

interface ProjectCardModalPropsType {
    closeModalCb: () => void
    content: ProjectCardType
}

export const ProjectCardModalContent = (props: ProjectCardModalPropsType) => {

    return (
        <div className='projects-card-modal-wrapper'>
            <div className='d-flex-space-between'>
                <h3>{props.content.title}</h3>
                <button onClick={props.closeModalCb}>
                    <MdClose color='#20c997' size={30}/>
                </button>
            </div>
            <div className='info-block'>
                <div className='d-flex-col-start'>
                    <video autoPlay loop>
                        <source src={props.content.demo}/>
                    </video>
                    <div className='date'>
                        <BsCalendar3 color='#20c997'
                                     size={20}
                        />
                        <span>{props.content.date}</span>
                    </div>
                    <div className="url">
                        <label htmlFor="url">Url:</label>
                        <span id='url'>{props.content.url}</span>
                    </div>
                </div>
                <div className='text-container'>
                    <div className="item">
                        <label htmlFor="info">Info:</label>
                        <p id='info'>{props.content.info}</p>
                    </div>
                    <div className="item">
                        <label htmlFor="stackList">Stack:</label>
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
        </div>
    );
}
