import { Box } from "@mui/material";
import PokemonCard from "../PokemonCard";
import "./index.css"

const PokemonList = ({ pokemons }) => {
  return(
    <Box className='PokemonList'>
      {pokemons.map((pokemon) => {
        return <PokemonCard name={pokemon.name} key={pokemon.name}/>
      })}
    </Box>
  )
}

PokemonList.defaultProps = {
  pokemons: Array(10).fill('')
}

export default PokemonList;