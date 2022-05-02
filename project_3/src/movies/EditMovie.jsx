import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as utils from "../utils";

export default function EditMovie() {
    const styling = {};
    const n = useNavigate();

    let { movieid: movieID } = useParams();
    const [Input, setInput] = useState({});

    const genre_list = utils.genres;
    const [genres, setGenres] = useState([]);
    const [genre, setGenre] = useState("");

    useEffect(() => {
        utils.Movies.getMovie(movieID).then((movie) => {
            setInput(movie);
            setGenres([...movie.Genres]);
            let _title = document.getElementById("_title");
            _title.innerText = "edit movie : " + movie.Title;
        });
    }, [movieID]);

    useEffect(() => {
        setInput({ ...Input, Genres: [...genres] });
    }, [genre,genres])
    

    const handle_input = (e) => {
        let { value, name } = e.target;
        setInput({ ...Input, [name]: value });
    };

    const getPickedGenre = (e) => {
        setGenre(e.target.value);
    };

    const save = async (e) => {
        console.log(Input);
        let status = await utils.Movies.upt_movie(movieID,Input);
        alert(status)
        n("../all-movies");
    };

    let genres_options = genre_list.map((gen, i) => {
        return <option key={i}>{gen}</option>;
    });

    let genres_dis = genres.map((gen, i) => {
        return (
            <li name="genres" key={i} value={gen}>
                {gen}
            </li>
        );
    });

    return (
        <div style={styling}>
            <h3 id="_title">edit movie : </h3>
            <br />
            Title :{" "}
            <input
                className="input"
                type="text"
                name="Title"
                value={Input.Title}
                onChange={handle_input}
            />
            <br />
            Premiere :{" "}
            <input
                className="input"
                type="date"
                name="Premiere"
                value={Input.Premiere}
                onChange={handle_input}
            />
            <br />
            image url :{" "}
            <input
                className="input"
                type="text"
                name="Image"
                value={Input.Image}
                onChange={handle_input}
            />
            <br />
            Genres :{" "}
            <select name="genres" id="" onChange={getPickedGenre}>
                {genres_options}
            </select>
            <input
                type="button"
                value="add"
                onClick={() => {
                    setGenres([...genres, genre]);
                    // console.log(Input.Genres);
                    // console.log(genres);
                }}
            />
            <br />
            <input
                type="button"
                onClick={() => {
                    setGenres([]);
                }}
                value={"clear genres"}
            />
            <br />
            <div style={{ margin: "auto", width: "300px" }}>
                <ul>{genres_dis}</ul>
            </div>
            <br />
            <input type="button" value="SAVE" onClick={save} />
            {"  "}
            <input
                type="button"
                value="CANCEL"
                onClick={() => n("../all-movies")}
            />
        </div>
    );
}
