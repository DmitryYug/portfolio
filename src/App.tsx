import React, {useEffect} from 'react';
import './App.less';
import './styles/initial-styles/nullstyle.css'
import './styles/initial-styles/normalize.css'
import {Sidebar} from "./components/Navigation/Sidebar";
import {AboutMe} from "./components/Pages/AboutMe/AboutMe";
import {Cv} from "./components/Pages/Cv/Cv";
import {Projects} from "./components/Pages/Projects/Projects";
import {ContactForm} from "./components/Pages/Contacts/ContactForm";
import {Header} from "./components/Navigation/Header";


function App() {

    return (
        <>
            <Sidebar/>
            <Header/>
            <div className='layout'>
                <main>
                    <AboutMe/>
                    <Cv/>
                    <Projects/>
                    {/*<OnlineJob/>*/}
                    <ContactForm/>
                </main>
            </div>
        </>
    );
}

export default App;
