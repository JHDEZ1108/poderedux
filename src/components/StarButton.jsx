import { IconButton } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
const StarButton = ({ isFavorite, onClick }) => {

  return (
    <IconButton onClick={onClick}>
      {isFavorite ? (
        <FavoriteIcon />
        ) : (
        <FavoriteBorderIcon/>
      )}
    </IconButton>
  )
}

export default StarButton;


