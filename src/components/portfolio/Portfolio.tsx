import React from 'react';

import insta from '../../assets/portfolio/insta.png'
import cards from '../../assets/portfolio/cards.png'
import notes from '../../assets/portfolio/notes.png'
import communicate from '../../assets/portfolio/communicate.png'
import dashboard from '../../assets/portfolio/dashboard.png'
import tesla from '../../assets/portfolio/tesla.png'
import clinic from '../../assets/portfolio/clinic.png'

import './Portfolio.css'

const Portfolio = () => {
    return (
        <section id='portfolio' className='container'>
            <h5>My recent works</h5>
            <h2 className='portfolio__h2'>Portfolio</h2>

           <div className='flex'>
               <div className="portfolio__items">

                   <article className='portfolio__item'>
                       <img src={insta} alt="image" className='portfolio__img'/>
                       <h3 className='portfolio__title'>Inctagram</h3>
                       <div className='portfolio__btns'>
                           <a href="https://github.com/LuVuitton/Inctagram" className='portfolio__link btn ' target='_blank'>Github</a>
                           <a href="https://inctagram.vercel.app/" className='portfolio__link btn btn-primary' target='_blank'>Take a look</a>
                       </div>
                   </article>

                   <article className='portfolio__item'>
                       <img src={cards} alt="image" className='portfolio__img'/>
                       <h3 className='portfolio__title'>Study with us</h3>
                       <div className='portfolio__btns'>
                           <a href="https://github.com/warning11223/study-with-us" className='portfolio__link btn ' target='_blank'>Github</a>
                           <a href="https://warning11223.github.io/study-with-us/" className='portfolio__link btn btn-primary' target='_blank'>Take a look</a>
                       </div>
                   </article>

                   <article className='portfolio__item'>
                       <img src={notes} alt="image" className='portfolio__img'/>
                       <h3 className='portfolio__title'>Notes</h3>
                       <div className='portfolio__btns'>
                           <a href="https://github.com/warning11223/notes" className='portfolio__link btn ' target='_blank'>Github</a>
                           <a href="https://warning11223.github.io/notes" className='portfolio__link btn btn-primary' target='_blank'>Take a look</a>
                       </div>
                   </article>

                   <article className='portfolio__item'>
                       <img src={communicate} alt="image" className='portfolio__img'/>
                       <h3 className='portfolio__title'>Communicate App</h3>
                       <div className='portfolio__btns'>
                           <a href="https://github.com/warning11223/communicate-app" className='portfolio__link btn ' target='_blank'>Github</a>
                           <a href="https://warning11223.github.io/communicate-app/" className='portfolio__link btn btn-primary' target='_blank'>Take a look</a>
                       </div>
                   </article>

                   <article className='portfolio__item'>
                       <img src={dashboard} alt="image" className='portfolio__img'/>
                       <h3 className='portfolio__title'>Dashboard</h3>
                       <div className='portfolio__btns'>
                           <a href="https://github.com/warning11223/react-dashboard" className='portfolio__link btn ' target='_blank'>Github</a>
                           <a href="https://calm-dragon-9f6428.netlify.app/" className='portfolio__link btn btn-primary' target='_blank'>Take a look</a>
                       </div>
                   </article>

                   <article className='portfolio__item'>
                       <img src={tesla} alt="image" className='portfolio__img'/>
                       <h3 className='portfolio__title'>Tesla</h3>
                       <div className='portfolio__btns'>
                           <a href="https://github.com/warning11223/tesla-lemplate" className='portfolio__link btn ' target='_blank'>Github</a>
                           <a href="https://warning11223.github.io/tesla-lemplate/" className='portfolio__link btn btn-primary' target='_blank'>Take a look</a>
                       </div>
                   </article>

                   <article className='portfolio__item'>
                       <img src={clinic} alt="image" className='portfolio__img'/>
                       <h3 className='portfolio__title'>Specialized clinic</h3>
                       <div className='portfolio__btns'>
                           <a href="https://github.com/warning11223/rocket-business" className='portfolio__link btn ' target='_blank'>Github</a>
                           <a href="https://rocket-business-iota.vercel.app/" className='portfolio__link btn btn-primary' target='_blank'>Take a look</a>
                       </div>
                   </article>


               </div>
           </div>

        </section>
    );
};

export default Portfolio;
