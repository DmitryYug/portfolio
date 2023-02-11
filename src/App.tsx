import React from 'react';
import './App.less';
import './styles/initial-styles/nullstyle.css'
import './styles/initial-styles/normalize.css'
import {Sidebar} from "./components/Navigation/Sidebar";
import {AboutMe} from "./components/Pages/AboutMe/AboutMe";
import {Skills} from "./components/Pages/Skills/Skills";
import {Projects} from "./components/Pages/Projects/Projects";
import {ContactForm} from "./components/Pages/Contacts/ContactForm";
import {Header} from "./components/Navigation/Header";


function App() {

    return (
        <>
            git account test
            <Sidebar/>
            <Header/>
            <div className='layout'>
                <main>
                    <AboutMe/>
                    <Skills/>
                    <Projects/>
                    {/*<OnlineJob/>*/}
                    <ContactForm/>
                </main>
            </div>
        </>
    );
}

export default App;
