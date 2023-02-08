import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Grid } from '@mui/material';
import { useEffect } from 'react';

import Searcher from '../components/Searcher';
import Navbar from '../components/Navbar';
import PokemonList from '../components/PokemonList';
import CircularProgress from '@mui/material/CircularProgress';
import { fetchPokemonsWithDetails } from '../slices/dataSlice';
import Logo from '../static/Pokedux.svg';

export const Home = () => {
  const pokemons = useSelector((state) => state.data.pokemonsFiltered, shallowEqual);

  const loading = useSelector((state) => state.ui.loading);

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchPokemonsWithDetails());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Grid
      container
      className="App"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
    <Navbar />
    <img className="PokeLogo" src={Logo} alt='Pokedux'/>
    <Searcher />
    {loading ? 
      (<Grid 
        item
        sx={{
          marginTop: '100px',
        }}
      >
        <CircularProgress />
      </Grid>) : (
      <PokemonList pokemons={pokemons}/>
    )}
  </Grid>
  );
}