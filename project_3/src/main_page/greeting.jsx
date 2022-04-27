import React from "react";

export default function Greeting({userid}) {
    return (
        <div
            style={{
                // border: "solid black",
                // width: "fit-content",
                margin: "auto",
                textAlign: "left",
                padding : '20px',
                position : "absolute"
            }}
        >
            <h3> {`Greetings, ${userid}`}</h3>
            <h3> {`good to see you again...`}</h3>
        </div>
    );
}
