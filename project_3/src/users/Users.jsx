import { React, useState, useEffect } from "react";
import * as utils from "../utils";
export default function Users() {
    const [Users, setUsers] = useState([]);

    useEffect(() => {
        const _Users = async () => {
            let data = await utils.get_users();
            console.log(data);
            setUsers(data);
        };
        _Users()
    }, []);

    let users_display = Users.map((user,i) => {
        return (
            <div key={i}>
                {user.Fullname}
                <br />
            </div>
        );
    });

    return (
        <div>
            <h3>Users</h3>
            <br />
            {users_display}
        </div>
    );
}
