import { 
  Stack,
  Card,
  useTheme,
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
  
  const theme = useTheme();
  const defaultB = theme.palette.background.default;
  const mode = theme.palette.mode;
  let boxShadowColor;
  
  if (mode === 'light') {
    boxShadowColor = '#BFBFBF';
  } else {
    boxShadowColor = '#3F3F3F';
  }
  
  return(
    <Card sx={{ backgroundColor: defaultB, m: 5, boxShadow: `0px 0px 10px ${boxShadowColor}` }}>
      <CardActionArea>
        <CardMedia
          component="img"
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
