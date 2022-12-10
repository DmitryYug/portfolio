import React from 'react';
import styles from './SkillCard.module.less';
import reusableStyles from '../../Common/Styles/Common.less';


type SkillCardPropsType = {
    title: string
    description: string
}

export const SkillCard = (props: SkillCardPropsType) => {
    return (
        <div className={reusableStyles.card}>
            <div className={styles.icon}>skill picture</div>
            <h3 className={reusableStyles.cardTitle}>{props.title}</h3>
            <span className={reusableStyles.cardDescription}>
                {props.description}
            </span>
        </div>
    );
}

