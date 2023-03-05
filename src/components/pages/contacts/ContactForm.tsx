import React, {useEffect, useRef, useState} from 'react';
import {Title} from "../../Title";
import {AiFillFacebook, AiFillGithub, AiFillLinkedin, AiFillPhone} from "react-icons/ai";
import {HiOutlineMail} from "react-icons/hi";
import {SiCodewars} from "react-icons/si";
import {useForm} from "react-hook-form";
import MyButton from "../../MyButton";
import axios from "axios";
import Confetti from 'react-confetti'
import {MdDone, MdError} from "react-icons/md";
import {MyButtonStatusTypes} from "../../../types/Types";


interface ContactsPropsType {
}

interface ContactFormTypes {
    name: string,
    email: string,
    comment: string
}

export const ContactForm: React.FC<ContactsPropsType> = () => {
    const [formSendingStatus, setFormSendingStatus] = useState<MyButtonStatusTypes>('ok');
    const footerIconsColor = '#aab1b8';
    const footerIcons = [
        {title: 'gitHub', icon: <AiFillGithub color={footerIconsColor} size={20}/>},
        {title: 'codeWars', icon: <SiCodewars color={footerIconsColor} size={20}/>},
        {title: 'linkedIn', icon: <AiFillLinkedin color={footerIconsColor} size={20}/>},
        {title: 'facebook', icon: <AiFillFacebook color={footerIconsColor} size={20}/>}
    ]
    const {
        register,
        handleSubmit,
        watch,
        formState: {errors},
        reset,
    } = useForm<ContactFormTypes>();
    const submitBtnRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const subscription = watch((value) => {
            value && setFormSendingStatus('initial')
        });
        return () => subscription.unsubscribe();
    }, [watch]);


    const renderConfetti = () =>
        <Confetti
            width={submitBtnRef.current?.offsetWidth}
            height={300}
            numberOfPieces={25}
            recycle={false}
            confettiSource={{x: 0, y: 280, w: 100, h: 0}}
            style={{inset: 'auto 0 0 auto'}}
            colors={['#343a40', '#aab1b8', '#D46A6A', '#212529', '#1baa80', '#20c997', '#FFFFFF']}
        />

    const onSubmit = handleSubmit(data => {
        setFormSendingStatus('pending')
        axios.post('https://formspree.io/f/mpzerojk', data)
            .then((response) => {
                reset()
                setFormSendingStatus('ok')
            })
            .catch((err) => {
                setFormSendingStatus('err')
                console.log(err)
            })
    });
    const errorMessage = (errorInputName: string) =>
        <span className='error-message'>
            Fill the {errorInputName}, please
        </span>;


    return (
        <div id='contacts' className='light-block-wrapper'>
            <Title title='contacts'
                   subtitle='get in touch'
            />
            <div className="content">
                <div className="contact-form">
                    <div className="contact-form-info">
                        <div className="address">
                            <h3>adress</h3>
                            <span>los-angeles, staples center, vip places</span>
                        </div>
                        <div className='contact-me'>
                            <h3>contact me</h3>
                            <div className="d-flex-start" style={{marginBottom: '10px'}}>
                                <AiFillPhone color='#20c997' size='20'/>
                                <span style={{marginLeft: '10px'}}>
                                +7-(916)-979-59-03
                            </span>
                            </div>
                            <div className="d-flex-start" style={{marginBottom: '10px'}}>
                                <HiOutlineMail color='#20c997' size='20'/>
                                <span style={{marginLeft: '10px'}}>dmitriyyuganuk@gmail.com</span>
                            </div>
                        </div>
                        <div className="social">
                            <h3>follow me</h3>
                            <div className='icons-block'>
                                {footerIcons.map((icon, i) =>
                                    <React.Fragment key={i}>
                                        {icon.icon}
                                    </React.Fragment>)}
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
                        <div className='d-flex-start'
                             ref={submitBtnRef}
                             style={{position: 'relative', minWidth: '30%', maxWidth: '300px'}}
                        >
                            <MyButton className='is-rounded is-green'
                                      status={formSendingStatus}
                                      style={{minWidth: '100%', width: 'fit-content'}}
                                      size='1.5rem'
                                      myTitle='Send Message'
                                      okMessage={
                                          <div className='d-flex-center gap-5'>
                                              <MdDone color='white' size={'1.5rem'}/>
                                              Message sent
                                          </div>
                                      }
                                      errorMessage={
                                          <div className='d-flex-center gap-5'>
                                              <MdError color='white' size={'1.5rem'}/>
                                              Try again please
                                          </div>
                                      }
                            />
                            {(formSendingStatus === 'ok') && renderConfetti()}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

