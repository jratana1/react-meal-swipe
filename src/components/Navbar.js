import React from 'react';
import { Link } from 'react-router-dom';



import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonIcon from '@material-ui/icons/Person';

function Navbar(props) {
  const useStyles = makeStyles({
    stickToBottom: {
      width: '100%',
      position: 'fixed',
      bottom: 0,
    },
  });
  const classes = useStyles();
  return (
    <>    
    { sessionStorage.jwt ? <BottomNavigation
      value={props.value}
      onChange={(event, newValue) => {
        props.setValue(newValue);
      }}
      showLabels
      className={classes.stickToBottom}
    >
      <BottomNavigationAction component={Link} to="/swipe" label="Swipe" value="MealSwipe"icon={<RestaurantIcon />} />
      <BottomNavigationAction component={Link} to="/list" label="Places" value="Places" icon={<FavoriteIcon />} />
      <BottomNavigationAction component={Link} to="/profile" label="Profile" value="Profile" icon={<PersonIcon />} />
    </BottomNavigation>
     : null }
    </>
  );
}

export default Navbar