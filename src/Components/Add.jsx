import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, TextField, Tooltip, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

import React, { useState } from 'react'
import { Calculate, DateRange, EmojiEmotions, InsertPhoto, PersonAdd, VideoCameraBack } from '@mui/icons-material';
import styled from '@emotion/styled';

const StyledModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
})
const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px"
})

 function Add() {

    const [open, setOpen] = useState(false)
  return (
    <>
    <Tooltip title="Add"
     sx={{ position: "fixed",  bottom: 20}}>
    <Fab color="primary" aria-label="add"  
    onClick={e=> setOpen(true)}
    >
     <AddIcon />
    </Fab>
    </Tooltip>
<StyledModal
  open={open}
  onClose={e => setOpen(false)}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box width={400} height={280} bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={3}>
    <Typography variant='h6' color="gray" textAlign="center">
    Create Post
    </Typography>
    <UserBox>
    <Avatar
            src="https://mui.com/static/images/avatar/1.jpg" 
            alt="Remy Sharp" 

            />
            <Typography fontWeight="500">Abdisamad</Typography>
    </UserBox>
    <TextField
         sx={{
          width:"100%"
         }}
          id="standard-multiline-static"
        
          multiline
          rows={2}
          placeholder="What's on your mind?"
          variant="standard"
        />
        <Stack direction="row" mt={2} mb={3} spacing={1}>
            <EmojiEmotions color='primary'/>
            <InsertPhoto  color='secondary'/>
            <VideoCameraBack  color='success'/>
            <PersonAdd color='error' />
        </Stack>

        <ButtonGroup
         fullWidth
         variant="contained" 
         aria-label="outlined primary button group">
          <Button>Post</Button>
          <Button sx={{width: "100px"}}><DateRange /></Button>
        </ButtonGroup>
  </Box>
</StyledModal>
    </>
  )
}

export default Add;