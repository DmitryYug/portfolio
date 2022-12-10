import React from 'react';
import './App.less';
import {Sidebar} from "./Sidebar/Sidebar";
import {Main} from "./Main/Main";
import {Skills} from "./Skills/Skills";
import {Projects} from "./Projects/Projects";
import {OnlineJob} from "./OnlineJob/OnlineJob";
import {Contacts} from "./Contacts/Contacts";
import {Footer} from "./Footer/Footer";

function App() {
    return (
        <div className='layout'>
            <Sidebar/>
            <div>
                <Main/>
                {/*<Skills/>*/}
                {/*<Projects/>*/}
                {/*<OnlineJob/>*/}
                {/*<Contacts/>*/}
                {/*<Footer/>*/}
            </div>
        </div>
    );
}

export default App;
