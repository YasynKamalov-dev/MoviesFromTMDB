import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import TopRated from './components/TopRated';
import Popular from './components/Popular';
import Home from './components/Home';
import DetailPage from './components/Pages/DetailPage';
import ActorsDetail from './components/Pages/ActorsDetail';
import { useState } from 'react';

function App() {
  const [mode,setMode] = useState(JSON.parse(localStorage.getItem('mode')) || false)


  return (
    <div style={{
      background: mode ? 'black' : '',
      color: mode ? 'white' : ''
    }}>
     <Header setMode={setMode} mode={mode}/>

     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/popular' element={<Popular/>}/>
      <Route path='/toprated' element={<TopRated/>}/>
      <Route path='/popular-detail/:popularId' element={<DetailPage/>}/>
      <Route path='/actor-detail/:actorId' element={<ActorsDetail/>}/>
     </Routes>
    </div>
  );
}

export default App;
