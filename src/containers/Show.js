import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  useLocation,
  useParams
} from "react-router-dom";

export const BASE_URL = "http://localhost:3000/";


function Show() {
    // We can use the `useParams` hook here to access
    // the dynamic pieces of the URL.
    const { id } = useParams();
    let data = useLocation()

    
    const [restaurant, setRestaurant]= useState({})

    useEffect(()=> {
            let config = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${sessionStorage.jwt}`
                },
            }
            if (data.state) {
                console.log(data)
            fetch(BASE_URL+"restaurants/"+data.state.restaurant.yelp_id, config)
            .then(res => res.json())
            .then(res => {
            setRestaurant(res.data.business)
            })
            }
            else {
            fetch(BASE_URL+"restaurants/"+id, config)
            .then(res => res.json())
            .then(res => {
            setRestaurant(res.data.business)
            })
            }

    }, [])
    if (restaurant) {
    return (
      <div>
        <h3>Restaurant ID: {id}</h3>
        <h3>{restaurant.name}</h3>
      </div>
    );
    }
    else { return null }
  }

  export default Show