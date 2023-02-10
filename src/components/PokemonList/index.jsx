import { Grid, Stack } from "@mui/material";
import { PokemonCard } from "../PokemonCard";

export function PokemonList({ pokemons, page, byPage }){
  return(
    <Grid container>
            {pokemons.slice(
              (page - 1) * byPage,
              (page - 1) * byPage + byPage
            ).map((pokemon) => {
          return (
            <Grid 
              item xs={6} md={4} lg={3}
              display="flex"
              justifyContent="center"
              alignItems="center"
              key={pokemon.name}
            >
              <Stack>
                <PokemonCard 
                  name={pokemon.name} 
                  key={pokemon.name}
                  image={pokemon.sprites.front_default} 
                  types={pokemon.types}
                  id={pokemon.id}
                  favorite={pokemon.favorite}
                />
              </Stack>
            </Grid>
          )
        })}
    </Grid>
  )
}

PokemonList.defaultProps = {
  pokemons: Array(10).fill('')
}
