import React from 'react';
import './App.less';
import {Sidebar} from "./components/Sidebar/Sidebar";
import {AboutMe} from "./components/Pages/AboutMe/AboutMe";
import {Skills} from "./components/Pages/Skills/Skills";
import {Projects} from "./components/Pages/Projects/Projects";
import {OnlineJob} from "./components/Pages/OnlineJob/OnlineJob";
import {Contacts} from "./components/Pages/Contacts/Contacts";
import {Footer} from "./components/Footer/Footer";

function App() {
    return (
        <div className='layout'>
            <Sidebar/>
            <div>
                <AboutMe/>
                <Skills/>
                {/*<Projects/>*/}
                {/*<OnlineJob/>*/}
                {/*<Contacts/>*/}
                {/*<Footer/>*/}
            </div>
        </div>
    );
}

export default App;
