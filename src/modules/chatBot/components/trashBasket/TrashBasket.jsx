import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { fetchCountry } from "../../chatBotSlice";
import { useSelector, useDispatch } from "react-redux";
import TrashBasketList from "./TrashBasketList";

import './TrashBasket.scss'

const TrashBasket = () =>
    {
        const {stateTotalCount, country} = useSelector(state => state.bot);
        const countryId = JSON.parse(localStorage.getItem('countryId'));
        const numberAndType = JSON.parse(localStorage.getItem('numberCount')) || []
        const [selectedCountryState, setSelectedCountryState] = useState([]);
        const dispatch = useDispatch();
        useEffect(() =>
        {
            dispatch(fetchCountry())
        }, [dispatch])


        useEffect(() =>
        {
            // const countryId = JSON.parse(localStorage.getItem('countryId'));
            // const selectedCountry = countryId ? CountryList.filter((item) => countryId.includes(item.id)) : '';
            // const selectedCountry = countryId ? country.Data.filter((item) => countryId.includes(item.id)) : null;
            if(countryId && country.length !==0)
            {
                const selectedCountry = country.Data.filter((item) => countryId.includes(item.id));
                setSelectedCountryState(selectedCountry)
            }
            // setSelectedCountryState(selectedCountry);
        }, [country])
 
        const handleAllDeleteClick = () => 
        {
            setSelectedCountryState([])
            localStorage.removeItem('countryId');
            localStorage.removeItem('numberCount');
        }    

        const handleDeleteClick = (id) => 
        {   
            console.log(id)
            // const  updateTypeRoom = numberAndType.filter()
            const updateTypeRooms = numberAndType.filter((item, index) => (index + 1 !== id))
            const updateCountryList = selectedCountryState.filter(country => country.id !== id);
            setSelectedCountryState(updateCountryList);
            const updateCountryId = updateCountryList.map(country => country.id)
            localStorage.setItem('countryId', JSON.stringify(updateCountryId));
            localStorage.setItem('numberCount', JSON.stringify(updateTypeRooms))
        }

        const items = selectedCountryState.flatMap((item, index) =>
        {
            const tariffs = item.Tariffs.map((tariff, index) => ({country: item.Country, type: tariff.type}));
            return (
                <TrashBasketList 
                    key={item.id}
                    id={index}
                    country={item}
                    typeRoom={tariffs}
                    handleDeleteClick={handleAllDeleteClick}
                    />
            )
        })

        return(
            <div className="trashBasket">
                <nav className="trashBasket__menu">
                    <Link to='/chatBot'>
                        <div className="trashBasket__arrow-back">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="15" viewBox="0 0 28 15" fill="none">
                            <path d="M0.354787 6.64373L0.355873 6.64258L6.67668 0.352252C7.15021 -0.118978 7.91612 -0.117224 8.38747 0.356365C8.85876 0.829894 8.85695 1.5958 8.38342 2.06709L4.13963 6.29032L26.6613 6.29032C27.3294 6.29032 27.871 6.83189 27.871 7.5C27.871 8.1681 27.3294 8.70968 26.6613 8.70968L4.13969 8.70968L8.38336 12.9329C8.85689 13.4042 8.8587 14.1701 8.38741 14.6436C7.91606 15.1173 7.15009 15.1189 6.67662 14.6477L0.355813 8.35742L0.354724 8.35627C-0.119046 7.8834 -0.117531 7.11502 0.354787 6.64373Z" fill="#ADABFF"/>
                            </svg>
                        </div>
                    </Link>
                    <div className="trashBasket__group-remove">
                        <span className="trashBasket__delete-all">
                            Delete all
                        </span>
                        <button  onClick={handleAllDeleteClick} className="trashBasket__trash-can">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M3 6H5H21" stroke="#ADABFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z" stroke="#ADABFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M10 11V17" stroke="#ADABFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M14 11V17" stroke="#ADABFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                    </div>
                </nav>
                <div className="trashBasket__wrapper">
                    <div className="trashBasket__wrapper-list">
                        {
                            items
                            // selectedCountryState ? selectedCountryState.map(country =>
                            //     (    
                            //         country.Tariffs.map((tariffs, index) => 
                            //             (
                            //                 <TrashBasketList    key={country.id} 
                            //                                     country={country} 
                            //                                     // typeRoom={tariffs.type}
                            //                                     handleDeleteClick={handleDeleteClick} />
                            //             )
                            //         )
                            //     )
                            // )
                            // : ''
                            // items.map((item,index) => 
                            // (
                            //     <TrashBasketList 
                            //         key={index}
                            //         country={item}
                            //         typeRoom={item.type}
                            //         handleDeleteClick={handleAllDeleteClick}/>
                            // ))
                        }                        
                    </div>
                </div>
                <footer className="trashBasket__footer">
                    <div className="trashBasket__amount">
                        <span className="trashBasket__amount-text">Amount without discount</span>
                        <span className="trashBasket__amount-price">38.81$</span>
                    </div>
                    <div className="trashBasket__discount">
                        <span className="trashBasket__discount-text">Discount</span>
                        <span className="trashBasket__discount-price">-8.81$</span>
                    </div>
                    <div className="trashBasket__total">
                        <span className="trashBasket__total-text">Total</span>
                        {/* <span className="trashBasket__total-price">$29.07</span> */}
                        <span className="trashBasket__total-price">${stateTotalCount}</span>
                    </div>
                    <button className="trashBasket__buy-now">Buy now</button>
                </footer>
            </div>
        )
    }

export default TrashBasket