import React, {useEffect, useState} from 'react';
import './App.less';
import './styles/initial-styles/nullstyle.css'
import './styles/initial-styles/normalize.css'
import {Sidebar} from "./components/navigation/Sidebar";
import {AboutMe} from "./components/pages/about-me/AboutMe";
import {Cv} from "./components/pages/cv/Cv";
import {Projects} from "./components/pages/projects/Projects";
import {ContactForm} from "./components/pages/contacts/ContactForm";
import {Header} from "./components/navigation/Header";
import {Blog} from "./components/pages/blog/Blog";


function App() {

    const [deviceTypeClassName, setDeviceTypeClassName] = useState<string>('');

    useEffect(() => {
        if ("ontouchstart" in document.documentElement) {
            setDeviceTypeClassName('is-touch')
        }
    }, []);

    return (
        <>
            <Sidebar/>
            <Header/>
            <div className='layout'>
                <main>
                    <AboutMe/>
                    <Cv/>
                    <Projects/>
                    <Blog/>
                    <ContactForm/>
                </main>
            </div>
        </>
    );
}

export default App;
