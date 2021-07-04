import GoogleButton from 'react-google-button'
import React from 'react';

export default function Login() {
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