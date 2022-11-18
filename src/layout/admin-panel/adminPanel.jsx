import React, { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../components/firebase";
import Nav from "./nav/nav";
import Aside from "./aside/aside";
import Main from "./main/main";

export default function AdminPanel() {
    const [languages, setlanguages] = useState(null);
    useEffect(() => {
        async function getLanguages() {
            const docRef = doc(db, "languages", "HLxO6mAhdDMjduI800aL");
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                setlanguages(docSnap.data().langs);
            }
        }
        getLanguages();
    }, []);
    return (
        <div className="adminPanel">
            <Nav />
            <Aside languages={languages} />
            <Main languages={languages} />
        </div>
    );
}
