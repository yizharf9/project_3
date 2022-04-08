import {React,useState} from "react";
import Users from "../users/Users";
import { Router, Route, Routes, useSearchParams } from "react-router-dom";
import NewUser from "../users/NewUser";

export default function Main() {
    const [User, setUser] = useState({})

    const Login = ({Username,Password}) => { 
        
    }

    return (
        <div>
            <div className="top-row">
                <input type="button" value="users" />
                <input type="button" value="main page" />
                <input type="button" value="  " />
            </div>
            <h2>Main</h2>
            <br />
            <Routes>
                <Route path="users" element={<Users />}></Route>
                <Route path="new_user" element={<NewUser />}></Route>
            </Routes>
        </div>
    );
}
