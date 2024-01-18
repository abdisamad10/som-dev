import { Box } from '@mui/material'
import React from 'react'

const RightSideBar = () => {
  return (
    <Box 
        bgcolor="lightblue"
        flex={2}
        p={2}
        sx={{display: {xs: "none", sm: "block"}}}
    >
        RightBar
    </Box>
  )
}

export default RightSideBar