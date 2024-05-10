import React, {useState} from 'react';
import Mobile from '../../../../assets/icons/TypesCall/mobile.svg'

import './Mobile.scss';

const MobileType = () => {
    const [activeArrow, setActiveArrow] = useState(false);
    const handleClickArrow = () =>
    {
        setActiveArrow(!activeArrow)
    }
    return (
        <div className={`mobile ${activeArrow ? 'active-dropdown' : ''}`}>
            <div className="mobile__wrapper">
                <div className="mobile__image">
                    <img src={Mobile} alt="" />
                </div>
                <div className="mobile__title-information">
                    <div className="mobile__title">Mobile</div>
                    <div className="mobile__billing">
                        <span className="mobile__billing-step">Billing step:</span>
                        <span className="mobile__per-second">per Second</span>
                    </div>
                </div>
                <div className="mobile__counter">
                    <div className="mobile__decrease">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="23" viewBox="0 0 24 23" fill="none">
                            <path d="M18 12.5H6C5.45 12.5 5 12.05 5 11.5C5 10.95 5.45 10.5 6 10.5H18C18.55 10.5 19 10.95 19 11.5C19 12.05 18.55 12.5 18 12.5Z" fill="#ADABFF"/>
                        </svg>
                    </div>
                    <div className="mobile__number">1</div>
                    <div className="mobile__increase">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="23" viewBox="0 0 24 23" fill="none">
                            <path d="M18 12.5H13V17.5C13 18.05 12.55 18.5 12 18.5C11.45 18.5 11 18.05 11 17.5V12.5H6C5.45 12.5 5 12.05 5 11.5C5 10.95 5.45 10.5 6 10.5H11V5.5C11 4.95 11.45 4.5 12 4.5C12.55 4.5 13 4.95 13 5.5V10.5H18C18.55 10.5 19 10.95 19 11.5C19 12.05 18.55 12.5 18 12.5Z" fill="#ADABFF"/>
                        </svg>
                    </div>
                </div>
                <div onClick={handleClickArrow} className={`mobile__arrow ${activeArrow ? 'active' : ''}`}>

                </div>
            </div>
            <div className={`mobile__dropdown ${activeArrow ? 'visible' : ''}`}>
                <div className="mobile__group-once">
                    <div className="mobile__column-left">
                        <div className="mobile__group-title">Activation Free</div>
                        <div className="mobile__group-subtitle">One-time payment for first purchase</div>
                    </div>
                    <div className="mobile__column-right">
                        <div className="mobile__group-number">140</div>
                        <div className="mobile__timing">$/Once</div>
                    </div>
                </div>
                <div className="mobile__group-month">
                    <div className="mobile__column-left">
                        <div className="mobile__group-title">Monthly Fee</div>
                        <div className="mobile__group-subtitle">monthly room fee</div>
                    </div>
                    <div className="mobile__column-right">
                        <div className="mobile__group-number">130</div>
                        <div className="mobile__timing">$/Month</div>
                    </div>
                </div>
                <div className="mobile__group-out-minute">
                    <div className="mobile__column-left">
                        <div className="mobile__group-title">Outbound Rate per minute</div>
                        <div className="mobile__group-subtitle">monthly payment</div>
                    </div>
                    <div className="mobile__column-right">
                        <div className="mobile__group-number">0.25</div>
                        <div className="mobile__timing">$/Minute</div>
                    </div>
                </div>
                <div className="mobile__group-in-minute">
                    <div className="mobile__column-left">
                        <div className="mobile__group-title">Inbound Rate per minute</div>
                        <div className="mobile__group-subtitle">monthly payment</div>
                    </div>
                    <div className="mobile__column-right">
                        <div className="mobile__group-number">0.20</div>
                        <div className="mobile__timing">$/Minute</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileType;