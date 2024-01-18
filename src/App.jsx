
import RightSideBar from './Components/RightSideBar'
import Feed from './Components/Feed'
import SideBar from './Components/SideBar'
import './App.css'
import { Box, Stack } from '@mui/material'
import NavBar from './Components/NavBar'

function App() {

  return (

      <Box>
      <NavBar />
      <Stack direction="row" justifyContent="space-between" spacing={2}>
      <SideBar />
      <Feed />
      <RightSideBar />
      </Stack>
      </Box>
  
  )
}

export default App
