import React from 'react';
import styles from './Footer.module.css';
import reusableStyles from '../Common/Styles/Reusabale.module.css';

export const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={reusableStyles.flexColumnContainer}>
                <h3 className={reusableStyles.color2}>Dmitriy Yuganyuk</h3>
                <div className={`${reusableStyles.flexRawContainer} ${styles.socialContainer}` }>
                    <div className={styles.icon}></div>
                    <div className={styles.icon}></div>
                    <div className={styles.icon}></div>
                    <div className={styles.icon}></div>
                </div>
                <span>(c) All rights reserved</span>
            </div>
        </div>

    );
}

