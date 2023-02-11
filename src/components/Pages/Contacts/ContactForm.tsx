import React from 'react';
import {Title} from "../../Title";
import {AiFillFacebook, AiFillGithub, AiFillLinkedin, AiFillPhone} from "react-icons/ai";
import {HiOutlineMail} from "react-icons/hi";
import {SiCodewars} from "react-icons/si";
import {useForm} from "react-hook-form";


interface ContactsPropsType {
}

interface ContactFormTypes {
    name: string,
    email: string,
    comment: string
}

export const ContactForm: React.FC<ContactsPropsType> = () => {

    const footerIconsColor = '#aab1b8';
    const {register, handleSubmit, formState: {errors}} = useForm<ContactFormTypes>();

    const footerIcons = [
        {title: 'gitHub', icon: <AiFillGithub color={footerIconsColor} size={20}/>},
        {title: 'codeWars', icon: <SiCodewars color={footerIconsColor} size={20}/>},
        {title: 'linkedIn', icon: <AiFillLinkedin color={footerIconsColor} size={20}/>},
        {title: 'facebook', icon: <AiFillFacebook color={footerIconsColor} size={20}/>}
    ]

    const onSubmit = handleSubmit(data => {
        console.log(data)
    });
    const errorMessage = (errorInputName: string) => <span
        className='error-message'>Fill the {errorInputName}, please</span>;


    return (
        <div id='contacts' className='dark-block-wrapper'>
            <Title title='contacts'
                   subtitle='get in touch'
            />
            <div className="content contact-form">
                <div className="contact-form-info">
                    <div className="address">
                        <h3>adress</h3>
                        <span>los-angeles, staples center, vip places</span>
                    </div>
                    <div className='contact-me'>
                        <h3>contact me</h3>
                        <div className="d-flex-start" style={{marginBottom: '10px'}}>
                            <AiFillPhone color='#20c997' size='20'/>
                            <span style={{marginLeft: '10px'}}>+7-(916)-979-59-03</span>
                        </div>
                        <div className="d-flex-start" style={{marginBottom: '10px'}}>
                            <HiOutlineMail color='#20c997' size='20'/>
                            <span style={{marginLeft: '10px'}}>dmitriyyuganuk@gmail.com</span>
                        </div>
                    </div>
                    <div className="social">
                        <h3>follow me</h3>
                        <div className='icons-block'>
                            {footerIcons.map(icon => icon.icon)}
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit}>
                    <label htmlFor="name">
                        <span>Full name</span>
                        {errors.name && errorMessage('full name')}
                    </label>
                    <input type="text"
                           id='name'
                           placeholder='Enter your name...'
                           {...register("name", {
                               required: true
                           })}
                    />
                    <label htmlFor="email">
                        <span>Email</span>
                        {errors.email && errorMessage('e-mail')}
                    </label>
                    <input type="text"
                           id='email'
                           placeholder='Enter your email...'
                           {...register("email", {
                                   required: true,
                                   pattern: /(.+)@(.+){2,}\.(.+){2,}/
                               }
                           )}

                    />
                    <label htmlFor="comment">
                        <span>Whats on your mind?</span>
                        {errors.comment && errorMessage('comment block')}
                    </label>
                    <textarea placeholder='Let`s discuss your project'
                              id='comment'
                              {...register("comment", {
                                  required: true
                              })}
                    />
                    <div className='d-flex-start'>
                        <button>
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

