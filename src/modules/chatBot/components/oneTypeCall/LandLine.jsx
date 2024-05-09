import React, {useState} from 'react';
import LandLineImg from '../../../../assets/icons/LandLine.svg'

import './LandLine.scss';

const LandLine = () => 
{
    const [isVibisibleArrow, setIsVisibleArrow] = useState(true);
    const [activeArrow, setActiveArrow] = useState(false);

    const handleClickArrow = () =>
    {
        setActiveArrow(!activeArrow)
    }
    console.log(activeArrow)
    return (
        <div className='landline'>
            <div className="landline__wrapper">
                <div className="landline__image">
                    <img src={LandLineImg} alt="" />
                </div>
                <div className="landline__title-information">
                    <div className="landline__title">LandLine</div>
                    <div className="landline__billing">
                        <span className="landline__billing-step">Billing step:</span>
                        <span className="landline__per-second">per Second</span>
                    </div>
                </div>
                <div className="landline__counter">
                    <div className="landline__decrease">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="23" viewBox="0 0 24 23" fill="none">
                            <path d="M18 12.5H6C5.45 12.5 5 12.05 5 11.5C5 10.95 5.45 10.5 6 10.5H18C18.55 10.5 19 10.95 19 11.5C19 12.05 18.55 12.5 18 12.5Z" fill="#ADABFF"/>
                        </svg>
                    </div>
                    <div className="landline__number">1</div>
                    <div className="landline__increase">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="23" viewBox="0 0 24 23" fill="none">
                            <path d="M18 12.5H13V17.5C13 18.05 12.55 18.5 12 18.5C11.45 18.5 11 18.05 11 17.5V12.5H6C5.45 12.5 5 12.05 5 11.5C5 10.95 5.45 10.5 6 10.5H11V5.5C11 4.95 11.45 4.5 12 4.5C12.55 4.5 13 4.95 13 5.5V10.5H18C18.55 10.5 19 10.95 19 11.5C19 12.05 18.55 12.5 18 12.5Z" fill="#ADABFF"/>
                        </svg>
                    </div>
                </div>
                <div onClick={handleClickArrow} className={`landline__arrow ${activeArrow ? 'active' : ''}`}>

                </div>
            </div>
            <div className={`landline__dropdown ${activeArrow ? 'visible' : ''} `}>
                    <div className="landline__group-once">
                        <div className="landline__column-left">
                            <div className="landline__group-title">Activation Free</div>
                            <div className="landline__group-subtitle">One-time payment for first purchase</div>
                        </div>
                        <div className="landline__column-right">
                            <div className="landline__group-number">140</div>
                            <div className="landline__timing">$/Once</div>
                        </div>
                    </div>
                    <div className="landline__group-month">
                        <div className="landline__column-left">
                            <div className="landline__group-title">Monthly Fee</div>
                            <div className="landline__group-subtitle">monthly room fee</div>
                        </div>
                        <div className="landline__column-right">
                            <div className="landline__group-number">130</div>
                            <div className="landline__timing">$/Month</div>
                        </div>
                    </div>
                    <div className="landline__group-out-minute">
                        <div className="landline__column-left">
                            <div className="landline__group-title">Outbound Rate per minute</div>
                            <div className="landline__group-subtitle">monthly payment</div>
                        </div>
                        <div className="landline__column-right">
                            <div className="landline__group-number">0.25</div>
                            <div className="landline__timing">$/Minute</div>
                        </div>
                    </div>
                    <div className="landline__group-in-minute">
                        <div className="landline__column-left">
                            <div className="landline__group-title">Inbound Rate per minute</div>
                            <div className="landline__group-subtitle">monthly payment</div>
                        </div>
                        <div className="landline__column-right">
                            <div className="landline__group-number">0.20</div>
                            <div className="landline__timing">$/Minute</div>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default LandLine;