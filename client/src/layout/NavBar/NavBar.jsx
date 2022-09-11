import React, {useState} from 'react'
import { Link } from "react-router-dom";
import './NavBar.css'

const NavBar = () => {

  const [name, setName] = useState("");

  function handleSubmit(e) {
      e.preventDefault();
      setName("");
  }

  return (
    <div className='navbarGlow'>
      <div className='navbar'>
        <div className='title'>
          <h1>Henry Videogames</h1>
        </div>

        <div class="search-container">
          <form method="get" onSubmit={(e) => handleSubmit(e)}>
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Search a videogame" className="search expandright" id="searchright" name="q" type="text"/>
              <Link to={`/results/${name}`}>
                <label className="button searchbutton" for="searchright"><span class="mglass">&#9906;</span></label>
              </Link>
          </form>
        </div>

        <div className='create-game'>
        <Link to='/create'>
          <button>Create Game</button>
        </Link>
        </div>
      </div>
    </div>
  )
}

export default NavBar

