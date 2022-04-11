import { React, useState, useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Greeting from "./greeting";

export default function Main() {

    const [User, setUser] = useState({});
    let n = useNavigate();
    let {id : userid} = useParams()
    
    const navigate = (e) => {
        n(e.target.name);
    };

    useEffect(() => {}, []);
    return (
        <div>
            <div className="top-row">
                <input
                    type="button"
                    name="/"
                    value="log-out"
                    onClick={navigate}
                />
                <input
                    type="button"
                    name="users"
                    value="users"
                    onClick={navigate}
                />
                <input
                    type="button"
                    name="movies"
                    value="movies"
                    onClick={navigate}
                />
            </div>
            <Greeting userid={userid} />
            <h2>Main</h2>
            <Outlet />
        </div>
    );
}
