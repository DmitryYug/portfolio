import React, {RefObject, useEffect, useState} from 'react';
import './App.less';
import {Sidebar} from "./components/Sidebar/Sidebar";
import {AboutMe} from "./components/Pages/AboutMe/AboutMe";
import {Skills} from "./components/Pages/Skills/Skills";
import {Projects} from "./components/Pages/Projects/Projects";
import {OnlineJob} from "./components/Pages/OnlineJob/OnlineJob";
import {Contacts} from "./components/Pages/Contacts/Contacts";
import {Footer} from "./components/Footer/Footer";

function App() {

    let [currentRefName, setCurrentRefName] = useState<string>()
    let [skillsRef, setSkillsRef] = useState<RefObject<HTMLDivElement>>()
    let [aboutMeRef, setAboutMeRef] = useState<RefObject<HTMLDivElement>>()

    useEffect(() => {
        scrollToCurrentRef();
    }, [currentRefName])

    const scrollToCurrentRef = () => {
        if (currentRefName === 'skills') {
            scrollTo(skillsRef)
        }
        if (currentRefName === 'aboutMe') {
            scrollTo(aboutMeRef)
        }
    }

    const scrollTo = (ref: React.RefObject<HTMLDivElement> | undefined) => {
        window.scrollTo({
            top: ref?.current?.offsetTop,
            behavior: 'smooth',
        });
    };

    return (
        <div className='layout'>
            <Sidebar getCurrentRef={(value) => setCurrentRefName(value)}/>
            <div>
                <AboutMe setAboutMeRef={(ref) => setAboutMeRef(ref)}/>
                <Skills setSkillsRef={(ref) => setSkillsRef(ref)}/>
                {/*<Projects/>*/}
                {/*<OnlineJob/>*/}
                {/*<Contacts/>*/}
                {/*<Footer/>*/}
            </div>
        </div>
    );
}

export default App;
