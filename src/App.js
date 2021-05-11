import logo from './logo.svg';
import './App.css';

function App() {
      let config = {
      method: 'GET',
      headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJpZCI6NywiZXhwIjoxNjI1OTQxMDMxfQ.KjoSFea7NTjnq6NWqietCocQ5OnblTrdAmXSmey3ybA`
      },
      body: JSON.stringify(this.state)
  }
  fetch(`http://localhost:3000/users`, config)
      .then(res => res.json())
      .then(res => {
          console.log(res)
      })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
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
//     body: JSON.stringify({email:"test5@test.com",     password:"test12345"})
//   })
// .then(res => res.json())
//       .then(res => {
//           console.log(res)
//       })