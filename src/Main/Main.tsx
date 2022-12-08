import React from 'react';
import styles from './Main.module.less';
import reusableStyles from '../Common/Styles/Reusabale.module.less';

export const Main = () => {
    return (
        <div className={styles.mainBlock}>
            <div className={`${reusableStyles.container} ${reusableStyles.spaceEvenly}`}>
                <div className={styles.text}>
                    <span>Hi there</span>
                    <h1>I`m Dmitriy Yuganyuk</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci at dicta et facere inventore
                        laborum
                        laudantium magni necessitatibus nemo nesciunt officia praesentium quas quia quo repellendus sunt
                        suscipit temporibus, velit.
                    </p>
                </div>
                <div className={styles.picture}>Portfolio photo</div>
            </div>
        </div>
    );
}

