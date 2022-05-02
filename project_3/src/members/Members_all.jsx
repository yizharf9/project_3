import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Member from "./Member"
const {
    Members: { get_Members },
} = require("../utils");

export default function MembersAll() {
    const {Name} = useParams()
    const [Members, setMembers] = useState([]);
    const [searched, setSearched] = useState([])

    useEffect(() => {
        get_Members().then(members=>{
            setMembers(members)
            setSearched(members)
        })
    }, [""])
    

    useEffect(() => {
        if (Name !== undefined) {
            console.log(Name);
            handle_search({ target: { value: Name } });
        }
    }, [Members]);

    const handle_search = (e) => {
        let value = e.target.value;
        if (value === "" || value === undefined) {
            setSearched(Members);
        } else {
            setSearched(
                Members.filter((member) =>
                    member.Fullname.toLowerCase().startsWith(
                        value.toLowerCase()
                    )
                )
            );
        }
    };

    let Members_display = searched.map((member, i) => {
        return (
            <div key={i}>
                <Member member={member} />
                <br />
            </div>
        );
    });

    return (
        <div>
            <br />
            search : <input type="text" onKeyUp={handle_search}/>
            {/* search : <input id="search_box" type="text" 
            // onKeyUp={}
            /> */}
            <br />
            <br />
            {Members_display}
        </div>
    );
}
