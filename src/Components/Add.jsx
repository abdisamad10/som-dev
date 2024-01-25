import { Box, Fab, Modal, Tooltip, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

import React, { useState } from 'react'
import { Calculate } from '@mui/icons-material';
import styled from '@emotion/styled';

const StyledModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
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
  <Box width={400} height={280} bgcolor="white" p={3} borderRadius={3}>
    <Typography variant='6' color="gray" textAlign="center">Crate Post</Typography>
  </Box>
</StyledModal>
    </>
  )
}

export default Add;