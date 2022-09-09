import React, {useState} from 'react'
import { Link } from "react-router-dom";
import './NavBar.css'
import Henry from './favicon.ico'

const NavBar = () => {

  const [name, setName] = useState("");

  function handleSubmit(e) {
      e.preventDefault();
      setName("");
  }

  return (
    <div className='navbar'>


        <div className='title'>
          <img src={Henry} alt="" />
          <h1>Henry Videogames</h1>
        </div>
        
        <div className='searchbar'>
          <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Search a videogame" type="text"/>
          <Link to={`/results/${name}`}>
            <button>Search</button>
          </Link>
        </div>

        <div className='create-game'>
        <Link to='/create'>
          <button><p>Create Game</p></button>
        </Link>
        </div>
        
    </div>
  )
}

export default NavBar