import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { searchVideogames } from "../../actions/index";
import Videogames from "../../components/Videogames/Videogames";
import { Pagination } from "../Pagination/Pagination";
import "./SearchBar.css";
import Loader from "../../layout/Loader/Loader";

export default function SearchBar() {
  const dispatch = useDispatch();
  let { name } = useParams()

  const searchVideogame = useSelector((state) => state.searchVideogameByName);


  useEffect(() => {
    dispatch(searchVideogames(name));
  }, [name]); 

  // Paginacion
  function pagination(e, num) {
    e.preventDefault();
    setPage(num);
  }

  const [page, setPage] = useState(1);
  const [videogamesPerPage] = useState(10);

  let lastCardPerPage = page * videogamesPerPage;
  let firtsCardPerPage = lastCardPerPage - videogamesPerPage;
  let currentPageGames = searchVideogame.slice(firtsCardPerPage, lastCardPerPage);

  return (
    <div className="search">
        { searchVideogame.length > 0 ?
        <>
          <h1>Search results with the name '{name}'</h1>
          <Videogames videogames={currentPageGames} />
          <Pagination
            videogamesPerPage={videogamesPerPage}
            totalVideogames={searchVideogame.length}
            pagination={pagination}
          />
        </>
        : <Loader/> 
        }
    </div>
  )
};