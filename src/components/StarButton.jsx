import { IconButton, useTheme } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const StarButton = ({ isFavorite, onClick }) => {

  const theme = useTheme();
  const primaryMain = theme.palette.primary.main;
  
  return (
    <IconButton onClick={onClick}>
      {isFavorite ? (
        <FavoriteIcon style={{ fontSize: '25px', color: primaryMain }}/>
        ) : (
        <FavoriteBorderIcon style={{ fontSize: '25px', color: primaryMain }}/>
      )}
    </IconButton>
  )
}

export default StarButton;


