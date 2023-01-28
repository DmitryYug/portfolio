import React from 'react';
import './App.less';
import './styles/initial-styles/nullstyle.css'
import './styles/initial-styles/normalize.css'
import {Sidebar} from "./components/Sidebar/Sidebar";
import {AboutMe} from "./components/Pages/AboutMe/AboutMe";
import {Skills} from "./components/Pages/Skills/Skills";
import {Projects} from "./components/Pages/Projects/Projects";
import {Contacts} from "./components/Pages/Contacts/Contacts";


function App() {

    return (
        <div className='layout'>
            <Sidebar/>
            <main>
                <AboutMe/>
                <Skills/>
                <Projects/>
                {/*<OnlineJob/>*/}
                <Contacts/>
            </main>
        </div>
    );
}

export default App;
