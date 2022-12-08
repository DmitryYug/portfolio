import React from 'react';
import styles from './Title.module.less'

export const Title = (props: {title: string}) => {
    return (
        <div className={styles.title}>
            <h2>{props.title}</h2>
        </div>
    )
}

