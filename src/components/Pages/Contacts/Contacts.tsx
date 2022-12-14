import React, {RefObject, useEffect, useState} from 'react';
import styles from '../../../styles/Contacts.less';
import reusableStyles from '../../../styles/Common.less';
import {Title} from "../../Title";


interface ContactsPropsType {
    setContactsRef: (ref: RefObject<HTMLDivElement>) => void
}

export const Contacts: React.FC<ContactsPropsType> = ({setContactsRef}) => {
    const contactsRef = React.useRef<HTMLDivElement>(null)

    useEffect(() => {
        setContactsRef(contactsRef)
    }, [])

    return (
        <div ref={contactsRef} className='dark-block-wrapper'>
            <Title title='contacts'
                   subtitle='get in touch'
            />
            <div className="contacts-content-container">
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

