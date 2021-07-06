import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
  useParams
} from "react-router-dom";

function Show(props) {
    // We can use the `useParams` hook here to access
    // the dynamic pieces of the URL.
    let { id } = useParams();
    let data = useLocation().state.restaurant;
        console.log(data);
  
    return (
      <div>
        <h3>Restaurant ID: {id}</h3>
        <h3>Restaurant {data.name}</h3>
      </div>
    );
  }

  export default Show