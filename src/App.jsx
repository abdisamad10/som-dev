
import RightSideBar from './Components/RightSideBar'
import Feed from './Components/Feed'
import SideBar from './Components/SideBar'
import './App.css'
import { Box, Stack } from '@mui/material'
import NavBar from './Components/NavBar'
import Add from './Components/Add'

function App() {

  return (

      <Box>
      <NavBar />
      <Stack direction="row" justifyContent="space-between" spacing={2}>
      <SideBar />
      <Feed />
      <RightSideBar />
      </Stack>
      <Add />
      </Box>
  
  )
}

export default App
