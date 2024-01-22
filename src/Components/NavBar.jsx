import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import React, { useRef, useState } from 'react'
import { styled } from '@mui/material/styles';
import PetsIcon from '@mui/icons-material/Pets';
import { Mail,  Notifications } from '@mui/icons-material';

const StyleToolBar = styled(Toolbar)({
    display : "flex",
    justifyContent : "space-between"
 });

 const Search = styled("div")(({theme}) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: "5px",
    width: "40%"
}));

const Icons = styled(Box)(({theme}) =>({
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up('sm')]: {
    display: "flex"
  },
}));

const UserBox = styled(Box)(({theme}) =>({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up('sm')]: {
    display: "none"
  },
 
}));

function NavBar() {

  const [open, setOpen] = useState(false);
  
  return (
   <AppBar position='sticky'>
    <StyleToolBar>
      <Typography 
      variant='h6' 
      sx={{display: { xs: "none", sm: "block"}}}>
       SOM DEV
      </Typography>
      <PetsIcon 
      sx={{display: { xs: "block", sm: "none"}}}/>
      <Search>
      <InputBase 
      placeholder='searching...'/>
      </Search>
      <Icons>
      <Badge badgeContent={4} color="error">
        <Mail />
      </Badge>
      <Badge badgeContent={4} color="error">
        <Notifications />
      </Badge>
      <Avatar sx={{width: 30, height: 30}} 
      alt="Remy Sharp" 
      src="/static/images/avatar/1.jpg"
      onClick={e=> setOpen(true)}
      /> 
      </Icons>
      <UserBox variant="span" onClick={e=> setOpen(true)}>
      <Avatar sx={{width: 30, height: 30}} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
       Abdisamad
      </UserBox>
    </StyleToolBar>

    <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e)=> setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>

   </AppBar>
  )
}

export default NavBar