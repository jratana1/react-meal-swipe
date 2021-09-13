import React, { useState } from 'react'

import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ClearIcon from '@material-ui/icons/Clear';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

import Caption from './Caption'

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 400,
      // height: 'calc(100% - 56px - 44px - 4px)',
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
    expand: {
      transform: 'rotate(0deg)',
      color: 'white',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
      backgroundColor: 'rgba(52, 52, 52, 0.4)',
      '&:hover': {
          backgroundColor: 'rgba(52, 52, 52, 0.4)'}
    },
    expandOpen: {
      transform: 'rotate(180deg)',
      backgroundColor: 'rgba(52, 52, 52, 0.4)',
      '&:hover': {
          backgroundColor: 'rgba(52, 52, 52, 0.4)'}
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
   customButton: {
       backgroundColor: 'rgba(52, 52, 52, 0.4)',
       marginTop: '5px',
       marginBottom: '5px',
       marginLeft: '10px',
       marginRight: '10px',
       color: 'white',
       '&:hover': {
          backgroundColor: 'rgba(52, 52, 52, 0.4)'}
   },
   customButtonLiked: {
      backgroundColor: 'rgba(255, 52, 52, 1)',
      marginTop: '5px',
      marginBottom: '5px',
      marginLeft: '10px',
      marginRight: '10px',
      color: 'white',
      '&:hover': {
        backgroundColor: 'rgba(255, 52, 52, 1)',
      }
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
  const {restaurant, swipe} = props


  const handleExpandClick = () => {
    setExpanded(!expanded);
    console.log("expanded")
  };

  const handleClick = () => {
    swipe('left')
  };

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
                    <CardActions disableSpacing>
                        { !expanded ? 
                        <>
                        <IconButton className={classes.customButton} aria-label="share"
                          onTouchStart={handleClick}
                        >
                            <ClearIcon />
                        </IconButton>
                        <IconButton className={classes.customButton} aria-label="share" 
                            >
                            <ArrowBackIcon />
                        </IconButton>
                        <IconButton className={classes.customButton} aria-label="share" 
                        >
                            <ArrowForwardIcon />
                        </IconButton>
                        </>
                        : null }
                        <IconButton
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded,
                        })}
                        onTouchStart={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                        >
                          <ExpandMoreIcon />
                        </IconButton>
                    </CardActions>
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