import React from 'react';
import cv from '../../../assets/Denis_resume.pdf'

import './Buttons.css'

const Buttons = () => {
    return (
        <div className='buttons'>
            <a href={cv} download className='btn'>Download CV</a>
            <a href='#contact' className='btn btn-primary'>Let's talk</a>
        </div>
    );
};

export default Buttons;
