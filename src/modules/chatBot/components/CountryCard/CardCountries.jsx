import React from 'react';
import Czechs from '../../../../assets/icons/countries/Czech.png'
import Austria from '../../../../assets/icons/countries/Austria.png'

const CardCountries = ({country}) => {

    const url = country.imageUrl;
    console.log(country.imageUrl)
    return (
        <div className='country-card' >
            {/* <img src={require(`../../../../assets/icons/countries/${url}`)} alt={`Flag of ${country.name}`} /> */}
            <img src={Czechs} alt="" />
            <img src={Austria} alt="" />
            {/* <h3>{country.name}</h3> */}
        </div>
    );
};

export default CardCountries;