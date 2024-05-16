import React from 'react';
import { Link } from 'react-router-dom';
import CardCountries from './CardCountries';

import './CardCountries.scss';

const CountriesList = () => {

    const countries = [
        {id: 1, name: 'Austria', imageUrl: 'Austria.png'},
        {id: 2, name: 'Slovakia', imageUrl: 'Slovakia.png'},
        {id: 3, name: 'Canada', imageUrl: 'Canada.png'},
        {id: 4, name: 'Belgium', imageUrl: 'Belgium.png'},
        {id: 5, name: 'Bulgaria', imageUrl: 'Bulgaria.png'},
        {id: 6, name: 'Czech', imageUrl: 'Czech.png'},
        {id: 7, name: 'Australia', imageUrl: 'Australia.png'},
        {id: 8, name: 'Israel', imageUrl: 'Israel.png'},
        {id: 9, name: 'Japan', imageUrl: 'Japan.png'},
        {id: 10, name: 'Kuwait', imageUrl: 'Kuwait.png'},
        {id: 11, name: 'USA', imageUrl: 'USA.png'},
        {id: 12, name: 'UK', imageUrl: 'UK.png'},
        {id: 13, name: 'UAE', imageUrl: 'UAE.png'},
        {id: 14, name: 'Saudi', imageUrl: 'Saudi.png'},
        {id: 15, name: 'Oman', imageUrl: 'Oman.png'},
        {id: 16, name: 'Switzerland', imageUrl: 'Switzerland.png'},
        {id: 17, name: 'Qatar', imageUrl: 'Qatar.png'},
        {id: 18, name: 'Bahrain', imageUrl: 'Bahrain.png'},
        {id: 19, name: 'Slovenia', imageUrl: 'Slovenia.png'},
        {id: 20, name: 'Spain', imageUrl: 'Spain.png'},
        {id: 21, name: 'Sweden', imageUrl: 'Sweden.png'},
        {id: 22, name: 'Portugal', imageUrl: 'Portugal.png'},
        {id: 23, name: 'Poland', imageUrl: 'Poland.png'},
        {id: 24, name: 'Romania', imageUrl: 'Romania.png'},
        {id: 25, name: 'Malta', imageUrl: 'Malta.png'},
        {id: 26, name: 'Netherlands', imageUrl: 'Netherlands.png'},
        {id: 27, name: 'Norway', imageUrl: 'Norway.png'},
        {id: 28, name: 'Italy', imageUrl: 'Italy.png'},
        {id: 29, name: 'Latvia', imageUrl: 'Latvia.png'},
        {id: 30, name: 'Lithuania', imageUrl: 'Lithuania.png'},
        {id: 31, name: 'Hungary', imageUrl: 'Hungary.png'},
        {id: 32, name: 'Iceland', imageUrl: 'Iceland.png'},
        {id: 33, name: 'Ireland', imageUrl: 'Ireland.png'},
        {id: 34, name: 'Estonia', imageUrl: 'Estonia.png'},
        {id: 35, name: 'France', imageUrl: 'France.png'},
        {id: 36, name: 'Greece', imageUrl: 'Greece.png'},
    ]

    return (
        <div className="countries">
            <div className="countries__list">
                {countries.map(country => (
                    <CardCountries  key={country.id} country={country}/>
                ))}
            </div>
            <Link className='countries__link' to='/trashBasket'  >
                <div className="countries__basket" dara-count={5}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                        <path d="M13.7242 29.7586C13.7242 30.1815 13.5988 30.5948 13.3639 30.9464C13.129 31.298 12.7951 31.572 12.4044 31.7338C12.0138 31.8956 11.5839 31.938 11.1692 31.8555C10.7545 31.773 10.3735 31.5694 10.0745 31.2704C9.77552 30.9714 9.5719 30.5904 9.48941 30.1757C9.40692 29.761 9.44926 29.3311 9.61107 28.9405C9.77289 28.5498 10.0469 28.2159 10.3985 27.981C10.7501 27.7461 11.1634 27.6207 11.5863 27.6207C12.1533 27.6207 12.6971 27.8459 13.098 28.2469C13.4989 28.6478 13.7242 29.1916 13.7242 29.7586ZM25.4828 27.6207C25.06 27.6207 24.6466 27.7461 24.295 27.981C23.9435 28.2159 23.6694 28.5498 23.5076 28.9405C23.3458 29.3311 23.3035 29.761 23.386 30.1757C23.4685 30.5904 23.6721 30.9714 23.9711 31.2704C24.2701 31.5694 24.651 31.773 25.0657 31.8555C25.4804 31.938 25.9103 31.8956 26.301 31.7338C26.6916 31.572 27.0255 31.298 27.2604 30.9464C27.4954 30.5948 27.6207 30.1815 27.6207 29.7586C27.6207 29.1916 27.3955 28.6478 26.9946 28.2469C26.5936 27.8459 26.0498 27.6207 25.4828 27.6207ZM31.6882 9.88254C31.5888 9.74783 31.4591 9.63834 31.3096 9.56291C31.1602 9.48748 30.9951 9.44822 30.8276 9.44827H7.35316L6.26949 5.65345C6.14016 5.20761 5.86992 4.81566 5.49922 4.53624C5.12851 4.25683 4.67728 4.10499 4.21307 4.10345H1.96557C1.68206 4.10345 1.41017 4.21607 1.2097 4.41654C1.00923 4.61701 0.896606 4.88891 0.896606 5.17241C0.896606 5.45592 1.00923 5.72782 1.2097 5.92829C1.41017 6.12876 1.68206 6.24138 1.96557 6.24138H4.21307L9.04747 23.1564C9.24093 23.8252 9.64584 24.4133 10.2016 24.8327C10.7573 25.2521 11.4339 25.4801 12.1301 25.4828H24.9724C25.6588 25.4851 26.3276 25.2662 26.8798 24.8585C27.4319 24.4508 27.838 23.8759 28.0376 23.2192L31.8498 10.8312C31.8989 10.6715 31.9099 10.5024 31.8818 10.3377C31.8537 10.1729 31.7874 10.017 31.6882 9.88254Z" fill="#7B76FF"/>
                    </svg>
                </div>
            </Link>
        </div>
    );
}

export default CountriesList;