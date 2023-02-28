import * as React from 'react';
import {BsCalendar3} from "react-icons/bs";
import {SlTag} from "react-icons/sl";
import {MdClose} from "react-icons/md";

interface BlogArticleModalPropsType {
    articleImg: string
    title: string
    closeModalCb: () => void
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
                    margin: '0 20px 0 80px'
                }}
                ></div>
                <button onClick={props.closeModalCb}>
                    <MdClose color='#20c997' size={40}/>
                </button>
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
                        props.content.tags.map((tag, i) =>
                            <div key={i}>
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