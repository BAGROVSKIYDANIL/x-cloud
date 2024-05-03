import React from 'react';
import LayerPage from '../common/LayerPage/LayerPage';
import MainPage from '../modules/welcom/components/mainPage/MainPage';
import Assistent from '../common/components/assistent/Assistent';
const WelcomePage = () => {
    return (
        <LayerPage>
            <MainPage/>
            {/* <Assistent/> */}
        </LayerPage>
    );
};

export default WelcomePage;