import * as React from 'react';
import {BlogCardTypes} from "../../../types/Types";
import {useState} from "react";

export const BlogCard = (props: BlogCardTypes) => {
    const [activeClass, setActiveClass] = useState<string>('');

    return (
        <div className='blog-card'
             onMouseEnter={() => setActiveClass('hovered')}
             onMouseLeave={() => setActiveClass('')}
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
    );
};