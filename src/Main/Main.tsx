import React from 'react';
import styles from './AboutMe.module.css';


export const Main = () => {
    return (
        <div className={styles.container}>
            <div className={styles.text}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci at dicta et facere inventore laborum
                laudantium magni necessitatibus nemo nesciunt officia praesentium quas quia quo repellendus sunt
                suscipit temporibus, velit.
            </div>
            <div className={styles.picture}>Portfolio photo</div>
        </div>
    );
}

