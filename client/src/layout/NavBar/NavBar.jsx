import React from 'react'
import './NavBar.css'
import Henry from './favicon.ico'

const NavBar = () => {
  return (
    <div className='navbar'>


        <div className='title'>
          <img src={Henry} alt="" />
          <h1>Henry Videogames</h1>
        </div>
        
        <div className='searchbar'>
          <input type="text" placeholder='Search a game'/>
          <button>Search</button>
        </div>

        <div className='create-game'>
        <button><p>Create Game</p></button>
        </div>
        
    </div>
  )
}

export default NavBar