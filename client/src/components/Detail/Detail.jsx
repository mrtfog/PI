import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getVideogameById } from "../../actions/index";
import "./Detail.css";

function Detail({ id }) {
  const dispatch = useDispatch();
  const videogame = useSelector((store) => store.searchVideogameById);

  useEffect(() => {
    dispatch(getVideogameById(id));
  }, []); 
  
  return (    
    <div className="container-detail">
      <div className="filter-detail">
        <div className="filter-info">
          <div className="info">
            <div className="image">
                  <img src={videogame.image} alt={videogame.name} /> 
            </div>
            <div className="details">
              <div className="detail-title">
                <h1>{videogame.name} </h1>
                <h5>Released in {videogame.released}</h5>
              </div>

              <div className="text">
                <h2>About this game:</h2>
                <p>{videogame.description}</p>
              </div>
              <div className="Genres">
                <div className="genres">
                <h2>How many stars get?</h2>
                <p>It's an {videogame.genres} game ranked with ⭐{videogame.rating}.</p>  
                </div>
              </div>
              <div className="Platforms">
                <div className="platforms">
                  <h2>Where can i play it?</h2>
                  <p>This game it's able to be played in: {videogame.platforms}.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
        <Link to="/home">
            <button className="btn-backToHome"type="submit">Back to home</button>
        </Link>
      </div>
    </div>    
  );
}

export default Detail;