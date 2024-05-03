import React from 'react';
import CardCountries from './CardCountries';

const CountriesList = () => {

    const countries = [
        {id: 1, name: 'Austria', imageUrl: '../../../../assets/icons/countries/Austria.png'},
        {id: 2, name: 'Slovakia', imageUrl: '../../../../assets/icons/countries/Slovakia.png'}
    ]
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