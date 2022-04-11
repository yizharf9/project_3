import React from "react";

export default function Movie({data}) {
    let _Genres = data.Genres.map((gen, i) => {
        return <li key={i}>{gen}</li>;
    });
    return (
        <div className="movie">
            <h3>{data.Title}</h3>
            {data.Premiered}
            <br />
            {_Genres}
            <br />
            <img src={data.Image} alt="" />
            <br />
        </div>
    );
}
