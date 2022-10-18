import React from "react";
import Login from "../../components/login/login";
import Aside from "./aside/aside";
import Nav from "./nav/nav";
import Main from "./main/main";

export default function AdminPanel() {
    return (
        <div style={{ display: 'flex' }}>
            {/* <Login /> */}
            <Nav />
            <Aside />
            <Main />
        </div>
    );
}
