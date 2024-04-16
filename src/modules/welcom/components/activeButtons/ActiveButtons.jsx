import React, { useEffect, useState } from 'react';
import './ActiveButton.scss';

const ActiveButtons = () => 
{
    const [loaded, setLoaded] = useState(false);

    useEffect(() =>
    {
        const timeOut = setTimeout(() =>
        {
            setLoaded(true);
        }, 1000);

        return () => clearTimeout(timeOut)
    }, [])

    return(
        <div className="buttons">
            <button className={loaded ? 'buttons__warranties': 'buttons__loaded'}>Warranties </button>
            <button className={loaded ? 'buttons__sla' : 'buttons__loaded'}>SLA</button>
            <button className={loaded ? 'buttons__contacts' : 'buttons__loaded'}>Contacts</button>
            <button className={loaded ? 'buttons__terms-condtions' : 'buttons__loaded'}>Terms&Conditions</button>
            <button className={loaded ? 'buttons__agreements' : 'buttons__loaded'}>Aggreements</button>
        </div>
    )
}

export default ActiveButtons;