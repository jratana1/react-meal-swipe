import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { FixedSizeList } from 'react-window';
import AutoSizer from "react-virtualized-auto-sizer";


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

function renderRow(props) {
  const { index, style } = props;

  return (
    <ListItem button style={style} key={index}>
      <ListItemText primary={`Item ${index + 1}`} />
    </ListItem>
  );
}

renderRow.propTypes = {
  index: PropTypes.number.isRequired,
  style: PropTypes.object.isRequired,
};

export default function List() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <AutoSizer>
            {({ height, width }) => (
                <FixedSizeList className={classes.list} height={height} width={width} itemSize={46} itemCount={200} overscanCount={10}>
                    {renderRow}
                </FixedSizeList>
            )}
        </AutoSizer>
    </div>
  );
}