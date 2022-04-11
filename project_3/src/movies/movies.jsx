import { React, useState, useEffect } from "react";
import Movie from "./movie";
import * as utils from "../utils";
import { useNavigate } from "react-router-dom";

export default function Movies() {
    const [Movies, setMovies] = useState([]);
    const [Search, setSearch] = useState("Bitten");

    useEffect(() => {
        const _Movies = async () => {
            let data = await utils.getMovies();
            setMovies(data);
            console.log("searching...");
        };
        _Movies();
    }, []);

    const handle_search = (e) => {
        setSearch(e.target.value);
    };

    let Movies_display = Movies.map((movie, i) => {
        return (
            <div key={i}>
                <Movie data={movie} />
            </div>
        );
    });
    return (
        <div>
            <h3>Movies</h3>
            search : <input type="text" onKeyUp={handle_search} />
            <br />
            <br />
            {Movies_display}
        </div>
    );
}
