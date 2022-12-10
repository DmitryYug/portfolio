import React from 'react';
import styles from '../../../styles/OnlineJob.less';
import reusableStyles from '../../../styles/Common.less';
import {Title} from "../../Title";


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

