import { Box } from '@mui/material'
import React from 'react'
import Post from './Post'
function Feed(props) {
  return (
    <Box
    p={2}
    flex={4}
    // sx={{display: {xs: "none", sm: "block"}}}
    >
    <Post 
      title={props.title}
      subheader={props.subheader}
      image={props.image}
    />
    </Box>
  )
}

export default Feed