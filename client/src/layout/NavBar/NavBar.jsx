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
          <Link to={`/home`}>
            <h1>Henry Videogames</h1>
          </Link>
        </div>

        <div className="search-container">
          <form method="get" onSubmit={(e) => handleSubmit(e)}>
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Search a videogame" className="search1 expandright1" id="searchright" name="q" type="text" autoComplete="off"/>
              <Link to={`/results/${name}`}>
                <label className="button1 searchbutton1" htmlFor="searchright"><span className="mglass">&#9906;</span></label>
              </Link>
          </form>
        </div>

        <div>
        <Link to='/create'>
          <button className='btn-createGame'>Create Game</button>
        </Link>
        </div>
      </div>
    </div>
  )
}

export default NavBar

