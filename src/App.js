import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Login with google
        </p>
          <a href="http://localhost:3000/authenticate-facebook">Log-In with facebook</a>
          <a href="http://localhost:3000/authenticate-google">Log-In with google</a>
      </header>
    </div>
  );
}

export default App;


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