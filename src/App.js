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

import Loader from "react-loader-spinner";
import Grid from '@material-ui/core/Grid';

// export const BASE_URL = "https://shielded-coast-26232.herokuapp.com/";
export const BASE_URL = "http://localhost:3000/";

function App(props) {
  const [isBusy, setBusy] = useState(true)
  const [value, setValue] = useState("MealSwipe");
  const [loggedIn, setLoggedIn] = useState(false);
  const [places, setPlaces] = useState([])
  const [query, setQuery] = useState({refresh:0, latitude: 0, longitude: 0, location: ""})
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

    fetch(BASE_URL+"/load", config)
    .then(res => res.json())
    .then(res => {
    setPlaces(res.restaurants)
    setLikes(res.likes)
    })
  }, [])

  useEffect(()=> {
    if  (coords != null) {
      setQuery({...query, latitude: coords.latitude, longitude: coords.longitude})
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
          <FormDialog open={open} setOpen={setOpen} setQuery={setQuery}></FormDialog>
          <Switch>
            <PublicRoute path='/' exact restricted={true} component={Home} setLoggedIn={setLoggedIn} loggedIn={loggedIn}/>
            <PrivateRoute path='/swipe' exact component={Swipe} 
                coords={props.coords}
                setPlaces={setPlaces} 
                query={query} 
                setQuery={setQuery} 
                characters={characters} 
                setCharacters={setCharacters}/>
            <PrivateRoute path='/list' exact component={List} places={places} setPlaces={setPlaces} likes={likes} setLikes={setLikes}/>
            <PrivateRoute path='/profile' exact component={Profile} /> 
            <PrivateRoute path='/restaurants/:id' component={Show} places={places} setPlaces={setPlaces} likes={likes} setLikes={setLikes}/>
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
// export default App;