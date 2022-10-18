import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./layout/main";
import AdminPanel from "./layout/admin-panel/adminPanel";
import "./App.scss";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/admin" element={<AdminPanel />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
