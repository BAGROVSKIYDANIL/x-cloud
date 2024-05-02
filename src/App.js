import {Routes, Route} from 'react-router-dom'
import WelcomePage from './pages/WelcomePage';
import VoipPage from './pages/VoipPage';
import CardCountries from './modules/chatBot/components/CardCountries'
import './App.scss';
function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path='/' element={<WelcomePage/>}/> */}
        {/* <Route path='/voip' element={<VoipPage/>}/> */}
        <Route path='/' element={<CardCountries/>}/>
      </Routes>
    </div>
  );
}

export default App;
