import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as utils from "../utils";

export default function NewMember() {
    const styling = {
        textAlign: "left",
        position: "relative",
        marginInline: "375px",
    };
    const n = useNavigate();
    const [Input, setInput] = useState({});

    const handle_input = (e) => {
        let { value, name } = e.target;
        setInput({ ...Input, [name]: value });
        // console.log(Input);
        console.log(value);
    };

    const add_Member = async (e) => {
        console.log(Input);
        await utils.Members.add_Member(Input);
        n("../all-members");
    };

    return (
        <div style={{ alignContent: "center" }}>
            <div style={styling}>
                <h3>Add a new member!</h3>
                <br />
                Full Name :{" "}
                <input type="text" name="Fullname" onKeyUp={handle_input} />
                <br />
                Email :{" "}
                <input type="text" name="Email" onKeyUp={handle_input} />
                <br />
                City : <input type="text" name="City" onKeyUp={handle_input} />
                <br />
                <br />
            </div>
            <input type="button" value="SAVE" onClick={add_Member} />
        </div>
    );
}
