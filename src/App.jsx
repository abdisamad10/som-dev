
import RightSideBar from './Components/RightSideBar'
import Feed from './Components/Feed'
import SideBar from './Components/SideBar'
import './App.css'
import { Box, Stack, ThemeProvider, createTheme } from '@mui/material'
import NavBar from './Components/NavBar'
import Add from './Components/Add'
import { useState } from 'react'

function App() {

  const [mode, setMode] = useState("light")

  const darkTHeme = createTheme({
    palette : {
      mode: mode,
    },
  })

  return (
    <ThemeProvider theme={darkTHeme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
      <NavBar />
      <Stack direction="row" justifyContent="space-between" spacing={2}>
      <SideBar setMode={setMode} mode={mode} />
      <Feed />
      <RightSideBar />
      </Stack>
      <Add />
      </Box>
    </ThemeProvider>
  )
}

export default App
