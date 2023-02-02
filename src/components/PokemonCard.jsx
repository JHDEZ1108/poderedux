import { 
  Card, 
  CardMedia, 
  Typography, 
  CardContent,
  CardActionArea 
} from "@mui/material"

const PokemonCard = () => {
  return(
    <Card sx={{ maxWidth: 345, mt: 5}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
          alt="Ditto"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Ditto
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
export default PokemonCard;