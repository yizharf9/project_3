import { React, useState, useEffect } from "react";
import Movie from "./Movie";
import * as utils from "../utils";
import { useNavigate, useParams } from "react-router-dom";

export default function MoviesAll() {
    const { Name } = useParams();
    const [Movies, setMovies] = useState([]);
    const [Searched, setSearched] = useState(Movies);
    const n = useNavigate();

    useEffect(() => {
        const _Movies = async () => {
            let data = await utils.Movies.getMovies();
            setMovies(data);
        };
        _Movies();
    }, []);

    useEffect(() => {
        setSearched(Movies);
        if (Name !== undefined) {
            console.log(Name);
            handle_search({target:{value:Name}})
        }
    }, [Movies]);

    const handle_search = (e) => {
        let value = e.target.value;
        if (value === "" || value === undefined) {
            setSearched(Movies);
        } else {
            setSearched(
                Movies.filter((movie) =>
                    movie.Title.toLowerCase().startsWith(value.toLowerCase())
                )
            );
        }
    };

    const addNew = () => {
        n("../add-movie");
    };

    let searched_display = Searched.map((movie, i) => {
        return (
            <div key={i}>
                <Movie data={movie} />
            </div>
        );
    });

    return (
        <div>
            <br />
            search : <input type="text" onChange={handle_search} />
            <br />
            <br />
            {searched_display}
        </div>
    );
}
