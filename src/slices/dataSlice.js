import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getPokemon, getPokemonDetails } from '../api';
import { setLoading } from './uiSlice';

const initialState = {
  pokemons: [],
  pokemonsFiltered: [],
};

export const fetchPokemonsWithDetails = createAsyncThunk(
  'data/fetchPokemonsWithDetails',
  async (_, { dispatch }) => {
    dispatch(setLoading(true));
    const pokemonsRes = await getPokemon();
    const pokemonsDetailed = await Promise.all(
      pokemonsRes.map((pokemon) => getPokemonDetails(pokemon))
    );
    dispatch(setPokemons(pokemonsDetailed));
    dispatch(setLoading(false));
  }
);
export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setPokemons: (state, action) => {
      state.pokemons = action.payload;
      state.pokemonsFiltered = action.payload;
    },
    setFilter: (state, action) => {
      state.pokemonsFiltered = state.pokemons.filter(pokemon => {
        return (pokemon.name.includes(action.payload) && (action.payload !== 'favorites' || pokemon.favorite))
      });
    },
    setFavorite: (state, action) => {
      // encontramos el índice del pokemon en "pokemons"
      const pokemonIndex = state.pokemons.findIndex(pokemon => pokemon.id === action.payload.pokemonId);
      // en caso de encontrar el índice, verificamos si existe en "pokemonsFiltered"
      if (pokemonIndex >= 0) {
        const filteredIndex = state.pokemonsFiltered.findIndex(pokemon => pokemon.id === action.payload.pokemonId);
        if (filteredIndex >= 0) {
          // guardamos el valor de "favorite" del pokemon encontrado
          const isFavorite = state.pokemons[pokemonIndex].favorite;
          // modificamos el valor de "favorite" en "pokemons" y "pokemonsFiltered"
          state.pokemons[pokemonIndex].favorite = !isFavorite;
          state.pokemonsFiltered[filteredIndex].favorite = !isFavorite;
        }
      }
    }
  },
});

export const { setFavorite, setPokemons, setFilter } = dataSlice.actions;
export default dataSlice.reducer;