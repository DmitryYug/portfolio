import React from 'react';
import styles from '../../../styles/Contacts.less';
import reusableStyles from '../../../styles/Common.less';
import {Title} from "../../Title";


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

