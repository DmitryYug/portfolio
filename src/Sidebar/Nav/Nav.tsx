import React from 'react';
import styles from '../../Common/Styles/Nav.less';
import reusableStyles from '../../Common/Styles/Common.less';


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

