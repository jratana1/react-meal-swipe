import React, { useState } from 'react';
import './App.css';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar'
import Header from './components/Header'
import Login from './components/Login'


import Home from './containers/Home';
import List from './containers/List';
import Profile from './containers/Profile';
import Swipe from './containers/Swipe';


export const BASE_URL = "http://localhost:3000/";



function App() {
  const [isBusy, setBusy] = useState(true)
  const [value, setValue] = useState("Welcome");
  const [token, setToken] = useState();

  const renderLoad = () => {
    if (isBusy) {
      setBusy(false)
      return <div>Loading</div>;
    } else {
      if(!token) {
        return <Login setToken={setToken} />
      }

      return (
        <HashRouter basename='/'>
          <Header page={value} setValue={setValue}/>
          <Navbar value={value} setValue={setValue}/>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/swipe' exact component={Swipe} />
            <Route path='/list' exact component={List} />
            <Route path='/profile' exact component={Profile} />
 
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