import { useDispatch } from 'react-redux';
import {DarkMode, LightMode} from '@mui/icons-material';
import { Box, useTheme, IconButton } from "@mui/material";

import FlexBetween from '../FlexBetween';
import { setMode } from '../../slices/uiSlice';
import { ReactComponent as Logo} from "../../static/Logo_Final.svg"

const Navbar = () => {
  const theme = useTheme();
  const alt = theme.palette.background.alt;
  
  const primaryLight = theme.palette.primary.light;
  const dispatch = useDispatch();
  
  return(
    <Box backgroundColor={alt} sx={{ boxShadow: 4, width:"100%"}}>
      <FlexBetween className="navbar" padding="1rem 6%">
        <FlexBetween gap="1.75rem">
          <Logo width={30} fill="alt" cursor="pointer" />
        </FlexBetween>
        <IconButton
        sx={{ fontSize: "25px" }}
        onClick={() => dispatch(setMode())}
      >
        {theme.palette.mode === "dark" ? (
          <DarkMode sx={{ color: "#FF5733", fontSize: "25px" }} />
          ) : (
          <LightMode sx={{ color: primaryLight, fontSize: "25px" }} />
        )}
      </IconButton>
      </FlexBetween>
    </Box>
  )
}
export default Navbar;