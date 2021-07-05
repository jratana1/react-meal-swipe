import React, { useState, useMemo, useEffect } from 'react'
// import TinderCard from '../react-tinder-card/index'
import TinderCard from 'react-tinder-card'
import { BASE_URL } from '../App'
import { HashRouter, Route, Switch, useLocation, useHistory } from 'react-router-dom';

import './swipe.css'



let db= Array(10)
const alreadyRemoved = []
let charactersState = db // This fixes issues with updating characters state forcing it to use the current state and not the state that was active when the card was created.

function Swipe () {
  const [characters, setCharacters] = useState(db)
  const [lastDirection, setLastDirection] = useState()
  const location = useLocation()


  const childRefs = useMemo(() => Array(db.length).fill(0).map(i => React.createRef()), [])

  const swiped = (direction, restaurant) => {
    console.log(restaurant)
    setLastDirection(direction)
    alreadyRemoved.push(restaurant.name)
    
    if (direction === 'right') {
        let config = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${sessionStorage.jwt}`
            },
            body: JSON.stringify({restaurant: restaurant})
        }

        fetch(BASE_URL+"/swiperight", config)
        .then(res => res.json())
        .then(res => {
        console.log(res)
        })
    }
  }

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!')
    charactersState = charactersState.filter(character => character.name !== name)
    setCharacters(charactersState)
  }

  const swipe = (dir) => {
    const cardsLeft = characters.filter(person => !alreadyRemoved.includes(person.name))
    if (cardsLeft.length) {
      const toBeRemoved = cardsLeft[cardsLeft.length - 1].name // Find the card object to be removed
      const index = db.map(person => person.name).indexOf(toBeRemoved) // Find the index of which to make the reference to
      alreadyRemoved.push(toBeRemoved) // Make sure the next card gets removed next time if this card do not have time to exit the screen
      childRefs[index].current.swipe(dir) // Swipe the card!
    }
  }

  useEffect(
    () => {
      let config = {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          Authorization: `Bearer ${sessionStorage.jwt}`
      },
      body: JSON.stringify({term: "burrito", location: "philly"})
  }

  fetch(BASE_URL+"/swipe", config)
      .then(res => res.json())
      .then(res => {
        setCharacters(res)
        db = res
        charactersState = db
        
      })
    }
    , [])

  return (
    <>
    <div className='swipeContainer'>
      <div className='cardContainer'>
        {characters.map((character, index) =>
          <TinderCard ref={childRefs[index]} className='swipe' key={character.name} 
                        onSwipe={(dir) => swiped(dir, character)} 
                        onCardLeftScreen={() => outOfFrame(character.name)} 
                        preventSwipe={['up', 'down']} >
            <div style={{ backgroundImage: `url(${character.photos[0]})` }} className='card'>
                <div style={{backgroundColor: 'rgba(52, 52, 52, 0.0)', position: 'absolute', left: 10,
                        bottom: 10, textAlign: 'left', color: 'white', fontWeight: 'bold'}} className='caption'>
                    <h1>{character.name}</h1>
                    <div>{character.location.address1}</div>
                    <div>{character.location.city}, {character.location.state} {character.location.postal_code}</div>
                </div>
            </div>
          </TinderCard>
        )}
      </div>
      <div className='buttons'>
        <button onClick={() => swipe('left')}>Swipe left!</button>
        <button onClick={() => swipe('right')}>Swipe right!</button>
      </div>
      {lastDirection ? <h2 key={lastDirection} className='infoText'>You swiped {lastDirection}</h2> : <h2 className='infoText'>Swipe a card or press a button to get started!</h2>}
    </div>
    </>
  )
}

export default Swipe