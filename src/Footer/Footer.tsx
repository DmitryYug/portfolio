import React from 'react';
import styles from '../Common/Styles/Footer.less';
import reusableStyles from '../Common/Styles/Common.less';

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

