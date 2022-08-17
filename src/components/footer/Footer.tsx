import React from 'react';
import {BsLinkedin, BsTelegram} from "react-icons/bs";
import { MdOutlineAlternateEmail} from "react-icons/md";

import './Footer.css'
import {AiOutlineArrowUp} from "react-icons/ai";

const Footer = () => {
    return (
        <footer className='footer'>
            <h3 className='footer__title'>Portfolio</h3>
            <ul className='footer__list-links'>
                <li className='footer__list-links-item'><a href="#">Home</a></li>
                <li className='footer__list-links-item'><a href="#about">About</a></li>
                <li className='footer__list-links-item'><a href="#experience">Experience</a></li>
                <li className='footer__list-links-item'><a href="#services">Services</a></li>
                <li className='footer__list-links-item'><a href="#portfolio">Portfolio</a></li>
                <li className='footer__list-links-item'><a href="#contact">Contact</a></li>
            </ul>
            <ul className='footer__list-icons'>
                <li className='footer__list-icons-item'>
                    <a className="footer__list-icons-link icon__size" href='mailto:warning11223@gmail.com' target='_blank'><MdOutlineAlternateEmail /></a>
                </li>
                <li className='footer__list-icons-item'>
                    <a className="footer__list-icons-link" href='https://www.linkedin.com/in/denis-khablo/' target='_blank'><BsLinkedin /></a>
                </li>
                <li className='footer__list-icons-item'>
                    <a className="footer__list-icons-link" href='https://telegram.me/w4rn1nq/' target='_blank'><BsTelegram /></a>
                </li>
            </ul>
            <p className='footer__rights'>© Portfolio </p>
            <a href="#" className='footer__arrow'><AiOutlineArrowUp /></a>
        </footer>
    );
};

export default Footer;
