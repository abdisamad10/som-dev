import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'

const RightSideBar = () => {
  return (
    <Box 
        flex={2}
        p={2}
        sx={{display: {xs: "none", sm: "block"}}}
        
    >
     <Box position="fixed" width={300}>
     <Typography variant='h6' fontWeight={100}>
         Online Freinds
        </Typography>
        <AvatarGroup max={7}>
            <Avatar 
            alt="Remy Sharp" 
            src="https://mui.com/static/images/avatar/1.jpg" 

            />
            <Avatar 
            alt="Travis Howard" 
            src="https://mui.com/static/images/avatar/2.jpg" 

            />
            <Avatar 
            alt="Cindy Baker" 
            src="https://mui.com/static/images/avatar/3.jpg" 

            />
            <Avatar 
            alt="Agnes Walker" 
            src="https://mui.com/static/images/avatar/4.jpg" 
            />
            <Avatar 
            alt="Trevor Henderson" 
            src="https://mui.com/static/images/avatar/5.jpg" 

            />
            <Avatar 
            alt="Remy Sharp" 
            src="" 

            />
            <Avatar 
            alt="Travis Howard" 
            src="https://mui.com/static/images/avatar/2.jpg" 

            />
            <Avatar 
            alt="Cindy Baker" 
            src="https://mui.com/static/images/avatar/3.jpg" 

            />
            <Avatar 
            alt="Agnes Walker" 
            src="https://mui.com/static/images/avatar/4.jpg" 

            />
            <Avatar 
            alt="Trevor Henderson" 
            src="/static/images/avatar/5.jpg" 

            />
          </AvatarGroup>

          <Typography variant='h6' fontWeight={100} mt={2} mb={2}>
            Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
           <img 
          src='https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=600'
          alt=''
          />
          </ImageListItem>
            <ImageListItem>
           <img 
          src='https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=600'
          alt=''
          />
          </ImageListItem>
          <ImageListItem>
           <img 
          src='https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600'
          alt=''
          />
          </ImageListItem>
        </ImageList>
        <Typography variant='h6' fontWeight={100} mt={2} mb={2}>
            Latest Conversation
        </Typography>
        <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="https://mui.com/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset"  />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>

        </Box>
    </Box>
  )
}

export default RightSideBar