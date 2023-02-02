import Searcher from './components/Searcher';
import PokemonList from './components/PokemonList';
import { Grid } from '@mui/material';
import Logo from './static/Pokedux.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { getPokemons } from './api';

function App() {
  const [pokemons, setPokemons] = useState([]);
  
  useEffect(() =>{
    const fetchPokemons = async () => { 
      const pokemonsRes = await getPokemons();
      setPokemons(pokemonsRes);
    };
    
    fetchPokemons();
  }, []);
  
  return (
    <Grid 
      container
      className="App"
      sx={{
        marginTop: '40px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <img className="PokeLogo" src={Logo} alt='Pokedux'/>
      <Searcher />
      <PokemonList pokemons={pokemons}/>
    </Grid>
  );
}

export default App;
