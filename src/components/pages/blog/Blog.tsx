import React from 'react';
import {Title} from "../../Title";
import {blog} from "../../../content";
import {BlogCard} from "./BlogCard";

interface BlogPropsType {
}

export const Blog: React.FC<BlogPropsType> = () => {

    const blogCardsRender = blog.map(card =>
        <BlogCard
            title={card.title}
            description={card.description}
            background={card.background}
        />
    )

    return (
        <div id='blog' className='dark-block-wrapper full-screen-height'>
            <Title title='Articles'
                   subtitle='My blog'
            />
            <div className="content">
                <div className="blog-cards-wrapper">
                    {blogCardsRender}
                </div>
            </div>
        </div>
    );
}

