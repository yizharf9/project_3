import { React, useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

export default function Members() {
    return (
        <div>
            <h3>Members</h3>
            <input type="button" value="all-members" />
            <input type="button" value="add member" />
            <br />
            <Outlet/>
        </div>
    );
}
