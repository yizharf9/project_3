import { React, useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function Members() {
    const n = useNavigate();
    return (
        <div>
            <h2>Members</h2>
            <input
                type="button"
                value="all-members"
                onClick={() => {
                    n("all-members/");
                }}
            />
            <input
                type="button"
                value="add member"
                onClick={() => n("add-member")}
            />
            <br />
            <Outlet />
        </div>
    );
}
