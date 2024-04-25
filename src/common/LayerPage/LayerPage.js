import Header from "../components/header/Header";
import './LayerPage.scss'

const LayerPage = ({children}) =>
{
    const openChat = () =>
    {
        if(window.jivo_api)
        {
            console.log('yes');
            window.jivo_api.open();
        }
        else
        {
            console.log('no')
        }
    }
    return (
        <div className="LayerPage" >
            <Header/>
           <main className="container">
                {children}
           </main>
           {/* <div className="group-message" onClick={openChat} ></div>
            <a href="https://t.me/VoiceXPayBot">
                <div className="group-phone"></div>
            </a> */}
        </div>
    )   
}

export default LayerPage;