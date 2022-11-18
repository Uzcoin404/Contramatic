import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Box, TextField } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import {
    doc,
    updateDoc,
    getDocs,
    query,
    collection,
    where,
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "../../../components/firebase";

export default function EditSocial() {
    const location = useLocation();
    const history = useNavigate();
    const [social, setSocial] = useState(location.state);
    const [icon, setIcon] = useState(social.icon);
    const [socialLink, setSocialLink] = useState(social.link);
    const [loading, setLoading] = useState({ icon: false, save: false });

    useEffect(() => {
        async function getData() {
            const q = query(
                collection(db, "social-media"),
                where("id", "==", social.id)
            );

            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                social["doc_id"] = doc.id;
            });
        }
        getData();
    }, []);

    function uploadIcon(file) {
        setLoading({ ...loading, icon: true });
        const storageRef = ref(storage, `social-media/${social.title}`);

        uploadBytes(storageRef, file).then((snapshot) => {
            const url = getDownloadURL(storageRef).then((res) => {
                setIcon(res);
                setLoading({ ...loading, icon: false });
            });
        });
    }

    async function updateIcon() {
        setLoading({ ...loading, save: true });
        const newData = doc(db, "social-media", social.doc_id);

        await updateDoc(newData, {
            icon: icon,
            link: socialLink,
        });
        setLoading({ ...loading, save: false });
        history(-1);
    }
    return (
        <Box sx={{ ml: 2, display: "flex", flexDirection: "column" }}>
            <Box sx={{ pt: 2 }}>
                <img src={icon} alt="" style={{ width: 50, height: 50 }} />
            </Box>

            <LoadingButton
                variant="contained"
                component="label"
                loading={loading.icon}
                sx={{ width: "max-content", my: 2 }}
            >
                Upload icon
                <input
                    hidden
                    accept="image/*"
                    multiple
                    type="file"
                    onChange={(e) => uploadIcon(e.target.files[0])}
                />
            </LoadingButton>
            <TextField
                label="Link"
                variant="outlined"
                sx={{ maxWidth: 500, width: "100%", mt: 2 }}
                value={socialLink}
                onChange={(e) => setSocialLink(e.target.value)}
            />
            <LoadingButton
                variant="contained"
                loading={loading.save}
                sx={{ mt: 2, width: "max-content" }}
                onClick={updateIcon}
            >
                Save
            </LoadingButton>
        </Box>
    );
}
