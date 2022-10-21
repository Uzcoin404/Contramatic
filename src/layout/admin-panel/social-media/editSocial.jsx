import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Box, Button, TextField } from "@mui/material";
import {
    doc,
    updateDoc,
    getDocs,
    query,
    collection,
    where,
} from "firebase/firestore";
import { db } from "../../../components/firebase";

export default function EditSocial() {
    const location = useLocation();
    const history = useNavigate();
    const [social, setSocial] = useState(location.state);
    const [iconUrl, setIcon] = useState(social.icon);
    const [socialLink, setSocialLink] = useState(social.link);
    console.log(social);

    useEffect(() => {
        async function getData() {
            const q = query(
                collection(db, "social-media"),
                where("id", "==", social.id)
            );

            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                social['doc_id'] = doc.id;
            });
        }
        getData();
    }, []);

    async function updateIcon() {
        console.log(social.doc_id);
        const newData = doc(db, "social-media", social.doc_id);

        await updateDoc(newData, {
            icon: iconUrl,
            link: socialLink
        });
        history(-1);
    }
    return (
        <Box sx={{ ml: 2, display: "flex", flexDirection: "column" }}>
            <Box sx={{ pt: 2 }}>
                <img src={social.icon} alt="" />
            </Box>
            <TextField
                label="Enter a icon url"
                variant="outlined"
                sx={{ maxWidth: 400, width: '100%', mt: 2 }}
                value={iconUrl}
                onChange={(e) => setIcon(e.target.value)}
            />
            <TextField
                label="Link"
                variant="outlined"
                sx={{ maxWidth: 400, width: '100%', mt: 2 }}
                value={socialLink}
                onChange={(e) => setSocialLink(e.target.value)}
            />
            <Button
                variant="contained"
                sx={{ mt: 2, width: "max-content" }}
                onClick={updateIcon}
            >
                Save
            </Button>
        </Box>
    );
}
