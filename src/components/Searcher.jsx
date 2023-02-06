import { Stack, TextField, IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch } from 'react-redux';
import { setFilter } from '../slices/dataSlice';

const Searcher = () => {
  const dispatch = useDispatch();
  
  const handleOnChange = (e) => {
    dispatch(setFilter(e.target.value));
  }
  
  return(
    <Stack 
      direction = 'row' 
      sx={{
        marginTop: '60px',
        width: '80%'
      }}
    >
      <TextField 
        label="Search" variant="outlined" 
        placeholder="Search pokemon..."
        size="small"
        onChange={handleOnChange}
        // inputProps={{ style: { color: '#E7EBF0' } }}
        sx={{
          width: '100%',
          //backgroundColor: '#132F4C',
          "& .MuiFormLabel-root": {
            //color: '#E7EBF0'
          },
          "& .MuiFormLabel-root.Mui-focused": {
              //color: '#E7EBF0'
          },
          border: '1px solid #E7EBF0', 
          borderRadius: 1
        }}
      />
      <IconButton
        size="small"
        sx={{
          left: '-50px',
          //color:'#E7EBF0'
        }}
        onClick={handleOnChange}
      >
        <SearchIcon />
      </IconButton>
    </Stack>
  )
}

export default Searcher;
