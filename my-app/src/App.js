import React from 'react';
import MovieList from './components/MovieList';
import Navbar from './components/Navbar';
import { MoviesProvider } from './contexts/MoviesContext';
import { UserProvider } from './contexts/UserContext';
import ItemCount from './carrito/ItemCount';
import './App.css';
import MercadoLibre from './components/MercadoLibre';
const onAdd = (qty) => {
  alert(`Agregaste ${qty} peliculas`);
};
function App() {
 
  return (
    <div>
      
      <UserProvider>
        <MoviesProvider>
          <Navbar />
          <MovieList />
        </MoviesProvider>
        <div>
      <ItemCount onAdd={onAdd} initial={1} stock={7} />
      </div>
      </UserProvider>
     <MercadoLibre/>
    </div>
   
    
   
  );
}

export default App;