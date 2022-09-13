import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createVideogame, getGenres } from "../../actions/index";
import "./CreateVideogame.css";
import { Link } from 'react-router-dom'

const CreateVideogame = () => {
    const dispatch = useDispatch();
    const genres = useSelector((store) => store.genres);
    const genres1 = genres.slice(0, 10)
    const genres2 = genres.slice(10, 20)

    const [game, setGame] = useState({
        name: "",
        description: "",
        image: "",
        released: "",
        rating: 0,
        genres: [],
        platforms: [],
    });

    useEffect(() => {
        dispatch(getGenres());
    }, []); 

    const randomPlatforms = ["PC", "iOS", "Android", "macOS",  "PlayStation 4", "PlayStation 5", "Xbox", "PS Vita"]

    const ChangeInput = (e) => {
        if (e.target.name === "genres" || e.target.name === "platforms") {
        const arr = game[e.target.name];
        setGame({
            ...game,
            [e.target.name]: arr.concat(e.target.value),
        });
    } else {
        setGame({
            ...game,
            [e.target.name]: e.target.value,
        });
    }
    };

    

    const handleSubmit = (e) => {
        e.preventDefault();

        const obj = {
        name: game.name,
        description: game.description,
        image: game.image,
        released: game.released,
        rating: game.rating,
        genres: game.genres,
        platforms: game.platforms,
        };

        // Validaciones
        if (!obj.name) {
            alert("You should type a name.")
            return
        }
        if (!obj.description) {
            alert("You should type a description.")
            return
        }if (!obj.released) {
            alert("You should type a date.")
            return
        }if (obj.rating > 5 || obj.rating < 0) {
            alert("You should selecta rating between 0 and 5.")
            return
        }


        dispatch(createVideogame(obj));
        e.target.reset();
        alert("Videogame created successfully!");

        setGame({
            name: "",
            description: "",
            image: "",
            released: "",
            rating: 0,
            genres: [],
            platforms: [],
        });
    };

return (
    <div className="container">
        <h1>Create your Videogame!</h1>
        <form
            id="survey-form"
            className="form"
            noValidate
            onChange={(e) => ChangeInput(e)}
            onSubmit={(e) => handleSubmit(e)}
        >
            <div>
            <div>
                <div className="divTitles">
                        <h3 className="titles">Name</h3>
                    <div>
                        <input
                        className="info-createGame"
                        type="text"
                        name="name"
                        value={game.name}
                        autoComplete="off"
                        ></input>
                    </div>
                        <h3 className="titles">Description</h3>
                    <div>
                        <input
                        className="info-description"
                        type="text"
                        name="description"
                        value={game.description}
                        autoComplete="off"
                        ></input>
                    </div>
                        <h3 className="titles">Released</h3>
                    <div>
                        <input
                        className="info-createGame"
                        type="date"
                        name="released"
                        value={game.released}
                        autoComplete="off"
                        ></input>
                    </div>
                        <h3 className="titles">Rating</h3>
                    <div>
                        <input
                        className="info-createGame"
                        type="number"
                        name="rating"
                        value={game.rating}
                        autoComplete="off"
                        ></input>
                    </div>
                </div>
                <div className="imagediv">
                    <h3>Image URL</h3>
                    <input
                    className="imagein"
                    type="text"
                    name="image"
                    value={game.image}
                    autoComplete="off"
                    ></input>
                </div>
            </div>
                <div className="checkboxs">
                    <div className="checks">
                        <label>Genres</label>
                        <div className="gendivs">
                            <div>
                                {genres1.map((gen) => (
                                <div key={gen.name}>
                                    <input
                                    type="checkbox"
                                    name="genres"
                                    value={gen.name}
                                    ></input>
                                    <label name={gen}>{gen.name}</label>
                                </div>
                                ))}
                            </div>
                            <div>
                                {genres2.map((gen) => (
                                <div key={gen.name}>
                                    <input
                                    type="checkbox"
                                    name="genres"
                                    value={gen.name}
                                    ></input>
                                    <label name={gen}>{gen.name}</label>
                                </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="checks">
                        <label>Platforms</label>
                        <div >
                            {randomPlatforms.map((P) => (
                            <div key={P}>
                                <input
                                type="checkbox"
                                name="platforms"
                                value={P}
                                ></input>
                                <label name={P}>{P}</label>
                            </div>
                            ))}
                        </div>
                    </div>
                    
                </div>
                <button className="btn-createGame" type="submit">
                    Create!
                </button>

                <Link to="/home">
                    <button className="btn-bth">
                        Back to Home
                    </button>
                </Link>
            </div>
        </form>
    </div>
);
}

export default CreateVideogame