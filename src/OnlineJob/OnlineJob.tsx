import React from 'react';
import styles from './OnlineJob.module.css';
import reusableStyles from '../Common/Styles/Reusabale.module.css';
import {Title} from "../Common/Title/Title";


export const OnlineJob = () => {

    return (
        <div className={styles.onlineJobBlock}>
            <div className={`${styles.onlineJobContainer} ${reusableStyles.flexColumnContainer}`}>
               <Title title={'Avaliable for freelance'}/>
                <button>Hire me</button>
            </div>
        </div>
    );
}

