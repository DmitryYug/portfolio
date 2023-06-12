import React from "react";
import {useForm} from "react-hook-form";
import MyButton from "../../MyButton";

import {firebaseConfig} from "../../../firebaseConfig";
import {initializeApp} from "firebase/app";
import {addDoc, collection, getFirestore} from "firebase/firestore";
import {SendingStatusTypes} from "../../../types/Types";


interface ContactsPropsType {
    sendingStatusHandler: (status: SendingStatusTypes) => void
}

interface ContactFormTypes {
    name: string,
    email: string,
    comment: string
}

export const Form: React.FC<ContactsPropsType> = (props) => {


    const {register, handleSubmit, formState: {errors}} = useForm<ContactFormTypes>();
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);


    const onSubmit = handleSubmit(async (data) => {
        props.sendingStatusHandler("pending");
        try {
            await addDoc(collection(db, "/feedbackForm"), data);
            props.sendingStatusHandler("success");
        } catch (e) {
            console.log(e);
            props.sendingStatusHandler("error");
        }
    });
    const errorMessage = (errorInputName: string) =>
        <span className="error-message">
            Fill the {errorInputName}, please
        </span>;


    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="name">
                <span>Full name</span>
                {errors.name && errorMessage("full name")}
            </label>
            <input type="text"
                   id="name"
                   placeholder="Enter your name..."
                   {...register("name", {
                       required: true
                   })}
            />
            <label htmlFor="email">
                <span>Email</span>
                {errors.email && errorMessage("e-mail")}
            </label>
            <input type="text"
                   id="email"
                   placeholder="Enter your email..."
                   {...register("email", {
                           required: true,
                           pattern: /(.+)@(.+){2,}\.(.+){2,}/
                       }
                   )}
            />
            <label htmlFor="comment">
                <span>Whats on your mind?</span>
                {errors.comment && errorMessage("comment block")}
            </label>
            <textarea placeholder="Let`s discuss your project"
                      id="comment"
                      rows={5}
                      {...register("comment", {
                          required: true
                      })}
                      style={{ resize: 'none'}}
            />
            <div className="d-flex-start">
                <MyButton className="is-rounded is-green"
                          title="Send Message"
                />
            </div>
        </form>

    );
};

