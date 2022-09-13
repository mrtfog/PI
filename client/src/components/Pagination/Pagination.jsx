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
       <div className="item-PrevNext">
        <button className="item" onClick={() => pagination((num) => num!== 1? num - 1 : num)}>&#10092;</button>
      </div> 
        {pageNumbers.map((num) => (
          <div key={num} className="item">
            <button onClick={() => pagination(num)}>
              {num}
            </button>
          </div>
        ))}
      <div className="item-PrevNext">
        <button  className="item" onClick={() => pagination((num) => num!== pageNumbers.length ? num + 1 : num)}>&#10093;</button>
      </div> 
    </nav>
  );
};


