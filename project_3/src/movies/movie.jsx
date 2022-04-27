import React from "react";
import * as utils from "../utils";
import { useNavigate } from "react-router-dom";

export default function Movie({ data }) {
    const { _id, Title, Image, Premiere, Genres } = data;
    const n = useNavigate();

    const edit_movie = () => {
        n(`../edit-movie/${_id}`);
    };

    const delete_movie = () => {
        utils.delete_movie(_id);
        window.scrollTo(0, 0);
        window.location.reload();
    };

    let _Genres = Genres.map((gen, i) => {
        return <li key={i}>{gen}</li>;
    });

    return (
        <>
            <div className="movie">
                <input type="button" value="delete" onClick={delete_movie} />
                <input type="button" value="edit" onClick={edit_movie} />
                <h3>{Title}</h3>
                <div style={{ marginLeft: "100px", textAlign: "left" }}>
                    <h4>Premiere :</h4>
                    <li>{Premiere}</li>
                    <h4>Genres :</h4>
                    {_Genres}
                </div>
                <br />
                <img src={Image} alt="" width={"30%"} height={"30%"} />
                <br />
            </div>
            <br />
        </>
    );
}
