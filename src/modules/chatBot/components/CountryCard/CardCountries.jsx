import React from 'react';
import { Link } from 'react-router-dom';

const CardCountries = ({country}) => {

    const url = country.imageUrl;
    console.log(country.imageUrl)
    return (
        <div className='country' >
            <div className="country__card">
                <div className="country-image">
                    <img src={require(`../../../../assets/icons/countries/${url}`)} alt={`Flag of ${country.name}`} />
                </div>
            <div className="country__title">{country.name}</div>
            <div className="country__type-rooms">4 types rooms</div>
                <Link to='/rooms'>
                    <button className="country__buy">Buy now</button>
                </Link>
            </div>
        </div>
    );
};

export default CardCountries;