import React from 'react';
import img from '../../assets/me-about.jpg'


import './About.css'
import {SiReact, SiRedux, SiTypescript} from "react-icons/si";

const MyComponent = () => {
    return (
        <section id='about' className='about'>
            <h5>Get to know</h5>
            <h2 className='about__title'>About me</h2>

            <div className="container about__container">
                <div className='about__left'>
                    <div className='about__me'>
                        <img src={img} alt="me-img" className='about__img'/>
                    </div>
                </div>
                <div className='about__right'>
                    <div className='about__cards'>
                        <article className='about__card'>
                            <SiReact className='about__card-icon'/>
                            <p className='about__card-text'>Experience</p>
                            <small className='about__card-par'>in React</small>
                        </article>
                        <article className='about__card'>
                            <SiRedux className='about__card-icon'/>
                            <p className='about__card-text'>Experience</p>
                            <small className='about__card-par'>in Redux</small>
                        </article>
                        <article className='about__card'>
                            <SiTypescript className='about__card-icon' />
                            <p className='about__card-text'>Experience</p>
                            <small className='about__card-par'>in TypeScript</small>
                        </article>
                    </div>
                    <p className='about__text'>
                        I build web sites and single page applications(SPA) with React JS. See what I use for that on the <a
                        href="#portfolio">portfolio page</a>.
                    </p>
                    <a href='#contact' className='about_btn btn btn-primary'>Let's talk</a>
                </div>
            </div>
        </section>
    );
};

export default MyComponent;
