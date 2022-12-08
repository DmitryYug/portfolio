import React from 'react';
import styles from './Contacts.module.less';
import reusableStyles from '../Common/Styles/Reusabale.module.less';
import {Title} from "../Common/Title/Title";


export const Contacts = () => {

    return (
        <div className={styles.contactsBlock}>
            <div className={`${reusableStyles.container} ${reusableStyles.flexColumn}`}>
                <Title title={'Contacts'}/>
                <form className={`${reusableStyles.flexColumnContainer} ${styles.formContainer}`}>
                    <input type="text"/>
                    <input type="text"/>
                    <textarea></textarea>
                </form>
            </div>
        </div>
    );
}

