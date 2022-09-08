import React from "react";
import "./Pagination.css";



export const Pagination = ({ videogamesPerPage, totalVideogames, pagination }) => {
  const pageNumbers = [];
  const numOfPages = Math.ceil(totalVideogames / videogamesPerPage)

  for (let i = 1; i <= numOfPages ; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="pagination">
        {pageNumbers.map((num) => (
          <div key={num} className="item">
            <button onClick={(e) => pagination(e, num)}>
              {num}
            </button>
          </div>
        ))}
    </nav>
  );
};