import React, {useState, useEffect} from 'react';
import Card from '../cards/Card';
import ActiveButtons from '../activeButtons/ActiveButtons';
import './MainPage.scss';


const MainPage = () => {
    const [loadCard, setLoadCard] = useState(false);
    const [loadButtons, setLoadButtons] = useState(false);
    useEffect(() =>
    {
        const timer = setTimeout(() =>
        {
            setLoadButtons(true);
        }, 1000)
        return () => clearTimeout(timer)
    },[])
    useEffect(() =>
    {   
        let timer;
        if(loadButtons)
        {
             timer = setTimeout(() =>
            {
                setLoadCard(true);
            }, 500 );
        }
        return () => clearTimeout(timer)
    },[loadButtons])
    return (
        <section className='welcome'>
           <div className="welcome__wrapper">
             <h1 className="welcome__title"><span className='title'>VOIP <span className="symbol">&</span>  WEB</span> <br /> Solutions for you business</h1>
            <span className="welcome__subtitle">The digital product design <span>&</span> development company and your guide on the digital transformation journey.</span>
           </div>
            {loadCard ? <Card/> : false}
            {loadButtons ? <ActiveButtons/> : false}
        </section>
    );
};

export default MainPage;