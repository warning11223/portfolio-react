import React from 'react';
import me1 from '../../assets/me1.png'

import './Header.css'
import Buttons from "./buttons/Buttons";
import HeaderSocials from "./HeaderSocials/HeaderSocials";

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello, I'm</h5>
                <h1>Denis</h1>
                <h5 className="text-light">A front-end web developer</h5>
                <Buttons />

                <div className='header__socials-container'>
                    <HeaderSocials />

                    <div className="me">
                        <img src={me1} alt="me"/>
                    </div>

                    <a href="#contact" className='scroll__down'>Scroll Down</a>
                </div>

            </div>
        </header>
    );
};

export default Header;
