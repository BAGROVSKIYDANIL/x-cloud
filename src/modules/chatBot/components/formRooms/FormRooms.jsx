import React, {useState, useCallback, useEffect, useMemo} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postAllCount,fetchCountry } from '../../chatBotSlice';
import { Link, useNavigate } from 'react-router-dom';
import Map from '../../../../assets/icons/Map.png'
import PointToMap from '../../../../assets/icons/PointToMap.svg'
import TypeRoom from '../TypeRoom/TypeRoom';

import './FormRooms.scss'
import LandLineIcon from '../../../../assets/icons/TypesCall/LandLine.svg'
import MobileIcon from '../../../../assets/icons/TypesCall/Mobile.svg'
import NationalIcon from '../../../../assets/icons/TypesCall/National.svg'
import TollFeeIcon from '../../../../assets/icons/TypesCall/Tollfee.svg'
import RandomIcon from '../../../../assets/icons/TypesCall/Random.svg'

const FormRooms = () => {
    const dispatch = useDispatch();
    const {localStorageIdCountry, country} = useSelector(state => state.bot)
    const [activeComponent, setActiveComponent] = useState(null);
    const [oneTypeOfRoom, setOneTypeOfRoom] = useState(false);
    const [changeStorage, setChangeStorage] = useState([]);
    const nameCountry = country.Data ? country.Data.map(name => name.Country):'';
    const localCountryId = JSON.parse(localStorage.getItem('localCountryId')) || [];
    const countryRoomTypes = JSON.parse(localStorage.getItem('numberCount')) || [];
    const currentNameCountry = nameCountry[localStorageIdCountry.length ? localStorageIdCountry - 1 : localCountryId -1]
    let isChangeRoomType;
    countryRoomTypes.some(item => item.country === currentNameCountry ? isChangeRoomType = true : isChangeRoomType = false)
    // console.log('Изменёная страна',isChangeRoomType)
    // console.log('Имя странны', currentNameCountry)
    // console.log(localStorageIdCountry)
    // console.log(nameCountry[localStorageIdCountry - 1])
    // const countryId = JSON.parse(localStorage.getItem('countryId'));
    const [counts, setCounts] = useState(0);
    const [activeNumber, setActiveNumber] = useState(false);
    const navigate = useNavigate();

    const handleCountChange = useCallback((type, count) => {
            setCounts(prevCounts => ({
              ...prevCounts,
              [type]: count
            }));
        }, [])

    const handleComponentClick = (componentName) => 
    {
        console.log(componentName)
        setActiveComponent((prevComponent) => (prevComponent === componentName ? null : componentName));
    };

    const counterNumberOfRoomTypes = (data) =>
    {
        if(!data || data.length === 0)
        {
            return null;
        }
        const uniqueTypes = new Set();
        data.forEach(country =>
                {
                    country.Tariffs.forEach(tariffs =>
                        {
                            uniqueTypes.add(tariffs.type)
                        });
                });
                // uniqueTypes.size === 1 ? setNumberTypeOfRoom(true) : setNumberTypeOfRoom(false);
            return uniqueTypes.size;
    }
    const numberOfRoomTypes = useMemo(() => counterNumberOfRoomTypes(country.Data), [country.Data]);

    useEffect(() =>
    {
        dispatch(fetchCountry())
    }, [dispatch])

    useEffect(() =>
    {
        setOneTypeOfRoom(numberOfRoomTypes === 1) 
    },  [numberOfRoomTypes])


    useEffect(() =>
    {
        const noneZeroCount = Object.values(counts).some(count => count !== 0);
        // console.log('Что то',noneZeroCount)
        setActiveNumber(noneZeroCount)
    }, [counts])

        //    console.log('CHISLO', counts)
    const handleBuyNow = () => 
    {   
        if(activeNumber)
        {   
            const currentStorage = JSON.parse(localStorage.getItem('numberCount')) || [];
            const currentStorageIdCountry = JSON.parse(localStorage.getItem('countryId')) || [];
            // const duplicateStorageboolean = Object.entries(counts).

            // const storage = Object.entries(counts)
            //                     .filter(([type, count]) => count !== 0 )
            //                     .map(([type, count]) => (
            //                         {
            //                             country: nameCountry[localStorageIdCountry - 1], 
            //                             TypeRoom: type, 
            //                             num: count
            //                         }));
            console.log('arg', counts)
            const storage = Object.entries(counts)
                                .filter(([type, count]) => count !== 0 )
                                .map(([type, count]) => 
                                    {   console.log(nameCountry[localCountryId - 1])
                                        return{
                                        country: nameCountry[localCountryId - 1], 
                                        TypeRoom: type, 
                                        num: count
                                        }
                                    });
            // const duplicateStorageboolean = currentStorage.some(entry => entry.country === storage[0].country &&
            //                                                              entry.TypeRoom === storage[0].TypeRoom)
            // console.log('Првоерка', duplicateStorageboolean)
            // if(duplicateStorageboolean)
            //     {
            //         currentStorage.find(entry => entry.country === storage[0].country && entry.TypeRoom === storage[0].TypeRoom).num = storage[0].num;
            //     }
            //     console.log('Првоерка 2', duplicateStorageboolean)

            console.log('Изменение', storage)
            const test = storage;
            console.log(test)
            storage.forEach(newEntry =>
                {
                    const existingIndex = currentStorage.findIndex(entry => 
                    entry.country === newEntry.country && entry.TypeRoom === newEntry.TypeRoom);      
                    console.log(newEntry)
                    console.log(existingIndex)
                    if(existingIndex !== -1)
                    {
                        currentStorage[existingIndex].num = newEntry.num;
                        console.log('yes')
                        console.log(currentStorage[existingIndex].num )
                    }
                    else
                    {
                        currentStorage.push(newEntry)
                         console.log('no')
                    }
                }
            )


            const updateStorage = [...currentStorage, ...storage];
            const storogeIdCountry = [...currentStorageIdCountry,...localStorageIdCountry]
            console.log('Временно', updateStorage)
            console.log('Завершение', currentStorage)
            // dispatch(postAllCount(updateStorage));
            // dispatch(postAllCount(currentStorage));
            // localStorage.setItem('numberCount', JSON.stringify(updateStorage))
            localStorage.setItem('numberCount', JSON.stringify(currentStorage))
            localStorage.setItem('countryId', JSON.stringify(storogeIdCountry))
            navigate('/chatBot');
        }
        
    };

    const typeIcons = 
    {
    fixed: LandLineIcon,
    Mobile: MobileIcon,
    NationalType: NationalIcon,
    TollfeeType: TollFeeIcon,
    RandomType: RandomIcon
    };



    const renderTypeRooms = (data, id) => 
    {
        // console.log(id)
        if(!data || data.length === 0)
        {
            return null;
        }
        const allTariffs =  data.filter(country => country.id === id[0]).flatMap(country => country.Tariffs);
        const uniqueTypes = [...new Set( allTariffs.map(tariff => tariff.type))];
        // console.log(uniqueTypes)
        return uniqueTypes.map((type, index) => (
            <TypeRoom
                key={type[index]}
                id={index}
                type={type}
                icon={typeIcons[type]}
                country={nameCountry[localStorageIdCountry.length ? localStorageIdCountry - 1 : localCountryId -1]}
                active={activeComponent === type}
                oneType={oneTypeOfRoom}
                onComponentClick={() => handleComponentClick(type)}
                onCountChange={handleCountChange}
                />
        ))
        
    }
    // console.log(localStorageIdCountry.length)
    
    return (
        <div className='rooms'>
            <Link to='/chatBot' className={activeComponent ? 'active-component' : ''}>
                <div className="rooms__arrow-back">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="15" viewBox="0 0 28 15" fill="none">
                        <path d="M0.354787 6.64373L0.355873 6.64258L6.67668 0.352252C7.15021 -0.118978 7.91612 -0.117224 8.38747 0.356365C8.85876 0.829894 8.85695 1.5958 8.38342 2.06709L4.13963 6.29032L26.6613 6.29032C27.3294 6.29032 27.871 6.83189 27.871 7.5C27.871 8.1681 27.3294 8.70968 26.6613 8.70968L4.13969 8.70968L8.38336 12.9329C8.85689 13.4042 8.8587 14.1701 8.38741 14.6436C7.91606 15.1173 7.15009 15.1189 6.67662 14.6477L0.355813 8.35742L0.354724 8.35627C-0.119046 7.8834 -0.117531 7.11502 0.354787 6.64373Z" fill="#ADABFF"/>
                    </svg>
                </div>
            </Link>
            {
                <div className={` ${activeComponent === null ? 'rooms__map' : 'hidden'}`}>
                    <img src={Map} alt="" className="rooms__map-country" />
                    <div className={`${activeComponent === null ? 'rooms__point-map' : ''}`}>
                        <img  src={PointToMap} alt="" />
                    </div>
                </div>
            }
            <div className="rooms__wrapper-title">
                <h1 className="rooms__title-country">{nameCountry[localStorageIdCountry.length ? localStorageIdCountry - 1 : localCountryId -1]}</h1>
                <h4 className="rooms__subtitle">Local calls only</h4>
            </div>
            <h2 className='rooms__types'>Types of rooms</h2>
                <div className="rooms__wrapper-types">
                    <div className="rooms__wrapper-body">
                        {renderTypeRooms(country.Data, localStorageIdCountry.length ? localStorageIdCountry: [localCountryId])}
                    </div>
                </div>
            <div className="rooms__footer">
                <button onClick={handleBuyNow} 
                        className={`rooms__buy-now ${activeNumber ? '': 'disabled'}`}>{isChangeRoomType ? 'Save change': 'Buy now'}</button>
                <div className={`rooms__calls-responsibility ${activeNumber ? '' : 'opacited'}`}>
                    <div className="rooms__calls-image">
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                            <path d="M8.5 0C6.91775 0 5.37103 0.469192 4.05544 1.34824C2.73985 2.22729 1.71447 3.47672 1.10897 4.93853C0.503466 6.40034 0.34504 8.00887 0.653721 9.56072C0.962403 11.1126 1.72433 12.538 2.84315 13.6569C3.96197 14.7757 5.38743 15.5376 6.93928 15.8463C8.49113 16.155 10.0997 15.9965 11.5615 15.391C13.0233 14.7855 14.2727 13.7602 15.1518 12.4446C16.0308 11.129 16.5 9.58225 16.5 8C16.4978 5.87895 15.6542 3.84542 14.1544 2.34562C12.6546 0.845814 10.621 0.00223986 8.5 0ZM8.5 14.7692C7.16117 14.7692 5.85241 14.3722 4.73922 13.6284C3.62603 12.8846 2.7584 11.8274 2.24605 10.5905C1.7337 9.35356 1.59965 7.99249 1.86084 6.67939C2.12203 5.36629 2.76674 4.16012 3.71343 3.21343C4.66013 2.26674 5.86629 1.62203 7.17939 1.36084C8.49249 1.09965 9.85356 1.2337 11.0905 1.74605C12.3274 2.25839 13.3846 3.12602 14.1284 4.23922C14.8722 5.35241 15.2692 6.66117 15.2692 8C15.2672 9.79468 14.5534 11.5153 13.2843 12.7843C12.0153 14.0534 10.2947 14.7672 8.5 14.7692ZM7.88462 8.61538V4.30769C7.88462 4.14448 7.94945 3.98796 8.06486 3.87255C8.18027 3.75714 8.33679 3.69231 8.5 3.69231C8.66321 3.69231 8.81974 3.75714 8.93514 3.87255C9.05055 3.98796 9.11539 4.14448 9.11539 4.30769V8.61538C9.11539 8.77859 9.05055 8.93512 8.93514 9.05053C8.81974 9.16593 8.66321 9.23077 8.5 9.23077C8.33679 9.23077 8.18027 9.16593 8.06486 9.05053C7.94945 8.93512 7.88462 8.77859 7.88462 8.61538ZM9.42308 11.3846C9.42308 11.5672 9.36894 11.7456 9.26751 11.8974C9.16608 12.0492 9.02192 12.1676 8.85325 12.2374C8.68458 12.3073 8.49898 12.3256 8.31992 12.29C8.14086 12.2543 7.97638 12.1664 7.84729 12.0373C7.71819 11.9082 7.63028 11.7438 7.59466 11.5647C7.55904 11.3856 7.57732 11.2 7.64719 11.0314C7.71706 10.8627 7.83537 10.7185 7.98717 10.6171C8.13897 10.5157 8.31743 10.4615 8.5 10.4615C8.74482 10.4615 8.9796 10.5588 9.15271 10.7319C9.32583 10.905 9.42308 11.1398 9.42308 11.3846Z" fill="#ADABFF"/>
                        </svg>
                    </div>
                    <span className="rooms_calls-text">Calls are your responsibility</span>
                </div>
            </div>
        </div>
    );
};

export default FormRooms;