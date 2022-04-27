import { Outlet } from "react-router-dom";
import { React } from "react";
// import * as utils from "../utils";
import { useNavigate } from "react-router-dom";

export default function Movies() {
    const n = useNavigate();
    return (
        <div>
            <input
                type="button"
                value="all movies"
                onClick={() => {
                    n("./all-movies");
                }}
            />
            <input
                type="button"
                value="add movie"
                onClick={() => {
                    n("./add-movie");
                }}
            />
            <br />
            <br />
            <br />
            <div style={{ border: "solid black", marginInline: "100px" }}>
                <Outlet />
                <br />
                <br />
            </div>
            <br />
            <br />
        </div>
    );
}
