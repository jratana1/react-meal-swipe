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
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ReactStars from 'react-stars'

const BASE_URL = "http://localhost:3000/";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,

  },
  media: {
    height: 0,
    paddingTop: '130%', // 16:9
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
    top: '75%',
    width: '100%',
    color: 'black',
 },
 customButton: {
     backgroundColor: 'rgba(52, 52, 52, 0.4)',
     margin: '5px',
     color: 'white'
 },
 content:{
     marginBottom: '56px'
 }
}));


function Show() {
    const { id } = useParams();
    let data = useLocation()
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
              <CardHeader
                title={restaurant.name}
                className={classes.header}
              />
              <CardMedia
                className={classes.media}
                image= {restaurant.photos[0]}
                title="restaurant name"
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
                  <Typography paragraph>{restaurant.rating} stars : </Typography>
                  <Typography paragraph>
                    {restaurant.reviews[0].text}
                  </Typography>
                  <Typography paragraph>
                    Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                    heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                    browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
                    and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
                    pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
                    saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          );
        }
          else {return null}
  }

  export default Show