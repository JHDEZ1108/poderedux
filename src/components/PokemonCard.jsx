import { 
  Stack,
  Card, 
  CardMedia, 
  Typography, 
  CardContent,
  CardActionArea 
} from "@mui/material"
import StarButton from "./StarButton"
import { useDispatch } from "react-redux";
import { setFavorite } from "../slices/dataSlice";

export function PokemonCard({ name, image, types, id, favorite }) {
  const dispatch = useDispatch();
  const typesString = types.map(elem => elem.type.name).join(', ')
  
  const handleOnFavorite = () => {
    dispatch(setFavorite({ pokemonId: id }))
  }
  
  return(
    <Card sx={{ maxWidth: 400, mt: 5}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={image}
          alt={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name.charAt(0).toUpperCase() + name.slice(1)}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <b>Type: </b> {typesString.toUpperCase()}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Stack sx={{ display: 'flex', alignItems: 'center' }}>
        <StarButton isFavorite={favorite} onClick={handleOnFavorite}/>
      </Stack>
    </Card>
  )
}
