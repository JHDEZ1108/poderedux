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
              item xs={12} md={6} lg={4} xl={3}
              display="flex"
              justifyContent="center"
              alignItems="center"
              key={pokemon.name}
              sx={{margin: '0 auto'}}
            >
              <Stack>
                <PokemonCard 
                  name={pokemon.name} 
                  key={pokemon.name}
                  image={            
                    pokemon.sprites.other['official-artwork'].front_default ||
                    pokemon.sprites.other.home.front_default ||
                    pokemon.sprites.front_shiny ||
                    pokemon.sprites.front_default} 
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
