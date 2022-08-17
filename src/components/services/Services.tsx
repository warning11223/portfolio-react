import React from 'react';

import './Services.css'
import {MdDone} from "react-icons/md";

const Services = () => {
    return (
        <section id='services' className='container '>
            <h5>What i use?</h5>
            <h2 className='about__title'>Services</h2>

            <div className='services__container'>
                <article className='services__item'>
                    <h3 className='services__title'>UI/UX Design</h3>
                    <ul className='services__list'>
                        <li className='services__list-item'><MdDone className='icon__done'/>Ant design</li>
                        <li className='services__list-item'><MdDone className='icon__done'/>Figma</li>
                        <li className='services__list-item'><MdDone className='icon__done'/>Tailwind</li>
                    </ul>
                </article>

                <article className='services__item'>
                    <h3 className='services__title'>Store management</h3>
                    <ul className='services__list'>
                        <li className='services__list-item'><MdDone className='icon__done'/>Redux</li>
                        <li className='services__list-item'><MdDone className='icon__done'/>Redux-thunk</li>
                        <li className='services__list-item'><MdDone className='icon__done'/>Redux toolkit</li>
                        <li className='services__list-item'><MdDone className='icon__done'/>Redux RTK Query</li>
                    </ul>
                </article>

                <article className='services__item'>
                    <h3 className='services__title'>Dev tools</h3>
                    <ul className='services__list'>
                        <li className='services__list-item'><MdDone className='icon__done'/>Webpack</li>
                        <li className='services__list-item'><MdDone className='icon__done'/>Gulp</li>
                    </ul>
                </article>
            </div>


        </section>
    );
};

export default Services;
