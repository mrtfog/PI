import React from "react";
import Card from "../Card/Card";
import Loader from "../../layout/Loader/Loader"
import './Videogames.css'

export default function Videogames ({videogames}) {
  return (
    <div className="show">
      
      {videogames.length > 0  || videogames.length < 14 ?
      videogames.map((data) => (<Card data={data} id=""/>))
      : <Loader />
      } 
    </div>
  );
};

