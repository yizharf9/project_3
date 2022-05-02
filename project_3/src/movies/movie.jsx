import React, { useEffect, useState } from "react";
import * as utils from "../utils";
import { useNavigate, Link } from "react-router-dom";

export default function Movie({ data }) {
    const { _id, Title, Image, Premiere, Genres } = data;
    const n = useNavigate();
    const [subs, setSubs] = useState([]);
    const [members, setMembers] = useState([]);

    useEffect(() => {
        utils.Members.get_Members().then((members) => {
            setMembers(members);
            utils.Subs.get_movieSubs(_id).then((subs) => {
                setSubs(subs);
            });
        });
    }, []);

    useEffect(() => {
        let filtered_subs = subs.map((sub) => sub.MemberID);
        let filtered_members = members.filter((member) => {
            return filtered_subs.includes(member._id);
        });
        if (members.length !== 0) {
            filtered_members = filtered_members.map((member) => {
                member.Date = subs.find(
                    (sub) => sub.MemberID === member._id
                ).Date;
                return member;
            });
        }
        setMembers(filtered_members);
    }, [subs]);

    const edit_movie = () => {
        n(`../edit-movie/${_id}`);
    };

    const delete_movie = () => {
        utils.Movies.delete_movie(_id);
        window.scrollTo(0, 0);
        window.location.reload();
    };

    let _Genres = Genres.map((gen, i) => {
        return <li key={i}>{gen}</li>;
    });

    let subs_dis = members.map((member, i) => {
        return (
            <li key={i}>
                <Link to={`../../members/all-members/${member.Fullname}`}>
                    {member.Fullname}
                </Link>
                ,
                <br />
                <span>{member.Date}</span>
            </li>
        );
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
                {subs_dis.length !== 0 && (
                    <div>
                        <h3>watched by :</h3>
                        <ul style={{ border: "solid black" }}>{subs_dis}</ul>
                    </div>
                )}
                <br />
            </div>
            <br />
        </>
    );
}
