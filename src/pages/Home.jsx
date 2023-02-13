import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Stack } from '@mui/material'

import { useEffect, useState } from 'react'

import Searcher from '../components/Searcher';
import Navbar from '../components/Navbar';
import { Spinner } from '../components/Spinner/Spinner';

import { PokemonList } from '../components/PokemonList';
import { fetchPokemonsWithDetails } from '../slices/dataSlice';
import { PaginationComponent } from '../components/PaginationComponent';
import Logo from '../static/Pokedux.svg';

export const Home = () => {
  const [ page, setPage ] = useState(1);
  // eslint-disable-next-line no-unused-vars
  const [ byPage, setByPage ] = useState(24)
  const pokemons = useSelector((state) => state.data.pokemonsFiltered, shallowEqual);
  const loading = useSelector((state) => state.ui.isLoading, shallowEqual);

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchPokemonsWithDetails());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  const maxPages = Math.ceil(pokemons.length / byPage);
  
  return (
    <Stack>
      <Stack sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <Navbar />
      </Stack>
      <Stack sx={{
        margin: 'auto',
        padding: '1rem 0px'
      }}>
        <img className="PokeLogo" src={Logo} alt='Pokedux'/>
      </Stack>
      <Stack sx={{
        alignItems: 'center'
      }}>
        <Searcher/>
      </Stack>
      <Stack sx={{
        alignItems: 'center',
        width: '100%',
      }}>
        <PaginationComponent page={page} setPage={setPage} maxPages={maxPages}/>
      </Stack>
      <Stack sx={{ maxWidth: '1500px', margin: '0 auto'}}>
        {
        loading ? (
          <Stack sx={{ justifyContent: 'center', alignItems: 'center' }}>
              <Spinner />
          </Stack>
        ) : (
          <PokemonList pokemons={pokemons} page={page} byPage={byPage}/>
          )
        }
      </Stack>
      <Stack sx={{
        marginBottom: '3rem',
      }}>
        <PaginationComponent page={page} setPage={setPage} maxPages={maxPages}/>
      </Stack>
    </Stack>
  );
}