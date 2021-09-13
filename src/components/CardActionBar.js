import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import ClearIcon from '@material-ui/icons/Clear';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import React, { useState, useEffect } from 'react';


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
    const [liked, setLiked] = useState(false)
    const {expanded, setExpanded, swipe, page } = props

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

    if (page==="Swipe") {
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
    else {
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
}

export default CardActionBar