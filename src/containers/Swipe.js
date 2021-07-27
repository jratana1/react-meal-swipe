import React, { useMemo, useEffect } from 'react'
import TinderCard from 'react-tinder-card'
import { BASE_URL } from '../App'

import './swipe.css'

let db= Array(10)
const alreadyRemoved = []
let charactersState = db

function Swipe (props) {
const { characters, coords, setCharacters, query, setQuery, setPlaces } = props;

  const childRefs = useMemo(() => Array(db.length).fill(0).map(i => React.createRef()), [])

  const swiped = (direction, restaurant) => {
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
        setPlaces(res)
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
        if (characters.length === 0){
          let config = {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              Authorization: `Bearer ${sessionStorage.jwt}`
          },
          body: JSON.stringify({term: "restaurant", location: query.filters.location, latitude: query.latitude, longitude: query.longitude, offset: query.refresh*10+1})
      }
    
      fetch(BASE_URL+"/swipe", config)
          .then(res => res.json())
          .then(res => {
            setCharacters(res)
            console.log(res)
            db = res
            charactersState = db
            setQuery({...query, refresh: query.refresh+1})
            
          })
        }
        }
        , [query, setQuery, characters, setCharacters, coords])

  return (

    <div className='swipeContainer'>
      <div className='cardContainer'>
        {characters.map((character, index) =>
          <TinderCard ref={childRefs[index]} className='swipe' key={character.name} 
                        onSwipe={(dir) => swiped(dir, character)} 
                        onCardLeftScreen={() => outOfFrame(character.name)}
                        preventSwipe={['up','down']} 
                         >
            <div style={{ backgroundImage: `url(${character.photos[0]})` }} className='card'>
                <div style={{backgroundColor: 'rgba(52, 52, 52, 0.4)', position: 'absolute', left: 0,
                        bottom: 0, textAlign: 'left', color: 'white', fontWeight: 'bold', borderRadius: '25px',
                        maxWidth: 400, width: '66%', padding: '10px'}} className='caption'>
                    <h2 style={{marginTop: '0', paddingTop: '0'}}>{character.name}</h2>
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
    </div>

  )
}

export default Swipe