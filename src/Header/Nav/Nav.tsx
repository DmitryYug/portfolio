import React from 'react';
import styles from './Nav.module.css';
import reusableStyles from '../../Common/Styles/Reusabale.module.css';


export const Nav = () => {
    return (
        <div className={styles.nav}>
            <a href=''>Main</a>
            <a href=''>Skills</a>
            <a href=''>Projects</a>
            <a href=''>Contacts</a>
        </div>
    );
}

