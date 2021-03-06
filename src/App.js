import React, { useState, useEffect } from 'react';
import './App.css';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HashRouter, Switch } from 'react-router-dom';
import { geolocated } from "react-geolocated";

import Navbar from './components/Navbar'
import Header from './components/Header'
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import FormDialog from './components/SearchModal'


import Home from './containers/Home';
import List from './containers/List';
import Profile from './containers/Profile';
import Swipe from './containers/Swipe';
import Show from './containers/Show'
import Legal from './containers/Legal'


import Loader from "react-loader-spinner";
import Grid from '@material-ui/core/Grid';

// import { ThemeProvider, createMuiTheme, makeStyles } from '@mui/material/styles';

// const theme = createMuiTheme();

// const useStyles = makeStyles((theme) => {
//   root: {
//     // some css that access to theme
//   }
// });

// export const BASE_URL = "https://shielded-coast-26232.herokuapp.com/";
export const BASE_URL = "http://localhost:3000/";

function App(props) {
  const [isBusy, setBusy] = useState(true)
  const [value, setValue] = useState("MealSwipe");
  const [loggedIn, setLoggedIn] = useState(!!sessionStorage.jwt);
  const [places, setPlaces] = useState([])
  const [query, setQuery] = useState({refresh:0, latitude: 0, longitude: 0, filters: {openNow: false,
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
                                                                                      vegetarian: false}})
  const [characters, setCharacters] = useState([])
  const [open, setOpen] = useState(false)
  const [likes, setLikes] = useState([])
  const coords = props.coords


  useEffect(()=> {
    let config = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${sessionStorage.jwt}`
        },
    }
    if (loggedIn) {
      fetch(BASE_URL+"load", config)
      .then(res => res.json())
      .then(res => {
      setPlaces(res.restaurants)
      setLikes(res.likes)
      })
    }
  }, [loggedIn])

  useEffect(()=> {
    if  (coords != null) {
      setQuery((prevState) => ({
        ...prevState,
        latitude: coords.latitude,
        longitude: coords.longitude
      }))
      setBusy(false)
    }
  }, [coords])

  const renderLoad = () => {
    if (isBusy || (coords === null)) {
      return (
            <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            style={{height: '100%'}}
            >
              <h2>Loading</h2>
              <Loader
                  type="TailSpin"
                  color="#00BFFF"
                  height={100}
                  width={100}
                  visible={isBusy}
                /> 
            </Grid>
      )
    } else {

      return (
        <HashRouter basename='/'>
          <Header page={value} setValue={setValue} setOpen={setOpen}/>
          <Navbar value={value} setValue={setValue} />
          <FormDialog open={open} query={query} setOpen={setOpen} setQuery={setQuery} setCharacters={setCharacters}></FormDialog>
          <Switch>
            <PublicRoute path='/' exact restricted={true} component={Home} setLoggedIn={setLoggedIn} loggedIn={loggedIn}/>
            <PublicRoute path='/legal' exact restricted={false} component={Legal}/>
            <PrivateRoute path='/swipe' exact component={Swipe} 
                coords={props.coords}
                setPlaces={setPlaces} 
                query={query} 
                setQuery={setQuery} 
                characters={characters} 
                setCharacters={setCharacters}/>
            <PrivateRoute path='/list' exact component={List} places={places} setPlaces={setPlaces} likes={likes} setLikes={setLikes}/>
            <PrivateRoute path='/profile' exact component={Profile} /> 
            <PrivateRoute path='/restaurants/:id' component={Show} page={value} places={places} setPlaces={setPlaces} likes={likes} setLikes={setLikes}/>
          </Switch>
        </HashRouter>
      )
    }
  }

    return (
      <div className="App">
        {renderLoad()}  
      </div>
    );
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(App);