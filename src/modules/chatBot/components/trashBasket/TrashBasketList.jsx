import React, {useState, useEffect, useRef} from 'react';
import { useDispatch} from 'react-redux';
import { changeTotalCount } from '../../chatBotSlice';
import './TrashBasket.scss'


const TrashBasketList = ({country, handleDeleteClick, typeRoom, numberCounter,  nameCountry, indexRoom}) => {

    const url = `${country.Country}.svg`;
    const typeAndNumberCount = JSON.parse(localStorage.getItem('numberCount')) || [];
    const dispatch = useDispatch();
    const [count, setCount] = useState(numberCounter);
    const [total, setTotal] = useState(0);
    console.log('vac', count)
    console.log('Props', typeRoom)
    console.log('Props2', numberCounter)

    const  incrementCount = (e) =>
    {   
        const index = +e.currentTarget.getAttribute('count-index');
        console.log("индекс",index)
        const updateCount = [...count];
        updateCount[index] += 1;
        setCount(updateCount);

    }
    const decrementCount = (e) =>
    {
        const index = +e.currentTarget.getAttribute('count-index');
        if(count !== 0)
        {
            const updateCount = [...count]
            updateCount[index] -= 1;
            setCount(updateCount)
        }
    }

    useEffect(() =>
    {
        setCount(numberCounter)
    }, [numberCounter])

    useEffect(() => 
    {
        setCount(numberCounter)
    }, [numberCounter]);


       useEffect(() => {
        const updatedStorage = typeAndNumberCount.map((item) => {
            const typeRoomIndex = typeRoom.findIndex(room => room.type === item.TypeRoom && item.country === nameCountry);
            if (typeRoomIndex !== -1) {
                return { ...item, num: count[typeRoomIndex] };
            }
            return item;
        });
        // console.log(updatedStorage)
        localStorage.setItem('numberCount', JSON.stringify(updatedStorage));
    }, [count]);

    // useEffect(() => 
    // {
    //     updateLocalStorage(count)
    // }, [count]);

    // useEffect(() =>
    // {
    //     setTotal(count * 480);
    //     dispatch(changeTotalCount(total))
    // }, [count, dispatch, total])
    // console.log(total)

    
    // const filteredResults = typeRoom.filter(item => {
    //     const matchingCountry = typeAndNumberCount.find(country => country.TypeRoom === item.type && country.country === nameCountry);
    //     return matchingCountry && matchingCountry.num !== 0;
    // });
    const filteredResults = typeRoom.map((item, index) => {
        const matchingCountry = typeAndNumberCount.find(country => country.TypeRoom === item.type && country.country === nameCountry);
        if (matchingCountry && matchingCountry.num !== 0) {
            return { ...item, countIndex: index, num: matchingCountry.num };
        }
        return null;
    }).filter(item => item !== null);
    // console.log('filteredResults', filteredResults);
    return (
            <div className="trashBasket__selected-country">
                <div className="trashBasket__item">
                    <div className="trashBasket__header">
                        <div className="trashBasket__left-column-header">
                        <div className="trashBasket__icon">
                            <img src={require(`../../../../assets/icons/trashCan-country/${url}`)} alt={`Flag of ${country.name}`} />
                        </div>
                        <div className="trashBasket__title">{country.Country}</div>
                        </div>
                        <button onClick={() => handleDeleteClick(country.id, indexRoom)} 
                                className="trashBasket__trash-can"
                                >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M3 6H5H21" stroke="#ADABFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z" stroke="#ADABFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M10 11V17" stroke="#ADABFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M14 11V17" stroke="#ADABFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                    </div>
                    <div className="trashBasket__body">
                       {filteredResults.map((item, index) => (   

                            <div key={index} className="trashBasket__type-rooms">
                            <div className="trashBasket__name-type">{item.type}</div>
                            <div className="trashBasket__right-column-body">
                                <div className="trashBasket__counter">
                                    <div onClick={(e) => decrementCount(e)}
                                        count-index={index} 
                                        className="trashBasket__decrease">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="23" viewBox="0 0 24 23" fill="none">
                                            <path d="M18 12.5H6C5.45 12.5 5 12.05 5 11.5C5 10.95 5.45 10.5 6 10.5H18C18.55 10.5 19 10.95 19 11.5C19 12.05 18.55 12.5 18 12.5Z" fill="#ADABFF"/>
                                        </svg>
                                    </div>
                                    {/* <div className="trashBasket__number">{count[index]} */}
                                    <div className="trashBasket__number">{count[item.countIndex]}
                                    </div>
                                    <div onClick={(e) => incrementCount(e)} 
                                        className="trashBasket__increase"
                                        // count-index={index}
                                        count-index={item.countIndex}
                                        >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="23" viewBox="0 0 24 23" fill="none">
                                            <path d="M18 12.5H13V17.5C13 18.05 12.55 18.5 12 18.5C11.45 18.5 11 18.05 11 17.5V12.5H6C5.45 12.5 5 12.05 5 11.5C5 10.95 5.45 10.5 6 10.5H11V5.5C11 4.95 11.45 4.5 12 4.5C12.55 4.5 13 4.95 13 5.5V10.5H18C18.55 10.5 19 10.95 19 11.5C19 12.05 18.55 12.5 18 12.5Z" fill="#ADABFF"/>
                                        </svg>
                                    </div>
                                </div>
                                <div className="trashBasket__price">840$</div>
                            </div>
                        </div>
                        ))}
                    </div>
                    <div className="trashBasket__line">
                        <hr />
                    </div>
                </div>
            </div>
    );
};

export default TrashBasketList;