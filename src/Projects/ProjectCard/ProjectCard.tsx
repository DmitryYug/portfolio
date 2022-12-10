import React from 'react';
import styles from '../../Common/Styles/ProjectCard.less';
import reusableStyles from "../../Common/Styles/Common.less";

type ProjectCardPropsType = {
    title: string
    description: string
}

export const ProjectCard = (props: ProjectCardPropsType) => {

    return (
        <div className={reusableStyles.card}>
            <div className={styles.picture}>
                project picture
                <button>open project</button>
            </div>
            <h3 className={reusableStyles.cardTitle}>{props.title}</h3>
            <span className={reusableStyles.cardDescription}>{props.description}</span>
        </div>
    );
}

