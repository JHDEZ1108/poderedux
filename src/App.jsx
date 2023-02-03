import Searcher from './components/Searcher';
import PokemonList from './components/PokemonList';
import { Grid } from '@mui/material';
import Logo from './static/Pokedux.svg';
import './App.css';
import { getPokemons } from './api';
import { setPokemons as setPokemonsActions } from './actions';

import { useEffect, useState } from 'react';
import { connect } from 'react-redux';

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
//Funcion que recibe nuestro estado y retorna un objeto que son enviadas a los props del componente que se esta conectando a Redux 
const mapStateToProps = (state) => ({
  pokemons: state.pokemons,
});

//Función que recibe el Dispatcher de redux 
const mapDispatchToProps = (dispatch) => ({
  setPokemons: (value) => dispatch(setPokemonsActions(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
