import React from 'react';
import './App.css';
import {Header} from "./Header/Header";
import {Main} from "./Main/Main";
import {Skills} from "./Skills/Skills";
import {Projects} from "./Projects/Projects";
import {OnlineJob} from "./OnlineJob/OnlineJob";
import {Contacts} from "./Contacts/Contacts";
import {Footer} from "./Footer/Footer";


function App() {
    return (
        <div>
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <OnlineJob/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
