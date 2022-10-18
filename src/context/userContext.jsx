import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../components/firebase/firebase";

const UserContext = createContext();

function Provider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        onAuthStateChanged(auth, (newUser) => {
            setUser({});
            setLoading(false);
        });
    }, []);

    if (loading) {
        return ""
    }
    return (
        <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
    );
}
export { UserContext, Provider };
