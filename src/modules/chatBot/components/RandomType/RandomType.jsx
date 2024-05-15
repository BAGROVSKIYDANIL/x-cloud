import React, {useState} from 'react';
import RandomTypeSvg from '../../../../assets/icons/TypesCall/Random.svg'
import './RandomType.scss';

const RandomType = ({active, onComponentClick}) => {
    const [activeImage, setactiveImage] = useState(false);
    return (
        <div className={`random ${active ? 'active-dropdown' : ''}`}>
            <div className="random__wrapper">
                {   activeImage ? 
                    <div className="random__image">
                        <img src={RandomTypeSvg} alt="" />
                    </div>
                    : ''
                }
                <label className="landline__checkbox-wrapper">
                    <input className='landline__input' type="checkbox"/>
                    <span className="landline__checkbox"></span>
                </label>
                <div className="random__title-information">
                    <div className="random__title">random</div>
                    <div className="random__billing">
                        <span className="random__billing-step">Billing step:</span>
                        <span className="random__per-second">per Second</span>
                    </div>
                </div>
                <div className="random__counter">
                    <div className="random__decrease">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="23" viewBox="0 0 24 23" fill="none">
                            <path d="M18 12.5H6C5.45 12.5 5 12.05 5 11.5C5 10.95 5.45 10.5 6 10.5H18C18.55 10.5 19 10.95 19 11.5C19 12.05 18.55 12.5 18 12.5Z" fill="#ADABFF"/>
                        </svg>
                    </div>
                    <div className="random__number">1</div>
                    <div className="random__increase">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="23" viewBox="0 0 24 23" fill="none">
                            <path d="M18 12.5H13V17.5C13 18.05 12.55 18.5 12 18.5C11.45 18.5 11 18.05 11 17.5V12.5H6C5.45 12.5 5 12.05 5 11.5C5 10.95 5.45 10.5 6 10.5H11V5.5C11 4.95 11.45 4.5 12 4.5C12.55 4.5 13 4.95 13 5.5V10.5H18C18.55 10.5 19 10.95 19 11.5C19 12.05 18.55 12.5 18 12.5Z" fill="#ADABFF"/>
                        </svg>
                    </div>
                </div>
                <div onClick={onComponentClick} className={`random__arrow ${active ? 'active' : ''}`}>

                </div>
            </div>
            <div className={`random__dropdown ${active ? 'visible' : ''}`}>
                <div className="random__group-once">
                    <div className="random__column-left">
                        <div className="random__group-title">Activation Free</div>
                        <div className="random__group-subtitle">One-time payment for first purchase</div>
                    </div>
                    <div className="random__column-right">
                        <div className="random__group-number">140</div>
                        <div className="random__timing">$/Once</div>
                    </div>
                </div>
                <div className="random__group-month">
                    <div className="random__column-left">
                        <div className="random__group-title">Monthly Fee</div>
                        <div className="random__group-subtitle">monthly room fee</div>
                    </div>
                    <div className="random__column-right">
                        <div className="random__group-number">130</div>
                        <div className="random__timing">$/Month</div>
                    </div>
                </div>
                <div className="random__group-out-minute">
                    <div className="random__column-left">
                        <div className="random__group-title">Outbound Rate per minute</div>
                        <div className="random__group-subtitle">monthly payment</div>
                    </div>
                    <div className="random__column-right">
                        <div className="random__group-number">0.25</div>
                        <div className="random__timing">$/Minute</div>
                    </div>
                </div>
                <div className="random__group-in-minute">
                    <div className="random__column-left">
                        <div className="random__group-title">Inbound Rate per minute</div>
                        <div className="random__group-subtitle">monthly payment</div>
                    </div>
                    <div className="random__column-right">
                        <div className="random__group-number">0.20</div>
                        <div className="random__timing">$/Minute</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RandomType;