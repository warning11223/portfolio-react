import React from 'react';
import {BsLinkedin, BsGithub} from "react-icons/bs";

import './HeaderSocials.css'
import {AiOutlineMail} from "react-icons/ai";

const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href="https://www.linkedin.com/in/denis-khablo/" target='_blank'><BsLinkedin/></a>
            <a href="https://github.com/warning11223" target='_blank'><BsGithub /></a>
            <a href="mailto:warning11223@gmail.com" target='_blank'><AiOutlineMail /></a>
        </div>
    );
};

export default HeaderSocials;
