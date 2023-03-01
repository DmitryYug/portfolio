import * as React from 'react';
import {useState} from 'react';
import {BlogCardTypes} from "../../../../types/Types";
import {Modal} from "antd";
import {BlogArticleModalContent} from "./BlogArticleModalContent";

export const BlogCard = (props: BlogCardTypes) => {
    const [activeClass, setActiveClass] = useState<string>('');
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    return (
        <div className='blog-card mouse-prevent-wrapper'>
            <div className="blog-card"
                 onMouseEnter={() => setActiveClass('hovered')}
                 onMouseLeave={() => setActiveClass('')}
                 onClick={() => setIsModalOpen(true)}
            >
                <div className="overflow-wrapper">
                    <div className={`image-container ${activeClass}`}
                         style={{backgroundImage: `url(${props.background})`}}
                    >
                    </div>
                </div>
                <div className="divider"></div>
                <div className="details">
                    <h4 className="title">{props.title}</h4>
                    <p className="description">
                        {props.description}
                    </p>
                </div>
            </div>
            <Modal title={null}
                   open={isModalOpen}
                   footer={null}
                   wrapClassName={'blog-modal'}
                   width={'100%'}
                   style={{top: 10}}
                   modalRender={() =>
                       <BlogArticleModalContent content={props.modalContent}
                                                articleImg={props.background}
                                                title={props.title}
                                                closeModalCb={() => setIsModalOpen(false)}
                       />}
            />

        </div>
    );
};