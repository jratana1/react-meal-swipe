import React, { useState, useEffect } from 'react';
import {
  useParams,
  Link
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
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ClearIcon from '@material-ui/icons/Clear';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

const BASE_URL = "http://localhost:3000/";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    height: 'calc(100% - 56px - 44px - 4px)',
    overflow: 'scroll',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  media: {
    height: 0,
    paddingTop: 'calc(100vh - 56px - 44px - 74px)', // 16:9
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
    bottom: '56px',
    width: '100%',
    maxWidth: 400,
    color: 'white',
 },
 caption: {
    borderRadius: '25px',
    fontWeight: 'bolder',
    width: '50%',
    maxWidth: 400,
    backgroundColor: 'rgba(52, 52, 52, 0.4)',
 },
 link: {
    color: 'white',
    fontWeight: 'bolder',
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
 content:{
     marginBottom: '10px'
 },
stars: {
    position: 'static'
}
}));


function Show(props) {
    const { id } = useParams();
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);
    const [restaurant, setRestaurant]= useState(null)
    const placeIndex = props.places.findIndex(place => place.yelp_id === id)
  
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    const handleFavorite = () => {
        console.log("favortied")
      };

    const handleRemove = () => {
        console.log("removed")
    };

    const handleArrowBack = () => {
        console.log("removed")
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
            })
    }, [id])

    if (restaurant) {
        console.log(restaurant.reviews)
        return (
            <Card className={classes.root}>
              <CardMedia
                className={classes.media}
                image= {restaurant.photos[0]}
                title="restaurant name"
              />
                <div className={classes.overlay}>
                    {!expanded ? 
                    <Box className={classes.caption} component="div" borderColor="transparent">
                        <Typography component="span" >
                        <CardHeader
                            title={restaurant.name}
                            className={classes.header}
                        />
                            <div>{restaurant.location.address1}</div>
                            <div>{restaurant.location.city}, {restaurant.location.state} {restaurant.location.postal_code}</div>
                            <a href={'tel:+'+ restaurant.phone} className={classes.link}>{restaurant.display_phone}</a>
                        </Typography>
                    </Box>
                    : null }
                    <CardActions disableSpacing>
                        { !expanded ? 
                        <>
                        <IconButton className={classes.customButton} aria-label="add to favorites" onClick={handleFavorite}>
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton className={classes.customButton} aria-label="share" onClick={handleRemove}>
                            <ClearIcon />
                        </IconButton>
                        <IconButton className={classes.customButton} aria-label="share" onClick={handleArrowBack}
                            component={Link} 
                            to={{ 
                            pathname: `/restaurants/${props.places[(placeIndex -1) % props.places.length].yelp_id}`, 
                            }} 
                            >
                            <ArrowBackIcon />
                        </IconButton>
                        <IconButton className={classes.customButton} aria-label="share" 
                        component={Link} 
                        to={{ 
                            pathname: `/restaurants/${props.places[(placeIndex +1) % props.places.length].yelp_id}`, 
                            }} 
                        >
                            <ArrowForwardIcon />
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
          );
        }
          else {return null}
  }

  export default Show