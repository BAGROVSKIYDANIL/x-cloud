import React from 'react';
import './ActiveButton.scss';

const ActiveButtons = () => 
{
    const aply = () =>
    {

    }

    return(
        <div className="buttons">
            <button className='buttons__warranties'>Warranties </button>
            <button className='buttons__sla'>SLA</button>
            <button className='buttons__contacts'>Contacts</button>
            <button className='buttons__terms-condtions'>Terms&Conditions</button>
            <button className='buttons__agreements'>Aggreements</button>
        </div>
    )
}

export default ActiveButtons;