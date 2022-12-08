import React from 'react';
import {Nav} from "./Nav/Nav";
import classes from './Header.module.less';


export const Header = () => {
    return (
        <div className={classes.header}>
            <Nav/>
        </div>
    );
}

