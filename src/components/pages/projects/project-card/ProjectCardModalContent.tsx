import React, {useEffect, useState} from "react";
import {MdClose} from "react-icons/md";
import {ProjectCardType} from "../../../../types/Types";
import {Spin} from "antd";

interface ProjectCardModalPropsType {
    closeModalCb: () => void;
    content: ProjectCardType;
}

export const ProjectCardModalContent = (props: ProjectCardModalPropsType) => {

    const [isDemoLoading, setIsDemoLoading] = useState<boolean>(true)

    return (
        <div className="projects-card-modal-wrapper">
            <h3>{props.content.title}</h3>
            <button onClick={props.closeModalCb}>
                <MdClose color="#20c997" size={30}/>
            </button>
            <div className="info-block">
                <div className="video-block">
                    {isDemoLoading ? <Spin className='loader' size="large"/> : null}
                    <video autoPlay loop
                           onLoadedData={() => setIsDemoLoading(false)}

                    >
                        <source src={props.content.demo}/>
                    </video>
                </div>
                <div className="text-container">
                    <div className="item">
                        <label htmlFor="url"> Deployment link:</label>
                        <a href={props.content.deployUrl}
                           id="url"
                           target='_blank'
                        >
                            {props.content.deployUrl}
                        </a>
                    </div>
                    <div className="item">
                        <label htmlFor="url"> Repository link:</label>
                        <a href={props.content.repositoryUrl}
                           id="url"
                           target='_blank'
                        >
                            {props.content.repositoryUrl}
                        </a>
                    </div>
                    <div className="item">
                        <label htmlFor="info">Info:</label>
                        <p id="info">{props.content.info}</p>
                    </div>
                    <div className="item">
                        <label htmlFor="stackList">Stack:</label>
                        <ul id="stackList">
                            {props.content.stack.map((tech, ind) =>
                                <li key={ind}>{tech}</li>
                            )}
                        </ul>
                    </div>
                    <div className="item">
                        <label htmlFor="features">Features:</label>
                        <ul id="features">
                            {props.content.features.map((tech, ind) =>
                                <li key={ind}>{tech}</li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
