import React from 'react';
import s from './Card.module.css'
import { Link } from 'react-router-dom';

function Card({data}) {
	return (
		<>
            <figure>
                    <img className={`${s.img}`} src={data.image}/>
                <figcaption>
                        <h2>{data.name}</h2>
                        <p>{data.genres}</p>
                        <p>⭐{data.rating}</p>
                        <Link to={`/videogames/${data.id}`}>
                            <button className={`${s.button}`}>More details</button>
                        </Link>
                </figcaption>
            </figure>
		</>
	);
}

export default Card;
