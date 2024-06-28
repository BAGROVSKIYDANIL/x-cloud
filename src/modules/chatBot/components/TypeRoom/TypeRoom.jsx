import React, {useState, useEffect} from 'react';
// import { useDispatch, useSelector } from 'react-redux'; 
// import { postAllCount } from '../../chatBotSlice';
import LandLineImg from '../../../../assets/icons/TypesCall/LandLine.svg'
import './TypeRoom.scss';

const TypeRoom = ({ type, active, onComponentClick, onCountChange, oneType, icon, country, id}) => 
{
    const [activeStateOpenDropDown, setactiveStateOpenDropDown] = useState(false);
    const countryRoomTypes = JSON.parse(localStorage.getItem('numberCount')) || [];
    let isChangeRoomType;
    countryRoomTypes.some(item => item.country === country ? isChangeRoomType = true : isChangeRoomType = false)
    let hasCountry;
    countryRoomTypes.some(item => item.country === country ? hasCountry = true : hasCountry = false)
    // console.log('index', countIndex)
    // console.log(country)
    // console.log('id', id)
    const [number, setNumber] = useState([])
    const [count, setCount] = useState(0);
    // console.log('текущие данные', countryRoomTypes)
    // console.log('Верная страна',hasCountry)
    // console.log('Изменёная страна',isChangeRoomType)
    useEffect(() =>
    {
        const test = [];
       countryRoomTypes.forEach((item) => 
        {
            if(item.country === country)
            {
                test.push(item.num)
            }
        });
       
       setNumber(test)
    }, [])
    console.log('Число', number)

    const  hadnlerIncrementCount = (e) =>
    {
        const index = +e.currentTarget.getAttribute('count-index')
        console.log('index', index)
        if(isChangeRoomType)
        {
            const updateCount = [...number];
            updateCount[index] += 1
            setNumber(updateCount)
        }
        else 
        {
            setCount(count =>  count + 1 )
        }
    }

    const handlerDecrementCount = (e) =>
    {   
        const index = +e.currentTarget.getAttribute('count-index')
         console.log('index', index)
         console.log(number[id])
        if(number[id] !== 0)
        {
            console.log('change-dec')
            const updateCount = [...number];
            updateCount[index] -= 1;
            setNumber(updateCount)
        }
        else if(count !==0)
        {
            console.log('no change-dec')
            setCount(count => count - 1)
        }
    }

    useEffect(() =>
    {
        if(active)
            {
                const timeOutId = setTimeout(() =>
                {
                    setactiveStateOpenDropDown(true);
                }, 400)
                return () => clearTimeout(timeOutId)
            }
            else 
            {
                setactiveStateOpenDropDown(false);
            }
    },[active])
    
    useEffect(() =>
    {   const submitCount = isChangeRoomType ? number[id] : count
        onCountChange(type, submitCount)
    }, [id, isChangeRoomType, number,count, type, onCountChange])

    

    return (
        <div className={`type ${activeStateOpenDropDown ? 'active-dropdown' : ''}`}>
            <div className="type__wrapper">
                {
                    oneType ? 
                        <div className="type__image">
                            <img src={LandLineImg} alt="" />
                        </div>
                    : ''
                }
                {
                    oneType ? '':
                    <label className="type__checkbox-wrapper">
                        <input className='type__input' type="checkbox"/>
                        <span className="type__checkbox"></span>
                    </label>
                }
                <div className="type__title-information">
                    <div className="type__title">{type}</div>
                    <div className="type__billing">
                        <span className="type__billing-step">Billing step:</span>
                        <span className="type__per-second">per Second</span>
                    </div>
                </div>
                <div className="type__counter">
                    <div onClick={(e) => handlerDecrementCount(e)} 
                         count-index={id}
                         className="type__decrease">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="23" viewBox="0 0 24 23" fill="none">
                            <path d="M18 12.5H6C5.45 12.5 5 12.05 5 11.5C5 10.95 5.45 10.5 6 10.5H18C18.55 10.5 19 10.95 19 11.5C19 12.05 18.55 12.5 18 12.5Z" fill="#ADABFF"/>
                        </svg>
                    </div>
                    <div className="type__number">
                        {
        
                            countryRoomTypes.length && hasCountry ? 
                            number[id] 
                            :
                            count
                        }
                        </div>
                    <div onClick={(e) => hadnlerIncrementCount(e)} 
                         count-index={id}
                         className="type__increase">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="23" viewBox="0 0 24 23" fill="none">
                            <path d="M18 12.5H13V17.5C13 18.05 12.55 18.5 12 18.5C11.45 18.5 11 18.05 11 17.5V12.5H6C5.45 12.5 5 12.05 5 11.5C5 10.95 5.45 10.5 6 10.5H11V5.5C11 4.95 11.45 4.5 12 4.5C12.55 4.5 13 4.95 13 5.5V10.5H18C18.55 10.5 19 10.95 19 11.5C19 12.05 18.55 12.5 18 12.5Z" fill="#ADABFF"/>
                        </svg>
                    </div>
                </div>
                <div onClick={onComponentClick} className={`type__arrow ${active ? 'active' : ''}`}>

                </div>
            </div>
            <div className={`type__dropdown ${active ? 'visible' : ''} `}>
                    <div className="type__group-once">
                        <div className="type__column-left">
                            <div className="type__group-title">Activation Free</div>
                            <div className="type__group-subtitle">One-time payment for first purchase</div>
                        </div>
                        <div className="type__column-right">
                            <div className="type__group-number">140</div>
                            <div className="type__timing">$/Once</div>
                        </div>
                    </div>
                    <div className="type__group-month">
                        <div className="type__column-left">
                            <div className="type__group-title">Monthly Fee</div>
                            <div className="type__group-subtitle">monthly room fee</div>
                        </div>
                        <div className="type__column-right">
                            <div className="type__group-number">130</div>
                            <div className="type__timing">$/Month</div>
                        </div>
                    </div>
                    <div className="type__group-out-minute">
                        <div className="type__column-left">
                            <div className="type__group-title">Outbound Rate per minute</div>
                            <div className="type__group-subtitle">monthly payment</div>
                        </div>
                        <div className="type__column-right">
                            <div className="type__group-number">0.25</div>
                            <div className="type__timing">$/Minute</div>
                        </div>
                    </div>
                    <div className="type__group-in-minute">
                        <div className="type__column-left">
                            <div className="type__group-title">Inbound Rate per minute</div>
                            <div className="type__group-subtitle">monthly payment</div>
                        </div>
                        <div className="type__column-right">
                            <div className="type__group-number">0.20</div>
                            <div className="type__timing">$/Minute</div>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default TypeRoom;