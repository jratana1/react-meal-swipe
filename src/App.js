import logo from './logo.svg';
import './App.css';

function App() {
//  const handleClick = () => {
//     fetch('http://localhost:3000/auth/facebook',{
//     method: 'POST',
    
//     })
//  } 

// fetch('https://api.yelp.com/v3/graphql', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//     'Authorization': `Bearer w6qa8__4fH9T6fuiTpxA09hBfrKhosMvhe9N4EVtpZ6GaqJpTTasxnDkgApBCtGUGbiO9VinV1x4nU9VhVeMLepRZa1CZdHpK-o33NtvPj2LsFag44iGgPMqkx6eX3Yx`
//   },
//   body: JSON.stringify({
//     query: `
//         query GetRest{
//   search(term: "burrito", location: "philly") {
//     total
//     business {
//       name
//       location {
//         address1
//       }
//     }
//   }
// }`

//   }),
// })
//   .then((res) => res.json())
//   .then((result) => console.log(result));


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Login with google
        </p>
<a href="http://localhost:3000/authenticate-facebook">Log-In with Google</a>

<a href="http://localhost:3000/authenticate-facebook">here face</a>
<a href="http://localhost:3000/authenticate-google">here google</a>
      </header>

                <form
                    id="main-login"
                    action="http://localhost:3000/auth/google_oauth2"
                    method="POST">
                    <h2>
                        Admin UI Login
                    </h2>
                        <button type="submit">Submit</button>

                </form>
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