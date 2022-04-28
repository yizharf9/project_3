import { React, useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Greeting from "./Greeting";

export default function Main() {
    let n = useNavigate();
    let { id: userid } = useParams();

    const navigate = (e) => {
        // navigating throw the app while confiming logging out
        if (e.target.value === "log-out") {
            let msg =
                "you are about to log out of the system,\n are you sure you want to do that?";
            if (window.confirm(msg)) {
                n(e.target.name);
            }
        } 
    };

    return (
        <div>
            <div className="top-row">
                <input
                    style={{
                        backgroundColor: "rgb(20, 20, 188)",
                        color: "white",
                    }}
                    type="button"
                    name="/"
                    value="log-out"
                    onClick={navigate}
                />
                <input
                    type="button"
                    value="Movies"
                    onClick={() => n("./movies/all-movies")}
                />
                <input
                    type="button"
                    value="Members"
                    onClick={() => n("./members/all-members")}
                />
            </div>
            <Greeting userid={userid} />
            <h2>Main</h2>
            <Outlet />
        </div>
    );
}
