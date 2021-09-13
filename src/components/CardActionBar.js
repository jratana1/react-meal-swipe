import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import ClearIcon from '@material-ui/icons/Clear';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import {
    useParams,
    Link,
  } from "react-router-dom";
import { BASE_URL } from '../App'



const useStyles = makeStyles((theme) => ({
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
  }));

function CardActionBar(props) {
    const classes = useStyles();
    const {expanded, setExpanded, swipe, page, places, liked, setLiked, setPlaces } = props
    const { id } = useParams();
    let placeIndex
    if (places) {
    placeIndex = places.findIndex(place => place.yelp_id === id)
    }


    function mod(n, m) {
        return ((n % m) + m) % m;
      }

    const handleExpandClick = () => {
            setExpanded(!expanded);
      };

    const handleExpandTouch = () => {
        if (page !== "Places") {
            setExpanded(!expanded);
        }
    };
    
    const handleClick = (event) => {
        if (event.currentTarget.name === 'left') {
          swipe('left')
        }
        else {
          swipe('right')
        }
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
          setPlaces(res)
        })
      };

    if (page==="Places") {
        return (
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
        )
    }
    else {
        return (
            <CardActions disableSpacing>
                { !expanded ? 
                <>
                <IconButton className={classes.customButton} aria-label="share"
                name={"left"}
                onTouchStart={handleClick}
                onClick={handleClick}

                >
                    <ClearIcon />
                </IconButton>
                <IconButton className={classes.customButton} aria-label="share" 
                name={"right"}
                onTouchStart={handleClick}
                onClick={handleClick}
                >
                    <RestaurantIcon />
                </IconButton>
                </>
                : null }

                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onTouchStart={handleExpandTouch}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                    >
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>
        )
    }
}

export default CardActionBar