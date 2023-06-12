import React, {useState} from "react";
import {Progress, Spin} from "antd";
import {AiFillPhone} from "react-icons/ai";
import {HiLocationMarker, HiOutlineMail} from "react-icons/hi";

import {SendingStatusTypes} from "../../../types/Types";

import {Title} from "../../Title";
import {Form} from "./Form";
import MyButton from "../../MyButton";
import {SocialIconsBlock} from "../../navigation/SocialIconsBlock";


interface ContactsPropsType {
}

export const ContactForm: React.FC<ContactsPropsType> = () => {

    const [sendingStatus, setSendingStatus] = useState<SendingStatusTypes>("new");

    const footerIconsColor = "#aab1b8";

    const formStateRender = () => {
        if (sendingStatus === "new") {
            return <Form sendingStatusHandler={(status) => setSendingStatus(status)}/>;
        } else if (sendingStatus === "pending") {
            return (
                <div className="loader">
                    <Spin size="large"/>
                </div>
            );
        } else {
            const message = sendingStatus === "success"
                ? <span>Thanks for the message. <br/> I will answer you asap.</span>
                : <span>Something went wrong. <br/> Try again, please.</span>;

            return (
                <div className="loader">
                    <Progress type="circle" percent={100}
                              status={sendingStatus === "success" ? "success" : "exception"}/>
                    <div className='status-message'>
                        {message}
                    </div>
                    <MyButton title="new message"
                              className="is-rounded is-transparent is-bordered"
                              style={{color: "rgba(255, 255, 255, 1)"}}
                              onClick={() => setSendingStatus("new")}
                    />
                </div>
            );
        }
    };

    return (
        <div id="contacts" className="dark-block-wrapper">
            <Title title="contacts"
                   subtitle="get in touch"
            />
            <div className="content">
                <div className="contact-form">
                    <div className="contact-form-info">
                        <div className="address">
                            <h3>address</h3>
                            <HiLocationMarker color="#20c997" size="20"/>
                            <span style={{ marginLeft: '10px'}}>Israel, Tel-Aviv district</span>
                        </div>
                        <div className="contact-me">
                            <h3>contact me</h3>
                            <div className="d-flex-start" style={{marginBottom: "10px"}}>
                                <AiFillPhone color="#20c997" size="20"/>
                                <a href='tel:+972557703312' style={{marginLeft: "10px"}}>
                                +972-55-770-33-12
                            </a>
                            </div>
                            <div className="d-flex-start" style={{marginBottom: "10px"}}>
                                <HiOutlineMail color="#20c997" size="20"/>
                                <a href='mailto:dmitriyyuganuk@gmail.com' style={{marginLeft: "10px"}}>dmitriyyuganuk@gmail.com</a>
                            </div>
                        </div>
                        <div className="social">
                            <h3>follow me</h3>
                            <SocialIconsBlock/>
                        </div>
                    </div>
                    {formStateRender()}
                </div>
            </div>
        </div>
    );
};

