import React from 'react';

import './Experience.css'
import {BsPatchCheckFill} from "react-icons/bs";

const Experience = () => {
    return (
        <section id='experience' className='experience__tablets'>
            <h5 className='experience__section'>What skills i have?</h5>
            <h2 className='experience__title'>My experience</h2>
            <div className='container experience'>
                <div className='experience__left'>
                    <h3 className='experience__left-title'>Frontend development</h3>
                    <div className='experience__left-items'>
                        <div>
                            <article className='experience__left-item'>
                                <BsPatchCheckFill className='experience__left-icon'/>
                                <div>
                                    <p>HTML5</p>
                                    <small className='experience__small'>Experienced</small>
                                </div>
                            </article>
                            <article className='experience__left-item'>
                                <BsPatchCheckFill className='experience__left-icon'/>
                                <div>
                                    <p>JavaScript</p>
                                    <small className='experience__small'>Experienced</small>
                                </div>
                            </article>
                            <article className='experience__left-item'>
                                <BsPatchCheckFill className='experience__left-icon'/>
                                <div>
                                    <p>TypeScript</p>
                                    <small className='experience__small'>Experienced</small>
                                </div>
                            </article>
                            <article className='experience__left-item'>
                                <BsPatchCheckFill className='experience__left-icon'/>
                                <div>
                                    <p>Redux Async</p>
                                    <small className='experience__small'>Experienced</small>
                                </div>
                            </article>
                        </div>
                        <div>
                            <article className='experience__left-item'>
                                <BsPatchCheckFill className='experience__left-icon'/>
                                <div>
                                    <p>CSS3</p>
                                    <small className='experience__small'>Experienced</small>
                                </div>
                            </article>
                            <article className='experience__left-item'>
                                <BsPatchCheckFill className='experience__left-icon'/>
                                <div>
                                    <p>ReactJS</p>
                                    <small className='experience__small'>Experienced</small>
                                </div>
                            </article>
                            <article className='experience__left-item'>
                                <BsPatchCheckFill className='experience__left-icon'/>
                                <div>
                                    <p>React Hooks</p>
                                    <small className='experience__small'>Experienced</small>
                                </div>
                            </article>
                            <article className='experience__left-item'>
                                <BsPatchCheckFill className='experience__left-icon'/>
                                <div>
                                    <p>Redux Toolkit</p>
                                    <small className='experience__small'>Experienced</small>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>

                <div className='experience__left'>
                    <h3 className='experience__left-title'>Backend development</h3>
                    <div className='experience__left-items'>
                        <div>
                            <article className='experience__left-item'>
                                <BsPatchCheckFill className='experience__left-icon'/>
                                <div>
                                    <p>NodeJS</p>
                                    <small className='experience__small'>Beginner</small>
                                </div>
                            </article>
                            <article className='experience__left-item'>
                                <BsPatchCheckFill className='experience__left-icon'/>
                                <div>
                                    <p>MongoDB</p>
                                    <small className='experience__small'>Beginner</small>
                                </div>
                            </article>
                        </div>
                        <div>
                            <article className='experience__left-item'>
                                <BsPatchCheckFill className='experience__left-icon'/>
                                <div>
                                    <p>ExpressJS</p>
                                    <small className='experience__small'>Beginner</small>
                                </div>
                            </article>
                            <article className='experience__left-item'>
                                <BsPatchCheckFill className='experience__left-icon'/>
                                <div>
                                    <p>MySQL</p>
                                    <small className='experience__small'>Beginner</small>
                                </div>
                            </article>

                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Experience;
