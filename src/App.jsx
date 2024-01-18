import { useState } from 'react'
import RightSideBar from './Components/RightSideBar'
import Feed from './Components/Feed'
import SideBar from './Components/SideBar'
import './App.css'
import { Box, Button, Stack } from '@mui/material'

function App() {

  return (

      <Box>
      <Stack direction="row" justifyContent="space-between" spacing={2}>
      <SideBar />
      <Feed />
      <RightSideBar />
      </Stack>
      </Box>
  
  )
}

export default App
