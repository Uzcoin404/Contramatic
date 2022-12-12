import { createContext, useContext, useEffect, useState } from "react";
import { db } from "../components/firebase";
import { doc, getDoc } from "firebase/firestore";
import { LangContext } from "./langContext";

const DataContext = createContext();

function Provider({ children }) {
    const [data, setData] = useState(null);
    const { lang } = useContext(LangContext);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getData() {
            const docRef = doc(db, "data", lang);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                let newPosts = {};
                Object.values(docSnap.data())?.map((item) => {
                    Object.assign(newPosts, { [item.keyword]: item.title });
                    if (item?.link) {
                        Object.assign(newPosts, {
                            [item.keyword]: { 'title': item.title, 'link': item.link },
                        });
                    }
                });
                setData(newPosts);
                setLoading(false);
            }
        }
        getData();
    }, [lang]);

    if (loading) {
        return "";
    }
    return (
        <DataContext.Provider value={{ data }}>{children}</DataContext.Provider>
    );
}
export { DataContext, Provider };
