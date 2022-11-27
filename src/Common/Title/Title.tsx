import React from 'react';
import styles from './Title.module.css'

export const Title = (props: {title: string}) => {
    return (
        <div className={styles.title}>
            <h2>{props.title}</h2>
        </div>
    )
}

