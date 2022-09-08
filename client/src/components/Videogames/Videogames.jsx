import React from "react";
import Card from "../Card/Card";
import Loader from "../../layout/Loader/Loader"
import "./Videogames.css"

export default function Videogames ({videogames}) {
  return (
    <div className="showing">
      
      {videogames.length > 0 ?
      videogames.map((data) => (<Card data={data} />))
      : <Loader />
      } 
    </div>
  );
};

