import GoogleButton from 'react-google-button'
import React from 'react';
import { BASE_URL } from '../App'


export default function Login() {
return (

      <header className="App-header">
        <p>
          Login with google
        </p>
            <GoogleButton
                type="light"
                onClick={() => { window.location.href=BASE_URL+'authenticate-google' }}            />
      </header>

  );
}