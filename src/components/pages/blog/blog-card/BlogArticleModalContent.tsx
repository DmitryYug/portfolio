import * as React from 'react';
import {BsCalendar3} from "react-icons/bs";
import {SlTag} from "react-icons/sl";
import {GrClose} from "react-icons/gr";

interface BlogArticleModalPropsType {
    articleImg: string
    title: string
    content: {
        tags: string[]
        article: string
        date: string
    }
}

export const BlogArticleModalContent = (props: BlogArticleModalPropsType) => {

    return (
        <>
            <div className="article-header-image">
                <div style={{
                    backgroundImage: `url(${props.articleImg})`,
                    backgroundSize: 'cover',
                    height: '200px',
                    width: '100%',
                    margin: '0 80px'
                }}
                ></div>
                <GrClose color='#20c997' size={30}/>
            </div>
            <div className="article-header">
                <h4>{props.title}</h4>
                <div className='date'>
                    <BsCalendar3 color='#20c997'
                                 size={20}
                    />
                    <span>{props.content.date}</span>
                </div>
                <div className='tags'>
                    {
                        props.content.tags.map(tag =>
                            <div>
                                <SlTag color='#20c997' size={15}/>
                                <span>{tag}</span>
                            </div>
                        )
                    }
                </div>
            </div>

            <p>
                {props.content.article}
            </p>
        </>

    )
};