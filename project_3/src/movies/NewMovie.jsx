import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as utils from "../utils";

export default function NewMovie() {
    const styling = {};
    const n = useNavigate()
    const [Input, setInput] = useState({});
    
    const genre_list = utils.genres;
    const [genres, setGenres] = useState([]);
    const [genre, setGenre] = useState("");


    //? an effect that updates the Genres key in the input movie
    useEffect(() => {
        setInput({ ...Input, Genres: genres });
    }, [genres])
    

    const handle_input = (e) => {
        let { value, name } = e.target;
        setInput({ ...Input, [name]: value });
        // console.log(Input);
        // console.log(value);
    };

    const getPickedGenre = (e) => {
        setGenre(e.target.value);
    };

    const addMovie =async (e) => {
        console.log(Input);
        let status = await utils.add_movie(Input)
        console.log(status)
        n("../movies")
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
            <h3>Add a new movie!</h3>
            <br />
            Title : <input type="text" name="Title" onKeyUp={handle_input} />
            <br />
            Premiere :{" "}
            <input type="date" name="Premiere" onKeyUp={handle_input} />
            <br />
            image url :{" "}
            <input type="text" name="Image" onKeyUp={handle_input} />
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
                }}
            />
            <br />
            <div style={{ margin: "auto", width: "300px" }}>
                <ul>{genres_dis}</ul>
            </div>
            <br />
            <input type="button" value="SAVE" onClick={addMovie} />
        </div>
    );
}
