import React, {useState} from 'react';
import NationalTypeSvg from '../../../../assets/icons/TypesCall/National.svg'
import './NationalType.scss';

const NationalType = ({active, onComponentClick}) => {
    const [activeImage, setactiveImage] = useState(false);

    return (
        <div className={`national ${active ? 'active-dropdown' : ''}`}>
            <div className="national__wrapper">
                {   activeImage ? 
                    <div className="national__image">
                        <img src={NationalTypeSvg} alt="" />
                    </div>
                    : ''
                }
                <label className="landline__checkbox-wrapper">
                    <input className='landline__input' type="checkbox"/>
                    <span className="landline__checkbox"></span>
                </label>
                <div className="national__title-information">
                    <div className="national__title">National</div>
                    <div className="national__billing">
                        <span className="national__billing-step">Billing step:</span>
                        <span className="national__per-second">per Second</span>
                    </div>
                </div>
                <div className="national__counter">
                    <div className="national__decrease">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="23" viewBox="0 0 24 23" fill="none">
                            <path d="M18 12.5H6C5.45 12.5 5 12.05 5 11.5C5 10.95 5.45 10.5 6 10.5H18C18.55 10.5 19 10.95 19 11.5C19 12.05 18.55 12.5 18 12.5Z" fill="#ADABFF"/>
                        </svg>
                    </div>
                    <div className="national__number">1</div>
                    <div className="national__increase">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="23" viewBox="0 0 24 23" fill="none">
                            <path d="M18 12.5H13V17.5C13 18.05 12.55 18.5 12 18.5C11.45 18.5 11 18.05 11 17.5V12.5H6C5.45 12.5 5 12.05 5 11.5C5 10.95 5.45 10.5 6 10.5H11V5.5C11 4.95 11.45 4.5 12 4.5C12.55 4.5 13 4.95 13 5.5V10.5H18C18.55 10.5 19 10.95 19 11.5C19 12.05 18.55 12.5 18 12.5Z" fill="#ADABFF"/>
                        </svg>
                    </div>
                </div>
                <div onClick={onComponentClick} className={`national__arrow ${active ? 'active' : ''}`}>

                </div>
            </div>
            <div className={`national__dropdown ${active ? 'visible' : ''}`}>
                <div className="national__group-once">
                    <div className="national__column-left">
                        <div className="national__group-title">Activation Free</div>
                        <div className="national__group-subtitle">One-time payment for first purchase</div>
                    </div>
                    <div className="national__column-right">
                        <div className="national__group-number">140</div>
                        <div className="national__timing">$/Once</div>
                    </div>
                </div>
                <div className="national__group-month">
                    <div className="national__column-left">
                        <div className="national__group-title">Monthly Fee</div>
                        <div className="national__group-subtitle">monthly room fee</div>
                    </div>
                    <div className="national__column-right">
                        <div className="national__group-number">130</div>
                        <div className="national__timing">$/Month</div>
                    </div>
                </div>
                <div className="national__group-out-minute">
                    <div className="national__column-left">
                        <div className="national__group-title">Outbound Rate per minute</div>
                        <div className="national__group-subtitle">monthly payment</div>
                    </div>
                    <div className="national__column-right">
                        <div className="national__group-number">0.25</div>
                        <div className="national__timing">$/Minute</div>
                    </div>
                </div>
                <div className="national__group-in-minute">
                    <div className="national__column-left">
                        <div className="national__group-title">Inbound Rate per minute</div>
                        <div className="national__group-subtitle">monthly payment</div>
                    </div>
                    <div className="national__column-right">
                        <div className="national__group-number">0.20</div>
                        <div className="national__timing">$/Minute</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NationalType;