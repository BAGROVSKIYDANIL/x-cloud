import Header from "../components/header/Header";
import './LayerPage.scss'

const LayerPage = ({children}) =>
{
    return (
        <div className="LayerPage" >
            <Header/>
           <main className="container">
                {children}
           </main>
           <div className="group-message"></div>
           <div className="group-phone"></div>
        </div>
    )   
}

export default LayerPage;