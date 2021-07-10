import React, { useState, useEffect } from 'react';
import {
  useLocation,
  useParams
} from "react-router-dom";
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
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

const BASE_URL = "http://localhost:3000/";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    height: 'calc(100% - 56px - 44px)',
    overflow: 'scroll'
  },
  media: {
    height: 0,
    paddingTop: '68vh', // 16:9
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
    top: '80%',
    width: '100%',
    maxWidth: 400,
    color: 'black',
 },
 customButton: {
     backgroundColor: 'rgba(52, 52, 52, 0.4)',
     margin: '5px',
     color: 'white'
 },
 content:{
     marginBottom: '10px'
 },
stars: {
    position: 'static'
}
}));


function Show() {
    const { id } = useParams();
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const [restaurant, setRestaurant]= useState(null)
  
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };


    useEffect(()=> {
            let config = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${sessionStorage.jwt}`
                },
            }

            fetch(BASE_URL+"restaurants/"+id, config)
            .then(res => res.json())
            .then(res => {
            setRestaurant(res.data.business)
            console.log(res.data.business)
            })
    }, [id])

    if (restaurant) {
        return (
            <Card className={classes.root}>
              <CardMedia
                className={classes.media}
                image= {restaurant.photos[0]}
                title="restaurant name"
              />
            <CardHeader
                title={restaurant.name}
                className={classes.header}
              />
                <div className={classes.overlay}>
                    <CardActions disableSpacing>
                        { !expanded ? 
                        <>
                        <IconButton className={classes.customButton} aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton className={classes.customButton} aria-label="share">
                            <ShareIcon />
                        </IconButton>
                        </>
                        : null }
                        <IconButton
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                        >
                        <ExpandMoreIcon />
                        </IconButton>
                    </CardActions>
                </div>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent className={classes.content}>
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
                    {restaurant.reviews[1].text}
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          );
        }
          else {return null}
  }

  export default Show