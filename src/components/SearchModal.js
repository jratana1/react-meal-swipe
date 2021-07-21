import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function FullScreenDialog(props) {
  const classes = useStyles();
  const open = props.open
  const setOpen= props.setOpen
  const [state, setState] = useState({
    openNow: false,
    location: "",
    term: "",
    breakfast_brunch: false,
    burgers: false,
    chinese: false,
    italian: false,
    japanese: false,
    korean: false,
    latin: false,
    mexican: false,
    pizza: false,
    sandwiches: false,
    seafood: false,
    thai: false,
    vietnamese: false,
    vegan: false,
    vegetarian: false
  });

  const handleClose = (event) => {
      console.log(event.currentTarget)
    setOpen(false);
  };

  const handleChange = (event) => {
    const value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
    setState({ ...state, [event.target.name]: value });
  };

  const renderCheckBoxes = () => {
    const cuisines=['breakfast_brunch', 'burgers', 'chinese', 'italian', 'japanese', 'korean', 'latin', 'mexican', 'pizza', 'sandwiches', 'seafood', 'thai', 'vegan', 'vegetarian']
    const rows = cuisines.reduce(function (rows, key, index) { 
        return (index % (cuisines.length/2) === 0 ? rows.push([key]) 
          : rows[rows.length-1].push(key)) && rows;
      }, []);

      return rows.map((row, index) => { 
        return (
        <Grid key={index} item xs={6}>
            {row.map((cuisine, index) => {
            return <FormControlLabel
                        control={
                            <Checkbox
                            checked={state[cuisine]}
                            onChange={handleChange}
                            name={cuisine}
                            color="primary"
                            />
                        }
                        label={cuisine}
                        key={index}
                    />
            })}
        </Grid>
        )
        })
  }

  return (
    <div>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Swipe Settings
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <List>
          <ListItem >
            <TextField
                autoFocus
                margin="dense"
                id="location"
                label="Location"
                name="location"
                value={state.location} 
                onChange={handleChange} 
                fullWidth
            />
          </ListItem>
          <Divider />
          <ListItem >
            <TextField
                autoFocus
                margin="dense"
                id="term"
                label="Search Term"
                name="term"
                value={state.term} 
                onChange={handleChange} 
                fullWidth
            />
          </ListItem>
          <Divider />
          <ListItem >
                <Grid container >   
                    {renderCheckBoxes()}
                    <Grid container   
                        direction="row-reverse"
                        justifyContent="flex-start"
                        alignItems="center"
                    >
                        <Button style={{ fontSize: '11px' }} size="small" variant="outlined" 
                        onClick={() => { setState({ ...state, breakfast_brunch: false,
                                                                burgers: false,
                                                                chinese: false,
                                                                italian: false,
                                                                japanese: false,
                                                                korean: false,
                                                                latin: false,
                                                                mexican: false,
                                                                pizza: false,
                                                                sandwiches: false,
                                                                seafood: false,
                                                                thai: false,
                                                                vietnamese: false,
                                                                vegan: false,
                                                                vegetarian: false }) }}>
                        Uncheck All
                        </Button>
                    </Grid>
                </Grid>
                
          </ListItem>
          <Divider />
          <ListItem >
            <FormControlLabel
                control={<Switch color="primary" checked={state.openNow} onChange={handleChange} name="openNow" value={state.openNow}/>}
                label="Open Now"
            />
          </ListItem>
        </List>
      </Dialog>
    </div>
  );
}