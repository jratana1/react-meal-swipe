import React, { useEffect } from 'react';

import './home.css'
import Login from '../components/Login'

import { useLocation, useHistory, Redirect } from 'react-router-dom';

const Home = (props) => {
  const location = useLocation()
  const history = useHistory()

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search)

    if (queryParams.has('token')) {
      const jwt = queryParams.get('token');
      sessionStorage.setItem("jwt", jwt)
      props.setLoggedIn(true)
      queryParams.delete('token')
      history.replace({
        search: queryParams.toString(),
      })
    }
  }, [history, props, location.search])

    return(   
      <div className="Home">
        {props.loggedIn ? <Redirect to="swipe" /> : <Login />}
      </div>
    )
  }
  
  export default Home