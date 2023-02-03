import { Grid } from "@mui/material";
import PokemonCard from "../PokemonCard";

const PokemonList = ({ pokemons }) => {
  return(
    <Grid
      container
      justifyContent="center"
      spacing={{ xs: 2, md: 3 }} 
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
        {pokemons.map((pokemon) => {
          return (
            <Grid 
              item xs={12} sm={4} md={3}
              display="flex"
              justifyContent="center"
              alignItems="center"
              key={pokemon.name}
            >
              <PokemonCard 
                name={pokemon.name} 
                image={pokemon.sprites.front_default} 
                key={pokemon.name}
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