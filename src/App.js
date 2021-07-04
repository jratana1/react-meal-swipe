import React, { useState, useEffect } from 'react';
import './App.css';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HashRouter, Route, Switch, useLocation, useHistory } from 'react-router-dom';

import Navbar from './components/Navbar'
import Header from './components/Header'
import Login from './components/Login'
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';


import Home from './containers/Home';
import List from './containers/List';
import Profile from './containers/Profile';
import Swipe from './containers/Swipe';
import { getThemeProps } from '@material-ui/styles';


export const BASE_URL = "http://localhost:3000/";



function App() {
  const [isBusy, setBusy] = useState(true)
  const [value, setValue] = useState("Welcome");
  const [isLogin, setIsLogIn] = useState(false)
  // const [token, setToken] = useState();
  // const history = useHistory()

  // useEffect(() => {
  //   const queryParams = new URLSearchParams(window.location.search)

  //   if (queryParams.has('token')) {
  //     const jwt = queryParams.get('token');
  //     localStorage.setItem("jwt", jwt)
  //     queryParams.delete('token')
  //     history.replace({
  //       search: queryParams.toString(),
  //     })
  //   }
  // }, [token])

  const renderLoad = () => {
    if (isBusy) {
      setBusy(false)
      return <div>Loading</div>;
    } else {

      return (
        <HashRouter basename='/'>
          <Header page={value} setValue={setValue} />
          <Navbar value={value} setValue={setValue} isLogin={isLogin}/>
          <Switch>
            <PublicRoute path='/' exact component={Home} setIsLogIn={setIsLogIn}/>
            <PrivateRoute path='/swipe' exact component={Swipe} />
            <PrivateRoute path='/list' exact component={List} />
            <PrivateRoute path='/profile' exact component={Profile} /> 
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



// export default App;


// fetch('http://localhost:3000/users/sign_in', {
//     method: 'POST',
//     headers:  {
//       "Content-Type": "application/json",
//       "Accept": "application/json"
//     },
//     body: JSON.stringify({email:"test5@test.com", password:"test12345"})
//   })
// .then(res => res.json())
//       .then(res => {
//           console.log(res)
//       })

// let config = {
  //     method: 'GET',
  //     headers: {
  //         Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJpZCI6NywiZXhwIjoxNjI1OTQxMDMxfQ.KjoSFea7NTjnq6NWqietCocQ5OnblTrdAmXSmey3ybA`
  //     },
  //     body: JSON.stringify(this.state)
  // }
  // fetch(`http://localhost:3000/users`, config)
  //     .then(res => res.json())
  //     .then(res => {
  //         console.log(res)
  //     })