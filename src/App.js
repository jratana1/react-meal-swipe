import React, { useState, useEffect } from 'react';
import './App.css';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HashRouter, Switch } from 'react-router-dom';

import Navbar from './components/Navbar'
import Header from './components/Header'
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

import Home from './containers/Home';
import List from './containers/List';
import Profile from './containers/Profile';
import Swipe from './containers/Swipe';
import Show from './containers/Show'

export const BASE_URL = "https://shielded-coast-26232.herokuapp.com/";
// export const BASE_URL = "http://localhost:3000/";

function App() {
  const [isBusy, setBusy] = useState(true)
  const [value, setValue] = useState("MealSwipe");
  const [loggedIn, setLoggedIn] = useState(false);
  const [places, setPlaces] = useState([])
  // const [location, setLocation] = useState({lat: null, lng: null, location: ""})
  const [query, setQuery] = useState({refresh:0})
  const [characters, setCharacters] = useState([])

  useEffect(()=> {
    let config = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${sessionStorage.jwt}`
        },
    }

    fetch(BASE_URL+"/restaurants", config)
    .then(res => res.json())
    .then(res => {
    setPlaces(res)
    })
  }, [])

  const renderLoad = () => {
    if (isBusy) {
      setBusy(false)
      return <div>Loading</div>;
    } else {

      return (
        <HashRouter basename='/'>
          <Header page={value} setValue={setValue} />
          <Navbar value={value} setValue={setValue} />
          <Switch>
            <PublicRoute path='/' exact restricted={true} component={Home} setLoggedIn={setLoggedIn} loggedIn={loggedIn}/>
            <PrivateRoute path='/swipe' exact component={Swipe} 
                setPlaces={setPlaces} 
                query={query} 
                setQuery={setQuery} 
                characters={characters} 
                setCharacters={setCharacters}/>
            <PrivateRoute path='/list' exact component={List} places={places}/>
            <PrivateRoute path='/profile' exact component={Profile} /> 
            <PrivateRoute path='/restaurants/:id' component={Show} places={places} />
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


export default App;