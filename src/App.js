import {Routes, Route} from 'react-router-dom'
import WelcomePage from './pages/WelcomePage';
import VoipPage from './pages/VoipPage';
import ChatPage from './pages/ChatPage'
import './App.scss';
function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path='/' element={<WelcomePage/>}/> */}
        {/* <Route path='/voip' element={<VoipPage/>}/> */}
        <Route path='/' element={<ChatPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
