import GoogleButton from 'react-google-button'

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
          {/* <a href="http://localhost:3000/authenticate-facebook">Log-In with facebook</a>
          <a href="http://localhost:3000/authenticate-google">Log-In with google</a> */}
          
      </header>
    </div>
  );
}