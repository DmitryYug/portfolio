import React from 'react';
import {Nav} from "./Nav/Nav";
import classes from '../Common/Styles/Sidebar.less';


export const Sidebar = () => {
    return (
        <div className={classes.sidebar}>
            <Nav/>
        </div>
    );
}

