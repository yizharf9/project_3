import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const {
    Subs: { get_memberSubs, add_Sub },
    Movies: { getMovies },
    Members: { delete_Member },
} = require("../utils");

export default function Member({ member }) {
    const n = useNavigate()
    const [display, setdisplay] = useState(false);
    const [newSub, setNewSub] = useState({});

    const [subs, setsubs] = useState([]);
    const [movies, setmovies] = useState([]);
    const [watched, setWatched] = useState([]);

    useEffect(() => {
        get_memberSubs(member._id).then((curr_subs) => {
            setsubs(curr_subs);
            setNewSub({ MemberID: member._id });
        });
    }, [member._id]);
    let Today = new Date().toISOString().slice(0, 10);

    useEffect(() => {
        getMovies().then((movies) => {
            let subs_ids = subs.map((sub) => {
                return sub.MovieID;
            });
            let sub_able = movies.filter((movie) => {
                return !subs_ids.includes(movie._id);
            });
            let watched = movies
                .filter((movie) => {
                    return subs_ids.includes(movie._id);
                })
                .map((movie) => {
                    let Date = subs.find(
                        (sub) => sub.MovieID === movie._id
                    ).Date;
                    movie.Date = Date;
                    return movie;
                });
            setmovies(sub_able);
            setWatched(watched);
        });
    }, [subs]);

    let subOptions_dis = movies.map((option, i) => {
        return (
            <option key={i} value={option._id}>
                {option.Title}
            </option>
        );
    });
    let newSub_display = (
        <div style={{ border: "solid blue" }}>
            <br />
            <select
                onClick={(e) => {
                    setNewSub({ ...newSub, MovieID: e.target.value });
                    console.log(newSub);
                }}
            >
                {subOptions_dis}
            </select>
            <input type="date" value={newSub.Date} />
            <input
                type="button"
                value="today!"
                onClick={() => {
                    setNewSub({ ...newSub, Date: Today });
                }}
            />
            <br />
            <input
                type="button"
                value="subscribe!"
                onClick={() => {
                    console.log(newSub);
                    add_Sub(newSub);
                    window.location.reload();
                }}
            />
            <br />
            <br />
        </div>
    );

    let watched_dis = watched.map((movie, i) => {
        return (
            <li key={i}>
                <Link to={`../../movies/all-movies/${movie.Title}`}>{movie.Title}</Link>,
                <br />
                <span>{movie.Date}</span>
            </li>
        );
    });

    return (
        <div>
            <div
                style={{
                    border: "solid black",
                    marginInline: "300px",
                    paddingInline: "100px",
                    textAlign: "left",
                }}
            >
                <br />
                <div style={{ textAlign: "center" }}>
                    <input type="button" value="delete" onClick={() => { delete_Member(member._id);window.location.reload()}}/>
                    <input type="button" value="edit" onClick={() => { n(`../edit-member/${member._id}`) }}/>
                </div>
                <h3>{member.Fullname}</h3>
                <div style={{}}>
                    <h4>Email:</h4>
                    <span>{member.Email}</span>
                    <h4>City :</h4>
                    <span>{member.City}</span>
                    <br />
                    <br />
                    <div
                        style={{
                            border: "solid black",
                            paddingInline: "",
                            textAlign: "center",
                        }}
                    >
                        <h4>movies watched</h4>
                        <input
                            type="button"
                            value="subscribe to new movie"
                            onClick={() => {
                                setdisplay(!display);
                            }}
                        />
                        <br />
                        {display && newSub_display}
                        <ul>{watched_dis}</ul>
                    </div>
                </div>
                <br />
            </div>
        </div>
    );
}
