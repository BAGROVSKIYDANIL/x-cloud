import React from 'react';
import CardCountries from './CardCountries';

import './CardCountries.scss';

const CountriesList = () => {

    const countries = [
        // {id: 1, name: 'Austria', imageUrl: 'Austria.png'},
        // {id: 2, name: 'Slovakia', imageUrl: 'Slovakia.png'},
        // {id: 3, name: 'Belgium', imageUrl: 'Belgium.png'},
        // {id: 4, name: 'Bulgaria', imageUrl: 'Bulgaria.png'}
        {id: 1, name: 'Czech', imageUrl: 'Czech.png'},
        // {id: 6, name: 'Slovakia', imageUrl: 'Slovakia.png'},
        // {id: 7, name: 'Slovakia', imageUrl: 'Slovakia.png'},
        // {id: 8, name: 'Slovakia', imageUrl: 'Slovakia.png'},
        // {id: 9, name: 'Slovakia', imageUrl: 'Slovakia.png'},
        // {id: 10, name: 'Slovakia', imageUrl: 'Slovakia.png'}
    ]
    // const countries = [
    //     {id: 1, name: 'Austria', imageUrl: '../../../../assets/icons/countries/Austria.png'},
    //     {id: 2, name: 'Slovakia', imageUrl: '../../../../assets/icons/countries/Slovakia.png'}
    // ]
    console.log(countries);

    return (
        <div className="countries-list">
            {countries.map(country => (
                <CardCountries  key={country.id} country={country}/>
            ))}
            
        </div>
    );
}

export default CountriesList;