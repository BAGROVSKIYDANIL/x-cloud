import Header from "./components/header/Header";

const LayerPage = ({children}) =>
{
    return (
        <div>
            <Header/>
           <main>
                {children}
           </main>
        </div>
    )   
}

export default LayerPage;