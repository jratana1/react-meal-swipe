import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { FixedSizeList } from 'react-window';
import AutoSizer from "react-virtualized-auto-sizer";
import { Link } from 'react-router-dom';
import ClearIcon from '@material-ui/icons/Clear';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Grid from '@material-ui/core/Grid';
import { BASE_URL } from '../App'



const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: 'calc(100% - 56px - 44px)',
    maxWidth: 400,
    backgroundColor: theme.palette.background.paper,
  },
  list: {
    height: 'calc(100% - 56px - 44px)',
  },
  section: {
    height: 'calc(100% - 56px - 44px)',
  },
}));

export default function List(props) {
  const classes = useStyles();
  const places= props.places
  const setPlaces = props.setPlaces
  

  function renderRow(props) {
    const { index, style } = props;

    const handleFavorite = (e, index) => {
        e.preventDefault()
        console.log(e.currentTarget)
        console.log(index)
    }

    const handleRemove = (e, index) => {
        e.preventDefault()
        let id = places[index].yelp_id       
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

    }

    return (
      <ListItem button divider component={Link} 
            to={{ 
                pathname: `/restaurants/${places[index].yelp_id}`, 
                state: { restaurant: places[index] }
                }} 
            style={style} key={index} >
        <ListItemText primary={`${places[index].name}`} />
        <div>
        <ListItemSecondaryAction >
                    <IconButton  edge="end" aria-label="favorite" onClick={(e) => handleFavorite(e, index)}>
                      <FavoriteIcon />
                    </IconButton>
                    <IconButton  edge="end" aria-label="delete" onClick={(e) => handleRemove(e, index)}>
                      <ClearIcon />
                    </IconButton>
        </ListItemSecondaryAction>
        </div>
      </ListItem>
      
    );
  }
  
  renderRow.propTypes = {
    index: PropTypes.number.isRequired,
    style: PropTypes.object.isRequired,
  };

  if (places === undefined || places.length == 0){
    return(
        <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        className={classes.section}
        >
                <h2>You have no places.</h2>
                <h2>
                    <Link 
                    to={{ 
                    pathname: `/swipe`
                    }} >
                        SWIPE!
                    </Link>
                </h2>
        </Grid>
    
    )
  }
  else {
    return (
        <div className={classes.root}>
            <AutoSizer>
                {({ height, width }) => (
                    <FixedSizeList className={classes.list} height={height} width={width} itemSize={46} itemCount={places.length} overscanCount={10}>
                        {renderRow}
                    </FixedSizeList>
                )}
            </AutoSizer>
        </div>
    );
  }
}