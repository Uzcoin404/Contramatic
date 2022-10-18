import { createContext, useEffect, useState } from "react";

const LangContext = createContext()

function Provider({children}) {

    const [lang, setLang] = useState(window.localStorage.getItem("lang") || "en");

    useEffect(() => {
        window.localStorage.setItem("lang", lang);
    }, [lang])

    return (
        <LangContext.Provider value={{lang, setLang}}>{children}</LangContext.Provider>
    )
}
export { LangContext, Provider}