import {Routes, Route} from 'react-router-dom'
import WelcomePage from './pages/WelcomePage';
import VoipPage from './pages/VoipPage';
import ChatPage from './pages/ChatPage'
import FormRooms from './modules/chatBot/components/formRooms/FormRooms';
import TrashBasket from './modules/chatBot/components/trashBasket/TrashBasket';
import './App.scss';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<WelcomePage/>}/>
        <Route path='/voip' element={<VoipPage/>}/>
        <Route path='/chatBot' element={<ChatPage/>}/>
        <Route path='/rooms' element={<FormRooms/>} />
        <Route path='/trashBasket' element={<TrashBasket/>} />
      </Routes>
    </div>
  );
}

export default App;
