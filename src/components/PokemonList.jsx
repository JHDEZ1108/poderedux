import { Box } from "@mui/material";
import PokemonCard from "./PokemonCard";

const PokemonList = ({ pokemons }) => {
  return(
    <Box className='PokemonList'>
      {pokemons.map((pokemon) => {
        return <PokemonCard />
      })}
    </Box>
  )
}

PokemonList.defaultProps = {
  pokemons: Array(10).fill('')
}

export default PokemonList;