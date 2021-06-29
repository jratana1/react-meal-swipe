import React, { useState } from 'react';
import './App.css';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar'



function App() {
  const [isBusy, setBusy] = useState(true)

  const renderLoad = () => {
    if (isBusy) {
      setBusy(false)
      return <div>Loading</div>;
    } else {
      return (
          <Navbar />
        // <HashRouter basename='/'>
        //   <Navbar />
        //   <Switch>
        //     <Route path='/' exact component={Home} />
        //     <Route path='/swipe' exact component={About} />
        //     <Route path='/profile' exact component={Contact} />
    
        //   </Switch>
        // </HashRouter>
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

// return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Login with google
//         </p>
//           <a href="http://localhost:3000/authenticate-facebook">Log-In with facebook</a>
//           <a href="http://localhost:3000/authenticate-google">Log-In with google</a>
          
//       </header>
//     </div>
//   );
// }

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