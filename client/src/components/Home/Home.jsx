import React, { useState, useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getVideogames, resetAll } from '../../actions'
import Videogames from '../Videogames/Videogames'
// import {Filter} from '../Filters/Filters'
import {Pagination} from '../Pagination/Pagination'

const Home = () => {
  const dispatch = useDispatch()

  const filteredVideogames = useSelector((state) => state.filteredVideogames);
  const filterBy = useSelector((state) => state.filterBy);
  const orderBy = useSelector((state) => state.orderBy);
  const videogames = useSelector((state) => state.videogames);

  useEffect (() => {
    dispatch(resetAll())
    dispatch(getVideogames())
  }, [])

  // Filtrado y Ordenado
  let allVideogames;
  filterBy === "All" && orderBy === "Select"
    ? (allVideogames = videogames)
    : (allVideogames = filteredVideogames);


  // Paginacion
  function pagination(e, num) {
    e.preventDefault();
    setPage(num);
  }

  const [page, setPage] = useState(1);
  const [videogamesPerPage] = useState(15);

  let lastCardPerPage = page * videogamesPerPage;
  let firtsCardPerPage = lastCardPerPage - videogamesPerPage;
  let currentPage = allVideogames.slice(firtsCardPerPage, lastCardPerPage);

  return (
    <div className="home">
      {/* <Filter pagination={pagination} /> */}
      <Videogames videogames={currentPage} />
      <Pagination
        videogamesPerPage={videogamesPerPage}
        totalVideogames={allVideogames.length}
        pagination={pagination}
      />
    </div>
  )
}

export default Home