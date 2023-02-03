import { 
  Card, 
  CardMedia, 
  Typography, 
  CardContent,
  CardActionArea 
} from "@mui/material"
import StarOutlineIcon from '@mui/icons-material/StarOutline';

const PokemonCard = ({ name, image, abilities }) => {
  return(
    <Card sx={{ maxWidth: 345, mt: 5}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={image}
          alt={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
          <StarOutlineIcon />
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
export default PokemonCard;