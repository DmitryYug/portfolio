import React, {useState} from 'react';
import {Title} from "../../Title";
import {blog} from "../../../content";
import {BlogCard} from "./blog-card/BlogCard";
import {BlogArticleModalContent} from "./blog-card/BlogArticleModalContent";

interface BlogPropsType {
}

export const Blog: React.FC<BlogPropsType> = () => {

    const [modalState, setModalState] = useState<string>('');

    const blogCardsRender = blog.map(card =>
        <BlogCard
            title={card.title}
            description={card.description}
            background={card.background}
            modalContent={card.modalContent}
            // onClickHandler={() => setModalState('visible')}
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
            {/*<BlogArticleModalContent title='title'*/}
            {/*                  modalState={modalState}*/}
            {/*                  articleImg='img path'*/}
            {/*                  date='24.02.2023'*/}
            {/*                  tags={['tag 1', 'tag 2']}*/}
            {/*/>*/}
        </div>
    );
}

