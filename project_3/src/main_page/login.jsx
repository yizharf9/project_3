import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as utils from "../utils.js";

export default function Login() {
    const n = useNavigate();

    const [Input, setInput] = useState({});

    const handle_input = (e) => {
        let { name, value } = e.target;
        setInput({ ...Input, [name]: value });
    };

    const login = async () => {
        if (Input.Username && Input.Password) {
            console.log(Input);
            let User = await utils.login(Input);
            console.log(User);
            if (!User.hasOwnProperty("Username")) {
                alert("no such user registered in system!");
            } else {
                n(`/main/${User.Fullname}/movies/all-movies`);
            }
        } else {
            alert("make sure fields are filled before submition!");
        }
    };

    return (
        <div>
            <h3>Login</h3>
            <br />
            username :{" "}
            <input type="text" name="Username" onKeyUp={handle_input} />
            <br />
            <br />
            password :{" "}
            <input type="password" name="Password" onKeyUp={handle_input} />
            <br />
            <br />
            <input type="button" value="login" onClick={login} />
        </div>
    );
}
