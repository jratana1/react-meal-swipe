import GoogleButton from 'react-google-button'
import React, { useEffect } from 'react';
import {
    BrowserRouter as Router,
    Link,
    useLocation
  } from "react-router-dom";
import { FormControl } from '@material-ui/core';


export default function Login() {

// useEffect(
//     () => {
//         const params = new URLSearchParams(window.location.search);
//         const foo = params.get('token');
//         if (foo) {
//             props.setToken(foo)
//         }
//     }
// , [])
return (


    <div className="App">
      <header className="App-header">
        <p>
          Login with google
        </p>
            <GoogleButton
                type="light"
                onClick={() => { window.location.href='http://localhost:3000/authenticate-google' }}
            />
      </header>
    </div>
  );
}