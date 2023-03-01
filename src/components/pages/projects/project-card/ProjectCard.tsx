import React, {useContext, useState} from 'react';
import {Modal} from "antd";
import {ProjectCardModalContent} from "./ProjectCardModalContent";
import {ProjectCardType} from "../../../../types/Types";
import {Context} from "../../../../types/Context";

export const ProjectCard = (props: ProjectCardType) => {

    let [isActive, setIsActive] = useState<string>('')
    const [isModalOpen, setIsModalOpen] = useState(false);
    const device = useContext<string>(Context)

    return (
        <div className='projects-card'>
            <div className='container'>
                <div style={{backgroundImage: `url(${props.background})`}}
                     className='background'
                     onMouseEnter={() =>  setIsActive('active')}
                     onMouseLeave={() =>  setIsActive('')}
                     onClick={() => (device !== 'is-touch') && setIsModalOpen(true)}
                     onDoubleClick={() => (device === 'is-touch') && setIsModalOpen(true)}
                >
                </div>
                <div className={`text-container ${isActive}`}>
                    <div className='d-flex-col-center'>
                        <div className='title'>{props.title}</div>
                        <ul className='stack'>
                            {
                                props.stack.map((tech, i) =>
                                    <li key={i}>{tech}</li>
                                )
                            }
                        </ul>
                    </div>
                    <span>{ device === 'is-touch' ? 'Double click for more...' : 'Click for more...'}</span>
                </div>
            </div>

            <Modal title={null}
                   open={isModalOpen}
                   footer={null}
                   width={'80%'}
                   style={{ top: '20px'}}
                   modalRender={() =>
                       <ProjectCardModalContent content={props}
                                                closeModalCb={() => setIsModalOpen(false)}
                       />}
            />

        </div>

    );
}

