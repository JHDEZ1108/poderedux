import { Stack, TextField, IconButton, useTheme } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch } from 'react-redux';
import { setFilter } from '../slices/dataSlice';

const Searcher = () => {
  const dispatch = useDispatch();
  
  const handleOnChange = (e) => {
    dispatch(setFilter(e.toLowerCase()));
  }
  
  const theme = useTheme();
  const primaryMain = theme.palette.primary.main;
  
  return(
    <Stack 
      direction='row' 
      sx={{
        marginTop: '60px',
        width: '80%'
      }}
    >
      <TextField 
        label="Search" 
        variant="outlined" 
        placeholder="Search pokemon..."
        size="small"
        onChange={(e) => handleOnChange(e.target.value)}
        sx={{
          width: '100%',
          "& .MuiFormLabel-root.Mui-focused": {
            color: primaryMain
          },
          borderRadius: 1,
          "&:hover": {
            "& .MuiFormLabel-root.Mui-focused": {
              color: primaryMain
            },
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: primaryMain
            }
          },
          "&.Mui-focused:hover": {
            "& .MuiFormLabel-root": {
              color: primaryMain
            },
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: primaryMain
            }
          }
        }}
      />
      <IconButton
        size="small"
        sx={{
          left: '-50px',
        }}
        onClick={(e) => handleOnChange(e.target.value)}
      >
        <SearchIcon />
      </IconButton>
    </Stack>
  )
}

export default Searcher;
