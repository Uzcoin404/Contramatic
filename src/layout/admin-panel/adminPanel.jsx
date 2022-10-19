import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import Nav from "./nav/nav";
import Aside from "./aside/aside";
import Main from "./main/main";

export default function AdminPanel() {
    const { user } = useContext(UserContext);
    return (
        <div className="adminPanel">
			<Nav />
			<Aside />
            <Main />
        </div>
    );
}
