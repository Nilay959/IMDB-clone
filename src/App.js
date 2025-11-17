import logo from './logo.svg';
import './App.css'
// import LifeCycleExample from './Components/LifeCycleExample';
import { useState } from 'react';
import Header from './Components/Header';
import Banner from './Components/Banner';
import MovieListWrapper from './Components/MovieListWrapper';
import MoviePage from './Components/MoviePage';
import Favourites from './Components/Favouraites';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MovieDetailPage from './Components/MovieDetailPage';
import AddMovie from './Components/AddMovie';

function App() {
  const [favourites, setFavouries] = useState([]);
  return (
   <div className='container'>
      <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element={<MoviePage setFavouries={setFavouries} favourites={favourites} />} />
            <Route path="/favourites" element={<Favourites favourites={favourites} />} />
            <Route path="/detail/:movieId" element={<MovieDetailPage />} />
            <Route path="/add-movie" element={<AddMovie />} />
        </Routes>        
      </BrowserRouter>
   </div>
  );
}

export default App;
