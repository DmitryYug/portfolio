import React from 'react';
import {Title} from "../../Title";


interface ContactsPropsType {
}

export const ContactForm: React.FC<ContactsPropsType> = () => {

    return (
        <div id='contacts' className='dark-block-wrapper'>
            <Title title='contacts'
                   subtitle='get in touch'
            />
            <div className="content  contact-form">
                <div className="contact-form-info-container">
                    <div className="contact-form-info address">
                        ADDRESS
                    </div>
                    <div className="contact-form-info numbers">
                        NUMBERS
                    </div>
                    <div className="contact-form-info social">
                        SOCIAL
                    </div>
                </div>
                <form>
                    <label htmlFor="name">Full name</label>
                    <input type="text"
                           id='name'
                           placeholder='Enter your name...'
                    />
                    <label htmlFor="email">Email</label>
                    <input type="text"
                           id='email'
                           placeholder='Enter your email...'
                    />
                    <label htmlFor="comment">Whats on your mind?</label>
                    <textarea placeholder='Let`s discuss your project'
                              id='comment'
                    >

                        </textarea>
                </form>
            </div>

        </div>
    );
}

