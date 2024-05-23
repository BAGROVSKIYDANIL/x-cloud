import React, {useState} from 'react';
import { Link} from 'react-router-dom';
import { selectCountry } from '../../chatBotSlice';
import { useDispatch } from 'react-redux';

const CardCountries = ({country}) => {

    const url = country.imageUrl;
    const dispatch = useDispatch();
    const cou = JSON.parse(localStorage.getItem('countryId'));
    const [selectedCountryId, setSelectedCountryId] = useState(null);
    // const getStoredCountryIds = () => {
    // try 
    // {
    //     const storage = JSON.parse(localStorage.getItem('countryId'));
    //     if (storage && Array.isArray(storage)) 
    //     {
    //         return storage;
    //     }
    // } 
    // catch (error) 
    // {
    //     console.error('Error parsing localStorage:', error);
    // }
    // return []; // Return empty array on errors or invalid format
    // };
    const updateLocalStorage = (id) =>
    {
        let storage = JSON.parse(localStorage.getItem('countryId')) || [];
        if(!storage.includes(id))
        {
            storage.push(id);
        }
        localStorage.setItem('countryId', JSON.stringify(storage))
    }
    const handleClickCountry = (e, id) =>
    {
        // e.preventDefault();
        const countryId = +e.currentTarget.getAttribute('data-id');
        dispatch(selectCountry(countryId));
        setSelectedCountryId(id)
        // localStorage.setItem('countryId', id)
        updateLocalStorage(id)
    }
    // console.log(selectedCountryId)
    // console.log(typeof cou)

    const isSelectedCountry = cou ? cou.includes(country.id) : ''
    return (
        <div className='country' >
            <div className="country__card">
                <div className="country-image">
                    <img src={require(`../../../../assets/icons/countries/${url}`)} alt={`Flag of ${country.name}`} />
                </div>
                <div className="country__title">{country.name}</div>
                <div className="country__type-rooms">4 types rooms</div>
                    <Link to='/rooms'>
                        <button onClick={(e) => handleClickCountry(e, country.id)} data-id={country.id} className="country__buy">Buy now</button>
                    </Link>
                </div>
                {
                    isSelectedCountry && 
                    (
                        <div className="country__check-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                            <path d="M23.8333 12.0033V13C23.832 15.3361 23.0755 17.6092 21.6767 19.4803C20.278 21.3514 18.3119 22.7202 16.0716 23.3826C13.8313 24.0449 11.437 23.9654 9.24564 23.1558C7.05428 22.3462 5.18334 20.8499 3.91183 18.8902C2.64033 16.9304 2.0364 14.6121 2.19011 12.281C2.34382 9.94994 3.24693 7.73102 4.76476 5.95516C6.28259 4.1793 8.33381 2.94166 10.6125 2.42682C12.8912 1.91198 15.2753 2.14753 17.4091 3.09833" fill="#FDFEFF"/>
                            <path d="M23.8333 12.0033V13C23.832 15.3361 23.0755 17.6092 21.6767 19.4803C20.278 21.3514 18.3119 22.7202 16.0716 23.3826C13.8313 24.0449 11.437 23.9654 9.24564 23.1558C7.05428 22.3462 5.18334 20.8499 3.91183 18.8902C2.64033 16.9304 2.0364 14.6121 2.19011 12.281C2.34382 9.94994 3.24693 7.73102 4.76476 5.95516C6.28259 4.1793 8.33381 2.94166 10.6125 2.42682C12.8912 1.91198 15.2753 2.14753 17.4091 3.09833" stroke="#7B76FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M23.8333 4.33334L13 15.1775L9.75 11.9275" stroke="#7B76FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                    )     
                }
        </div>
    );
};

export default CardCountries;