import { useDispatch } from 'react-redux';
import {DarkMode, LightMode} from '@mui/icons-material';
import { Box, useTheme, IconButton } from "@mui/material";

import FlexBetween from '../FlexBetween';
import { setMode } from '../../slices/uiSlice';
import { ReactComponent as Logo} from "../../static/Logo_Final.svg"

const Navbar = () => {
  
  const theme = useTheme();
  const alt = theme.palette.background.alt;
  const primaryMain = theme.palette.primary.main;
  
  const dispatch = useDispatch();
  
  return(
    <Box backgroundColor={alt} sx={{ boxShadow: 4, width:"100%", mb:"3rem"}}>
      <FlexBetween className="navbar" padding="1rem 6%">
        <FlexBetween gap="1.75rem">
          <Logo width={30} fill={primaryMain} cursor="pointer" />
        </FlexBetween>
        <IconButton
        sx={{ fontSize: "25px" }}
        onClick={() => dispatch(setMode(), console.log(theme.palette.mode))}
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