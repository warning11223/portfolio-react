import React, {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';

import './Contact.css'
import {AiFillLinkedin, AiOutlineMail} from "react-icons/ai";
import {FaTelegram} from "react-icons/fa";


const Contact = () => {
    const form = useRef<HTMLFormElement | null>(null);
    const [sent, setSent] = useState<null | boolean>(null);

    const sendEmail = (e: React.FormEvent<HTMLFormElement | null>) => {
        e.preventDefault();

        emailjs.sendForm('service_jakyhkx', 'template_940zhp9', form?.current!, 'fwOlfjUz31mDy0akc')
            .then((result) => {
                setSent(true);
            }, (error) => {
                setSent(false);
            });
    };

    return (
        <section id='contact'>
            <h5>Get in touch</h5>
            <h2 className='contact__title'>Contact me</h2>
            <article className='container contact__container'>
                <div className="contact__items">

                    <div className="contact__item">
                        <AiOutlineMail className="contact__item-icon"/>
                        <h3 className="contact__item-title">Email</h3>
                        <p className="contact__item-text">warning11223@gmail.com</p>
                        <a className="contact__item-link" href='mailto:warning11223@gmail.com' target='_blank'>Send a message</a>
                    </div>

                    <div className="contact__item">
                        <FaTelegram className="contact__item-icon"/>
                        <h3 className="contact__item-title">Telegram</h3>
                        <p className="contact__item-text">@w4rn1nq</p>
                        <a className="contact__item-link" href='https://telegram.me/w4rn1nq' target='_blank'>Send a message</a>
                    </div>

                    <div className="contact__item">
                        <AiFillLinkedin className="contact__item-icon"/>
                        <h3 className="contact__item-title">Linkedin</h3>
                        <p className="contact__item-text">linkedin.com/in/denis-khablo</p>
                        <a className="contact__item-link" href='https://www.linkedin.com/in/denis-khablo/' target='_blank'>Send a message</a>
                    </div>

                </div>
                <form
                    ref={form}
                    className="contact__form"
                    onSubmit={sendEmail}
                >
                    <input type="text" placeholder='Your name' name='name' className='contact__form-name' required/>
                    <input type="text" placeholder='Your email' name='email' className='contact__form-email' required/>
                    <textarea rows={5} placeholder='Your message' name='message' className='contact__form-area' required/>
                    <p className='contact__form-text'>(Send me an email and I will reply to you shortly)</p>
                    <button type='submit' className='contact__form-btn btn btn-primary'>Send message</button>
                    {sent === true && <p style={{color: 'green', fontSize: '2rem'}}>Message sent successfully 🙂</p>}
                    {sent === false && <p style={{color: 'red', fontSize: '2rem'}}>Message not sent 😔</p>}
                </form>
            </article>
        </section>
    );
};

export default Contact;
