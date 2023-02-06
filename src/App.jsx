import Searcher from './components/Searcher';
import PokemonList from './components/PokemonList';
import { Grid } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import Logo from './static/Pokedux.svg';
import './App.css';
import { getPokemon } from './api';
import { getPokemonsWithDetails } from './actions';
import { setLoading } from './actions';

import { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
// import { connect } from 'react-redux';

function App() {
  // const [pokemons, setPokemons] = useState([]);
  //console.log(pokemons);
  const pokemons = useSelector((state) =>
    state.getIn(['data', 'pokemons'], shallowEqual)).toJS();

  const loading = useSelector((state) => 
    state.getIn(['ui', 'loading']));
    
  const dispatch = useDispatch();
  
  useEffect(() =>{
    const fetchPokemons = async () => { 
      dispatch(setLoading(true));
      const pokemonsRes = await getPokemon();
      // const pokemonsDetailed = await Promise.all(
      //   pokemonsRes.map(pokemon => getPokemonDetails(pokemon))
      // );
      dispatch(getPokemonsWithDetails(pokemonsRes));
      dispatch(setLoading(false));
    };
    
    fetchPokemons();
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
//Funcion que recibe nuestro estado y retorna un objeto que son enviadas a los props del componente que se esta conectando a Redux 
// const mapStateToProps = (state) => ({
//   pokemons: state.pokemons,
// });

//Función que recibe el Dispatcher de redux 
// const mapDispatchToProps = (dispatch) => ({
//   setPokemons: (value) => dispatch(setPokemonsActions(value))
// });

// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;
