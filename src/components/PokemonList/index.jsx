import { Grid } from "@mui/material";
import PokemonCard from "../PokemonCard";

const PokemonList = ({ pokemons }) => {
  return(
    <Grid container>
        {pokemons.map((pokemon) => {
          return (
            <Grid 
              item xs={12} sm={4} md={3} lg={2}
              display="flex"
              justifyContent="center"
              alignItems="center"
              key={pokemon.name}
            >
              <PokemonCard 
                name={pokemon.name} 
                key={pokemon.name}
                image={pokemon.sprites.front_default} 
                types={pokemon.types}
                id={pokemon.id}
                favorite={pokemon.favorite}
              />
            </Grid>
          )
        })}
    </Grid>
  )
}

PokemonList.defaultProps = {
  pokemons: Array(10).fill('')
}

export default PokemonList;