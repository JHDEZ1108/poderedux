import { useDispatch } from 'react-redux';
import {DarkMode, LightMode} from '@mui/icons-material';
import { Box, useTheme, IconButton } from "@mui/material";

import FlexBetween from '../FlexBetween';
import { setMode } from '../../slices/uiSlice';
import { ReactComponent as Logo} from "../../static/Logo_Final.svg"

const Navbar = () => {
  
  const theme = useTheme();

  const defaultB = theme.palette.background.default;
  const primaryMain = theme.palette.primary.main;
  const mode = theme.palette.mode;
  let boxShadowColor;
  
  if (mode === 'light') {
    boxShadowColor = '#BFBFBF';
  } else {
    boxShadowColor = '#3F3F3F';
  }
  
  const dispatch = useDispatch();
  
  return(
    <Box 
      sx={{
        boxShadow: `0px 0px 10px ${boxShadowColor}`,
        backgroundColor: defaultB, 
        width:"100%", 
        mb:"3rem"
      }}>
      <FlexBetween className="navbar" padding="1rem 6%">
        <FlexBetween gap="1.75rem">
          <Logo width={30} fill={primaryMain} cursor="pointer" />
        </FlexBetween>
        <IconButton
        sx={{ fontSize: "25px" }}
        onClick={() => dispatch(setMode())}
      >
        {theme.palette.mode === "dark" ? (
          <DarkMode sx={{ color: primaryMain, fontSize: "25px" }} />
          ) : (
          <LightMode sx={{ color: primaryMain, fontSize: "25px" }} />
        )}
      </IconButton>
      </FlexBetween>
    </Box>
  )
}
export default Navbar;