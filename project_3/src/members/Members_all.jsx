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
    const [search_val, setSearch_val] = useState("")

    useEffect(() => {
        if (Name !== undefined) {
            setSearch_val(Name);
            window.scrollTo(0, 0);
        }
        get_Members().then((members) => { 
            console.log(members);
            setMembers(members);
            setSearched(members);
            // search()
        })
    }, [""]);
    
    
    useEffect(() => {
        console.log(search_val);
        search();
    }, [search_val])

    useEffect(() => {
        if (Name !== undefined) {
            setSearch_val(Name)
            window.scrollTo(0, 0);
        }
    }, [])

    const search = (e) => {
        setSearched(Members.filter((member) => { 
            return member.Fullname.startsWith(search_val)
        }));
    }

    const handle_search = (e) => {
        let value = e.target.value;
        if (value === "" || value === undefined) {
            setSearched(Members);
        } else {
            setSearched(
                Members.filter((movie) =>
                    movie.Title.toLowerCase().startsWith(value.toLowerCase())
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
            {/* search : <input type="text" onKeyUp={handle_search}/> */}
            search : <input id="search_box" type="text" onKeyUp={(e)=>{setSearch_val(e.target.value)}}/>
            <br />
            <br />
            {Members_display}
        </div>
    );
}
