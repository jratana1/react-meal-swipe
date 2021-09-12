import React, { useState, useEffect } from 'react';
import {
  useParams,
  Link,
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
import { BASE_URL } from '../App'

import Caption from '../components/Caption'


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
    bottom: '56px',
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


function Show(props) {
    const { id } = useParams();
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);
    const [restaurant, setRestaurant]= useState(null);
    // const [placeIndex, setPlaceIndex] = useState(0)
    const likes = props.likes
    const places = props.places
    let placeIndex = places.findIndex(place => place.yelp_id === id)
    const [liked, setLiked] = useState(false)


    function mod(n, m) {
      return ((n % m) + m) % m;
    }
  
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    const handleFavorite = () => {
      if (liked){
        let config = {
          method: 'DELETE',
          headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'Authorization': `Bearer ${sessionStorage.jwt}`
          },
          body: JSON.stringify({yelp_id: id})
      }

        fetch(BASE_URL+"likes/"+id, config)
        .then(res => res.json())
        .then(res => {
        props.setLikes(res)
        setLiked(!liked)
        })
      }
      else{
        let config = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${sessionStorage.jwt}`
            },
            body: JSON.stringify({yelp_id: id})
        }

        fetch(BASE_URL+"likes/", config)
        .then(res => res.json())
        .then(res => {
        props.setLikes(res)
        setLiked(!liked)
        })
      }
      };

    const handleRemove = () => {
      let config = {
          method: 'DELETE',
          headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'Authorization': `Bearer ${sessionStorage.jwt}`
          },
      }

      fetch(BASE_URL+"restaurants/"+id, config)
      .then(res => res.json())
      .then(res => {
        props.setPlaces(res)
      })
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
            setLiked(likes.some(like => like.restaurant_id === places[placeIndex].id))
    }, [id, placeIndex, places, likes])
    
    if (restaurant) {
        return (
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
                        <IconButton className={liked ? classes.customButtonLiked : classes.customButton} aria-label="add to favorites" onClick={handleFavorite}>
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton className={classes.customButton} aria-label="share" onClick={handleRemove}
                          component={Link} 
                          to={{ 
                          pathname: places.length === 1 ? '/list' : `/restaurants/${places[mod((placeIndex +1),places.length)].yelp_id}`
                          }} 
                        >
                            <ClearIcon />
                        </IconButton>
                        <IconButton className={classes.customButton} aria-label="share" 
                            component={Link} 
                            to={{ 
                            pathname: `/restaurants/${places[mod((placeIndex -1),places.length)].yelp_id}`, 
                            }} 
                            >
                            <ArrowBackIcon />
                        </IconButton>
                        <IconButton className={classes.customButton} aria-label="share" 
                        component={Link} 
                        to={{ 
                            pathname: `/restaurants/${places[mod((placeIndex +1),places.length)].yelp_id}`, 
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