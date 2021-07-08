import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { FixedSizeList } from 'react-window';
import AutoSizer from "react-virtualized-auto-sizer";
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: 'calc(100% - 56px - 44px)',
    maxWidth: 600,
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
  
    return (
      <ListItem button divider component={Link} 
            to={{ 
                pathname: `/restaurants/${places[index].id}`, 
                state: { restaurant: places[index] } }} 
            style={style} key={index} >
        <ListItemText primary={`${places[index].name}`} />
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