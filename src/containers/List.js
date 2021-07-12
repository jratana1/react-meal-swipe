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



const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: 'calc(100% - 56px - 44px)',
    maxWidth: 400,
    backgroundColor: theme.palette.background.paper,
  },
  list: {
    height: 'calc(100% - 56px - 44px)',
   
  }
}));

export default function List(props) {
  const classes = useStyles();
  const places= props.places
  

  function renderRow(props) {
    const { index, style } = props;

    const handleFavorite = (e, index) => {
        e.preventDefault()
        console.log(e.currentTarget)
        console.log(index)
    }

    const handleRemove = (e, index) => {
        e.preventDefault()
        console.log('item:' + index)

    }

    return (
      <ListItem button divider component={Link} 
            to={{ 
                pathname: `/restaurants/${places[index].yelp_id}`, 
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