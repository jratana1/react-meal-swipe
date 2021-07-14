import React, { useState, useEffect } from 'react';
import './App.css';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HashRouter, Switch } from 'react-router-dom';

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

// export const BASE_URL = "https://shielded-coast-26232.herokuapp.com/";
export const BASE_URL = "http://localhost:3000/";

function App() {
  const [isBusy, setBusy] = useState(true)
  const [value, setValue] = useState("MealSwipe");
  const [loggedIn, setLoggedIn] = useState(false);
  const [places, setPlaces] = useState([])
  const [query, setQuery] = useState({refresh:0})
  const [characters, setCharacters] = useState([])
  const [open, setOpen] = useState(false)

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
          <Header page={value} setValue={setValue} setOpen={setOpen}/>
          <Navbar value={value} setValue={setValue} />
          <FormDialog open={open} setOpen={setOpen} setQuery={setQuery}></FormDialog>
          <Switch>
            <PublicRoute path='/' exact restricted={true} component={Home} setLoggedIn={setLoggedIn} loggedIn={loggedIn}/>
            <PrivateRoute path='/swipe' exact component={Swipe} 
                setPlaces={setPlaces} 
                query={query} 
                setQuery={setQuery} 
                characters={characters} 
                setCharacters={setCharacters}/>
            <PrivateRoute path='/list' exact component={List} places={places} setPlaces={setPlaces}/>
            <PrivateRoute path='/profile' exact component={Profile} /> 
            <PrivateRoute path='/restaurants/:id' component={Show} places={places} setPlaces={setPlaces}/>
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