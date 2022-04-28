import { React, useState, useEffect } from "react";
import Member from "./Member"
const {
    Members: { get_Members },
} = require("../utils");

export default function MembersAll() {
    const [Members, setMembers] = useState([]);
    const [searched, setSearched] = useState([])
    const [search_val, setSearch_val] = useState("")

    useEffect(() => {
            get_Members().then((members) => { 
                console.log(members);
                setMembers(members);
                setSearched(members);
            })
    }, []);

    useEffect(() => {
        search()
    }, [search_val])

    const search = () => { 
        setSearched(Members.filter((member) => { 
            return member.Fullname.startsWith(search_val)
        }));
    }
    

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
            search : <input type="text" onKeyUp={(e)=>setSearch_val(e.target.value)}/>
            <br />
            <br />
            {Members_display}
        </div>
    );
}
