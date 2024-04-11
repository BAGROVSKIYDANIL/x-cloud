import React from 'react';
import Card from '../cards/Card';
import './MainPage.scss';
const MainPage = () => {
    return (
        <section className='welcome'>
           <div className="welcome__wrapper">
             <h1 className="welcome__title"><span className='title'>VOIP <span className="symbol">&</span>  WEB</span> <br /> Solutions for you business</h1>
            <span className="welcome__subtitle">The digital product design <span>&</span> development company and your guide on the digital transformation journey.</span>
           </div>
           <Card/>
        </section>
    );
};

export default MainPage;