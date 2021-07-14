import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import FilterListIcon from '@material-ui/icons/FilterList';
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';
import IconButton from '@material-ui/core/IconButton';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    minHeight: '44px',
    width: '100%',
    position: 'sticky',
    top: 0,
  },
  // menuButton: {
  //   marginRight: theme.spacing(2),
  // },
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
  const classes = useStyles();

  const handleClick = () => {
    props.setOpen(true)
  }

  return (
    <> 
      <div className={classes.root}>
        <AppBar className={classes.bar} position="static">
          <Toolbar className={classes.toolbar}>
            <Typography edge="start" variant="h6" className={classes.title}>
            <FastfoodIcon /> {props.page}
            </Typography>
            {/* <Button color="inherit">Login</Button> */}
            <IconButton edge="end" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleClick}>
              {props.page === "Places" ? <FilterListIcon /> : <SettingsApplicationsIcon />}
            </IconButton>
          </Toolbar>
        </AppBar>
      </div> 
    </>
  
  );
}