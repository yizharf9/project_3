import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as utils from "../utils";

export default function NewMember() {
    const styling = {
        textAlign: "left",
        position: "relative",
        marginInline: "375px",
    };

    const n = useNavigate();
    const [Input, setInput] = useState({});
    const { memberid: memberID } = useParams();

    useEffect(() => {
        utils.Members.get_Member(memberID).then((member) => {
            setInput(member);
        });
        window.scrollTo(0, 0);
    }, []);

    const handle_input = (e) => {
        let { value, name } = e.target;
        setInput({ ...Input, [name]: value });
        // console.log(Input);
        console.log(value);
    };

    const upt_Member = async (e) => {
        console.log(Input);
        await utils.Members.upt_Member(memberID, Input);
        n("../all-members");
    };

    return (
        <div style={{ alignContent: "center" }}>
            <div style={styling}>
                <h3>Add a new member!</h3>
                <br />
                Full Name :{" "}
                <input
                    type="text"
                    name="Fullname"
                    value={Input.Fullname}
                    onChange={handle_input}
                />
                <br />
                Email :{" "}
                <input
                    type="text"
                    name="Email"
                    value={Input.Email}
                    onChange={handle_input}
                />
                <br />
                City :{" "}
                <input
                    type="text"
                    name="City"
                    value={Input.City}
                    onChange={handle_input}
                />
                <br />
                <br />
            </div>
            <input type="button" value="SAVE" onClick={upt_Member} />
            {"  "}
            <input
                type="button"
                value="CANCEL"
                onClick={() => {
                    n("../all-members");
                }}
            />
        </div>
    );
}
