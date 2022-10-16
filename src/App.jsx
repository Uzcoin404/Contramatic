import Main from "./layout/main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
