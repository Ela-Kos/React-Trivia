import './App.css';
import image from './img/TriviaBg2.png';
import Home from './pages/Home';
import Setup from './pages/Setup';
import Quiz from './pages/Quiz';
import {Routes, Route} from 'react-router-dom';


function App() { 
  return (
    <div className='App' style={{backgroundImage:`url(${image})`}}> 
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/setup' element={<Setup/>}/>
      <Route path='/quiz' element={<Quiz/>}/>
    </Routes> 
    </div>
  );
}

export default App;
