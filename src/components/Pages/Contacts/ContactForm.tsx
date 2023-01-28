import React, {RefObject, useEffect, useState} from 'react';
import styles from '../../../styles/Contacts.less';
import reusableStyles from '../../../styles/Common.less';
import {Title} from "../../Title";


interface ContactsPropsType {
}

export const ContactForm: React.FC<ContactsPropsType> = () => {

    return (
        <div id='contacts' className='dark-block-wrapper'>
            <Title title='contacts'
                   subtitle='get in touch'
            />
            <div className="app-content-container contacts-content-container">
                <div className="contacts-info-container">
                    <div className="contacts-info address">
                        ADDRESS
                    </div>
                    <div className="contacts-info numbers">
                        NUMBERS
                    </div>
                    <div className="contacts-info social">
                        SOCIAL
                    </div>
                </div>
                <form className='contacts-form-container'>
                    <input type="text"
                           placeholder='Enter your name...'
                    />
                    <input type="text"
                           placeholder='Enter your email...'
                    />
                    <textarea placeholder='Let`s discuss your project'>

                        </textarea>
                </form>
            </div>

        </div>
    );
}

