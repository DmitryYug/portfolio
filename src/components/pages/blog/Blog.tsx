import React, {useState} from 'react';
import {Title} from "../../Title";
import {blog} from "../../../content";
import {BlogCard} from "./blog-card/BlogCard";
import {BlogArticleModalContent} from "./blog-card/BlogArticleModalContent";

interface BlogPropsType {
}

export const Blog: React.FC<BlogPropsType> = () => {

    const blogCardsRender = blog.map((card, i) =>
        <BlogCard
            key={card.title + i}
            title={card.title}
            description={card.description}
            background={card.background}
            modalContent={card.modalContent}
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

