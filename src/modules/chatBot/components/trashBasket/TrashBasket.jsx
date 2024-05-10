import React from "react";
import CanadaSvg from '../../../../assets/icons/trashCan-country/canada.svg'
import SeychellesSvg from '../../../../assets/icons/trashCan-country/seychelles.svg'
import './TrashBasket.scss'

const TrashBasket = () =>
    {
        return(
            <div className="trashBasket">
                <nav className="trashBasket__menu">
                    <div className="trashBasket__arrow-back">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="15" viewBox="0 0 28 15" fill="none">
                        <path d="M0.354787 6.64373L0.355873 6.64258L6.67668 0.352252C7.15021 -0.118978 7.91612 -0.117224 8.38747 0.356365C8.85876 0.829894 8.85695 1.5958 8.38342 2.06709L4.13963 6.29032L26.6613 6.29032C27.3294 6.29032 27.871 6.83189 27.871 7.5C27.871 8.1681 27.3294 8.70968 26.6613 8.70968L4.13969 8.70968L8.38336 12.9329C8.85689 13.4042 8.8587 14.1701 8.38741 14.6436C7.91606 15.1173 7.15009 15.1189 6.67662 14.6477L0.355813 8.35742L0.354724 8.35627C-0.119046 7.8834 -0.117531 7.11502 0.354787 6.64373Z" fill="#ADABFF"/>
                        </svg>
                    </div>
                    <div className="trashBasket__group-remove">
                        <button className="trashBasket__delete-all">
                            Delete all
                        </button>
                        <button className="trashBasket__trash-can">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M3 6H5H21" stroke="#ADABFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z" stroke="#ADABFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M10 11V17" stroke="#ADABFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M14 11V17" stroke="#ADABFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                    </div>
                </nav>
                <div className="trashBasket__selected-country">
                    <div className="trashBasket__header">
                        <div className="trashBasket__left-column-header">
                        <div className="trashBasket__icon">
                            <img src={CanadaSvg} alt="" />
                        </div>
                        <div className="trashBasket__title">Canada</div>
                        </div>
                        <button className="trashBasket__trash-can">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M3 6H5H21" stroke="#ADABFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z" stroke="#ADABFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M10 11V17" stroke="#ADABFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M14 11V17" stroke="#ADABFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                    </div>
                    <div className="trashBasket__body">
                        <div className="trashBasket__type-rooms">
                            <div className="trashBasket__name-type">Tollfee</div>
                            <div className="trashBasket__right-column-body">
                                <div className="trashBasket__counter">
                                    <div className="trashBasket__decrease">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="23" viewBox="0 0 24 23" fill="none">
                                <path d="M18 12.5H6C5.45 12.5 5 12.05 5 11.5C5 10.95 5.45 10.5 6 10.5H18C18.55 10.5 19 10.95 19 11.5C19 12.05 18.55 12.5 18 12.5Z" fill="#ADABFF"/>
                            </svg>
                                    </div>
                                    <div className="trashBasket__number">3</div>
                                    <div className="trashBasket__increase">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="23" viewBox="0 0 24 23" fill="none">
                                            <path d="M18 12.5H13V17.5C13 18.05 12.55 18.5 12 18.5C11.45 18.5 11 18.05 11 17.5V12.5H6C5.45 12.5 5 12.05 5 11.5C5 10.95 5.45 10.5 6 10.5H11V5.5C11 4.95 11.45 4.5 12 4.5C12.55 4.5 13 4.95 13 5.5V10.5H18C18.55 10.5 19 10.95 19 11.5C19 12.05 18.55 12.5 18 12.5Z" fill="#ADABFF"/>
                                        </svg>
                                    </div>
                                </div>
                                <div className="trashBasket__price">840$</div>
                            </div>
                        </div>
                        <div className="trashBasket__type-rooms">
                        <div className="trashBasket__name-type">Landline</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

export default TrashBasket