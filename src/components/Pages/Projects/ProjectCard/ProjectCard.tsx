import React, {useState} from 'react';
import {Modal} from "antd";
import {ProjectCardModalContent} from "./ProjectCardModalContent";

type ProjectCardPropsType = {
    title: string
    stack: string[]
    background: string
    info: string
}


export const ProjectCard = (props: ProjectCardPropsType) => {

    let [isActive, setIsActive] = useState<string>('')
    const [isModalOpen, setIsModalOpen] = useState(false);

    const modalBodyStyles = {
        background: '#212529',
        padding: '0'
    }
    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (

        <div className='project-card'>
            <div className='container'>
                <div style={{backgroundImage: `url(${props.background})`}}
                     className='background'
                     onMouseEnter={() => setIsActive('active')}
                     onMouseLeave={() => setIsActive('')}
                     onClick={showModal}
                >
                </div>

                <Modal title={null}
                       open={isModalOpen}
                       onOk={handleOk}
                       onCancel={handleCancel}
                       footer={null}
                       bodyStyle={modalBodyStyles}
                       modalRender={() => <ProjectCardModalContent content={props}/>}
                />

                <div className={`text-container ${isActive}`}>
                    <div className='d-flex-col-center'>
                        <div className='title'>{props.title}</div>
                        <ul className='stack'>
                            {props.stack.map((tech, i) =>
                                <li key={i}>{tech}</li>
                            )
                            }
                        </ul>
                    </div>
                    <span>Click for more...</span>
                </div>
            </div>
        </div>

    );
}

