import React, {RefObject, useEffect} from 'react';

interface AboutMePropsType {
    setAboutMeRef: (ref: RefObject<HTMLDivElement>) => void
}

export const AboutMe:React.FC<AboutMePropsType> = ({setAboutMeRef}) => {

    const aboutMeRef = React.useRef<HTMLDivElement>(null)

    useEffect(() => {
        setAboutMeRef(aboutMeRef)
    }, [])

    return (
        <div ref={aboutMeRef} className='light-block-wrapper full-screen-height with-background-image'>
            <div className='content-block-container justify-center'>
                <div className='text-block'>
                    <span>Hi there</span>
                    <h1>I`m Dmitriy Yuganyuk</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci at dicta et facere inventore
                        laborum
                        laudantium magni necessitatibus nemo nesciunt officia praesentium quas quia quo repellendus sunt
                        suscipit temporibus, velit.
                    </p>
                </div>
            </div>
        </div>
    );
}

