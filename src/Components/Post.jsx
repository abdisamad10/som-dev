
import { Favorite, FavoriteBorder, MoreVert, Share } from '@mui/icons-material'
import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'
import React from 'react'

function Post() {
  return (
   <Box>
     <Card sx={{margin: 2}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="10%"
        image="https://images.pexels.com/photos/7195133/pexels-photo-7195133.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <Checkbox  icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color: "red"}} />} />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    
    </Card>

    <Card sx={{margin: 5}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "blue" }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Abdisamad moha"
        subheader="january 19, 2023"
      />
      <CardMedia
        component="img"
        height="10%"
        image="https://images.pexels.com/photos/767197/pexels-photo-767197.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <Checkbox  icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color: "red"}} />} />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    
    </Card>
    <Card sx={{margin: 5}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "blue" }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Abdulahi yahye"
        subheader="june 19, 2022"
      />
      <CardMedia
        component="img"
        height="10%"
        image="https://images.pexels.com/photos/3799821/pexels-photo-3799821.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <Checkbox  icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color: "red"}} />} />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    
    </Card>

    <Card sx={{margin: 5}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "blue" }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Abdirashid dahir"
        subheader="july 19, 2023"
      />
      <CardMedia
        component="img"
        height="10%"
        image="https://images.pexels.com/photos/321552/pexels-photo-321552.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <Checkbox  icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color: "red"}} />} />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    
    </Card>

    <Card sx={{margin: 5}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "blue" }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Bashir xasan"
        subheader="November 24, 2023"
      />
      <CardMedia
        component="img"
        height="10%"
        image="https://images.pexels.com/photos/13882426/pexels-photo-13882426.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <Checkbox  icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color: "red"}} />} />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    
    </Card>
   </Box>
  )
}

export default Post