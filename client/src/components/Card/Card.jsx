import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';

function Card({data}) {
	return (
		<>
            <figure>
                    <img className='img' src={data.image} alt={data.name} />
                <figcaption>
                        <h2>{data.name}</h2>
                        <p>{data.genres}</p>
                        <p>⭐{data.rating}</p>
                        <Link to={`/videogames/${data.id}`}>
                            <button className="button">More details</button>
                        </Link>
                </figcaption>
            </figure>
		</>
	);
}

export default Card;
