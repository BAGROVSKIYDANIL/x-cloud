import React from 'react';

const CardCountries = ({country}) => {


    console.log(country.imageUrl)
    return (
        <div className='country-card' >
            {/* <img src={country.imageUrl} alt={`Flag of ${country.name}`} />
            <h3>{country.name}</h3> */}
            <img src="../../../../assets/icons/countries/austria.png" alt="" />
        </div>
    );
};

export default CardCountries;