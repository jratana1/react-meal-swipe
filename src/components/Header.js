import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import FilterListIcon from '@material-ui/icons/FilterList';
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';
import IconButton from '@material-ui/core/IconButton';
import { useLocation } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    minHeight: '44px',
    width: '100%',
    position: 'sticky',
    top: 0,
  },
  title: {
    flexGrow: 1,
    textAlign: "left"
  },
  bar: {
    minHeight: '44px',
  },
  toolbar: {
    minHeight: '44px',
  },
}));

export default function Header(props) {
  const { setValue, setOpen, page } = props;
  const classes = useStyles();
  const location = useLocation()

  const handleClick = () => {
    setOpen(true)
  }

  useEffect(() => {
    let path = location.pathname.split("/")[1]
    let value
    switch(path) {
      case "swipe":
        value = "MealSwipe"
        break;
      case "list":
        value = "Places"
        break;
      case "restaurants":
        value = "Places"
      break;
      case "profile":
        value = "Profile"
      break;
      default:
        value = "MealSwipe"
    }
    setValue(value)
      },[location.pathname, setValue])

  return (
    <> 
      <div className={classes.root}>
        <AppBar className={classes.bar} position="static">
          <Toolbar className={classes.toolbar}>
            <Typography edge="start" variant="h6" className={classes.title}>
            <FastfoodIcon /> {page}
            </Typography>
            <IconButton edge="end" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleClick}>
              {page === "Places" ? <FilterListIcon /> : <SettingsApplicationsIcon />}
            </IconButton>
          </Toolbar>
        </AppBar>
      </div> 
    </>
  
  );
}