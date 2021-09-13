import React, { useState } from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Collapse from '@material-ui/core/Collapse';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

import Caption from './Caption'
import CardActionBar from './CardActionBar'

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 400,
      height: '100%',
      overflow: 'scroll',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    media: {
      height: 0,
      paddingTop: 'calc(100vh - 56px - 44px - 74px)', // 16:9
      borderRadius: '10px',
    },
    header:{
      padding: '5px'
      
    },
    overlay: {
      position: 'absolute',
      bottom: '0px',
      width: '100%',
      maxWidth: 400,
      color: 'white',
   },
   content:{
       marginBottom: '10px'
   },
  stars: {
      position: 'static'
  }
  }));

function PlaceCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false); 
  const {restaurant, swipe, page, places, setLikes, liked, setLiked, setPlaces} = props

return (
  <>
<Card className={classes.root}>
              <CardMedia
                className={classes.media}
                image= {restaurant.photos[0]}
                title="restaurant name"
              />
                <div className={classes.overlay}>
                    {!expanded ? 
                    <Caption restaurant={restaurant}></Caption>
                    : null }
                    <CardActionBar setPlaces={setPlaces} setLiked={setLiked} liked={liked} setLikes={setLikes} places={places} page={page} expanded={expanded} setExpanded={setExpanded} swipe={swipe}></CardActionBar>
                </div>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent className={classes.content}>
                    <CardHeader
                        title={restaurant.name}
                        className={classes.header}
                    />
                    <Box component="div" mb={3} borderColor="transparent">
                        <Typography component="span">
                            <div>{restaurant.location.address1}</div>
                            <div>{restaurant.location.city}, {restaurant.location.state} {restaurant.location.postal_code}</div>
                            <a href={'tel:+'+ restaurant.phone}>{restaurant.display_phone}</a>
                        </Typography>
                    </Box>
                    <Box component="div" mb={3} borderColor="transparent">
                        <Rating className={classes.stars} name="read-only" value={restaurant.rating} readOnly />
                    </Box>
                  <Typography paragraph>
                    {restaurant.reviews[0].text}
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
            </>
)
}

export default PlaceCard