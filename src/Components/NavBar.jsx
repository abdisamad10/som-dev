import { AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import PetsIcon from '@mui/icons-material/Pets';

const StyleToolBar = styled(Toolbar)({
    display : "flex",
    justifyContent : "space-between"
 })

function NavBar() {

  return (
   <AppBar position='sticky'>
    <StyleToolBar>
      <Typography variant='h6' sx={{display: { xs: "none", sm: "block"}}}>SOM DEV</Typography>
      <PetsIcon sx={{display: { xs: "block", sm: "none"}}}/>
    </StyleToolBar>
   </AppBar>
  )
}

export default NavBar