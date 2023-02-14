import React, {useState} from 'react';

type ProjectCardPropsType = {
    title: string
    description: string
    stack: string[]
    background: string
}


export const ProjectCard = (props: ProjectCardPropsType) => {


    let cardContainerStyles: React.CSSProperties = {
        backgroundImage: `url(${props.background})`,
        transition: 'all 1 s',
        content: "",
        position: 'absolute',
        top: '0',
        left: '0',
        right: '50%',
        bottom: '0',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'none',
        boxShadow: '5px 5px 5px #212529',
        borderRadius: '10px',
    }

    let cardContainerStylesHovered: React.CSSProperties = {
        backgroundImage: `url(${props.background})`,
        transition: 'all 1 s',
        content: "",
        position: 'absolute',
        top: '0',
        left: '0',
        right: '50%',
        bottom: '0',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'blur(3px)',
        borderRadius: '10px',
    }

    let [currentStyles, setCurrentStyles] = useState<React.CSSProperties>(cardContainerStyles)

    return (
        <>
            <div style={currentStyles}
                 onMouseEnter={() => setCurrentStyles(cardContainerStylesHovered)}
            >
                :before
            </div>
            <div className='project-card container'>
                <h3>{props.title}</h3>
                {/*<img src={props.background} alt=""/>*/}
            </div>
        </>

    );
}

