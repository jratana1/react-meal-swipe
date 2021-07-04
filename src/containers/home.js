import React, { useState, useEffect } from 'react';

import './home.css'
import { Link } from 'react-router-dom';
import Login from '../components/Login'
import { isLogin } from '../utils.js';

import { useLocation, useHistory, Redirect } from 'react-router-dom';



const Home = (props) => {
  const [token, setToken] = useState();

  const location = useLocation()
  const history = useHistory()

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search)
    console.log(location)
    if (queryParams.has('token')) {
      const jwt = queryParams.get('token');
      sessionStorage.setItem("jwt", jwt)
      console.log(sessionStorage.jwt)
      props.setIsLogIn("true")
      // queryParams.delete('token')
      // history.replace({
      //   search: queryParams.toString(),
      // })
    }
  }, [])



    return(   
      // <Login setToken={setToken} />
        // const history = useHistory()

      <>    
      {isLogin() ? <Redirect to="swipe" /> : <Login />}
      </>
    )
  }
  
  export default Home