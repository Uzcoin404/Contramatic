import React from "react";
import ReactDOM from "react-dom/client";
import { Provider as LangProvider } from "./context/langContext";
import { Provider as DataProvider } from "./context/dataContext";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <LangProvider>
            <DataProvider>
                <App />
            </DataProvider>
        </LangProvider>
    </React.StrictMode>
);
