import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getGenres, filterByGenre, orderByCreator, orderAsc, orderDesc } from "../../actions/index";
import "./Filters.css";

export function Filters({pagination}) {
  const dispatch = useDispatch()
  const genres = useSelector((store) => store.genres);

  useEffect(() => {
    dispatch(getGenres());
  }, []); 


  // Filtrado por genre
  const handleFilter = (e) => {
    dispatch(filterByGenre(e.target.value))
    pagination(1);
  };


  // Ordenado
  const handleOrder = (e) => {
    if (e.target.value === "asc_name" || e.target.value === "asc_rating") {
      dispatch(orderAsc(e.target.value));
    } else if (e.target.value === "desc_name" || e.target.value === "desc_rating") {
      dispatch(orderDesc(e.target.value));
    } else {
      dispatch(filterByGenre(e.target.value));
    }
  };

  // Filtrado por API/DB
  const handleCreator = (e) => {
    if (e.target.value === "Api" || e.target.value === "Created") {
      dispatch(orderByCreator(e.target.value));
      pagination(1);
    } else {
      dispatch(filterByGenre(e.target.value));
      pagination(1);
    }
    
  };

  return (
    <div className="container">
      <div className="filters">
         <div className="genre-filter">
          <h3>Filter by Genre</h3>
          <select onChange={(e) => handleFilter(e)}>
            <option defaultValue="All" >All</option>
            {genres.map((G) => (
              <option value={G.name}>{G.name}</option>
            ))}
          </select>
          <i></i>
        </div>


        <div className="order-filter">
          <h3>Order</h3>
          <select onChange={(e) => handleOrder(e)}>
            <option value="All" default>All</option>
            <option value="asc_name">Alphabetically (A-Z)</option>
            <option value="desc_name">Alphabetically (Z-A)</option>
            <option value="asc_rating">Rating (Lower-Higher)</option>
            <option value="desc_rating">Rating (Higher-Lower)</option>
          </select>
        </div>

      
        <div className="creator-filter">
          <h3>Filter by Creator</h3>
          <select onChange={(e) => handleCreator(e)} >
            <option default>All</option>
            <option value="Api">Api videogames</option>
            <option value="Created">User videogames</option>
          </select>
        </div>


      </div> 
      </div>
 
  );
}

export default Filters;


        