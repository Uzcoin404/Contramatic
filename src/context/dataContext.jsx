import { createContext, useContext, useEffect, useState } from "react";
import { db } from "../components/firebase";
import { doc, getDoc } from "firebase/firestore";
import { LangContext } from "./langContext";

const DataContext = createContext();

function Provider({ children }) {
    const [data, setData] = useState(null);
    const { lang } = useContext(LangContext);

    useEffect(() => {
        async function getData() {
            const docRef = doc(db, "data", lang);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                setData(docSnap.data());
            } else {
                console.log("No such document!");
            }
        }
        getData();
    }, [lang]);

    console.log(data);
    return (
        <DataContext.Provider value={{ data }}>{children}</DataContext.Provider>
    );
}
export { DataContext, Provider };
