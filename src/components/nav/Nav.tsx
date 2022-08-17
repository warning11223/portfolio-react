import React, {useState} from 'react';

import {AiOutlineHome, AiOutlineMessage, AiOutlineUser} from "react-icons/ai";
import {BiBookAdd} from "react-icons/bi";
import {RiServiceLine} from "react-icons/ri";

import './Nav.css'

const Nav = () => {
    const [active, setActive] = useState('#');

    return (
        <nav className='nav'>
            <a
                href="#"
                className={active === '#' ? 'active' : ''}
                onClick={() => setActive('#')}
            ><AiOutlineHome /></a>
            <a
                href="#about"
                className={active === '#about' ? 'active' : ''}
                onClick={() => setActive('#about')}
            ><AiOutlineUser /></a>
            <a
                href="#experience"
                className={active === '#experience' ? 'active' : ''}
                onClick={() => setActive('#experience')}
            ><BiBookAdd /></a>
            <a
                href="#services"
                className={active === '#services' ? 'active' : ''}
                onClick={() => setActive('#services')}
            ><RiServiceLine /></a>
            <a
                href="#contact"
                className={active === '#contact' ? 'active' : ''}
                onClick={() => setActive('#contact')}
            ><AiOutlineMessage /></a>
        </nav>
    );
};

export default Nav;
