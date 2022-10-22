import React, {useContext} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./layout/main";
import AdminPanel from "./layout/admin-panel/adminPanel";
import { UserContext } from "./context/userContext";
import Login from "./components/login/login"
import "./App.scss";

function App() {
    const {user} = useContext(UserContext);
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/admin/*" element={user ? <AdminPanel /> : <Login />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;