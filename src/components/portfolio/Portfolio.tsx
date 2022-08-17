import React from 'react';
import pizza from '../../assets/pizza.png'
import contacts from '../../assets/contacts.png'
import ghSearch from '../../assets/gh-search.png'
import airports from '../../assets/airports.png'

import './Portfolio.css'

const Portfolio = () => {
    return (
        <section id='portfolio' className='container'>
            <h5>My recent works</h5>
            <h2 className='portfolio__h2'>Portfolio</h2>

           <div className='flex'>
               <div className="portfolio__items">

                   <article className='portfolio__item'>
                       <img src={pizza} alt="image1" className='portfolio__img'/>
                       <h3 className='portfolio__title'>Pizza Shop</h3>
                       <div className='portfolio__btns'>
                           <a href="https://github.com/warning11223/react-pizza" className='portfolio__link btn ' target='_blank'>Github</a>
                           <a href="https://warning11223.github.io/react-pizza/" className='portfolio__link btn btn-primary' target='_blank'>Take a look</a>
                       </div>
                   </article>

                   <article className='portfolio__item'>
                       <img src={contacts} alt="image1" className='portfolio__img'/>
                       <h3 className='portfolio__title'>Contact List</h3>
                       <div className='portfolio__btns'>
                           <a href="https://github.com/warning11223/contacts-app" className='portfolio__link btn ' target='_blank'>Github</a>
                           <a href="https://warning11223.github.io/contacts-app/" className='portfolio__link btn btn-primary' target='_blank'>Take a look</a>
                       </div>
                   </article>

                   <article className='portfolio__item'>
                       <img src={ghSearch} alt="image1" className='portfolio__img'/>
                       <h3 className='portfolio__title'>Github search</h3>
                       <div className='portfolio__btns'>
                           <a href="https://github.com/warning11223/github-search" className='portfolio__link btn ' target='_blank'>Github</a>
                           <a href="https://warning11223.github.io/github-search/" className='portfolio__link btn btn-primary' target='_blank'>Take a look</a>
                       </div>
                   </article>

                   <article className='portfolio__item'>
                       <img src={airports} alt="image1" className='portfolio__img'/>
                       <h3 className='portfolio__title'>Airports app</h3>
                       <div className='portfolio__btns'>
                           <a href="https://github.com/warning11223/airports-app" className='portfolio__link btn ' target='_blank'>Github</a>
                           <a href="https://warning11223.github.io/airports-app/" className='portfolio__link btn btn-primary' target='_blank'>Take a look</a>
                       </div>
                   </article>

               </div>
           </div>

        </section>
    );
};

export default Portfolio;
