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

export default function EditProject() {
    const location = useLocation();
    const history = useNavigate();
    const [social, setSocial] = useState(location.state);
    const [title, setTitle] = useState(social.title);
    const [icon, setIcon] = useState(social.icon);
    const [projectLink, setProjectLink] = useState(social.link);
    const [loading, setLoading] = useState({ icon: false, save: false });

    useEffect(() => {
        async function getData() {
            const q = query(
                collection(db, "projects"),
                where("id", "==", social.id)
            );

            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                social["doc_id"] = doc.id;
            });
        }
        getData();
    }, []);

    async function updateIcon() {
        setLoading({ ...loading, save: true });
        const newData = doc(db, "projects", social.doc_id);

        await updateDoc(newData, {
            title: title,
            icon: icon,
            link: projectLink,
        });
        setLoading({ ...loading, save: false });
        history(-1);
    }

    function uploadIcon(file) {
        setLoading({ ...loading, icon: true });
        const storageRef = ref(storage, `projects/${social.title}`);

        uploadBytes(storageRef, file).then((snapshot) => {
            const url = getDownloadURL(storageRef).then((res) => {
                setIcon(res);
                setLoading({ ...loading, icon: false });
            });
        });
    }
    return (
        <Box sx={{ ml: 2, display: "flex", flexDirection: "column" }}>
            <Box sx={{ pt: 2 }}>
                <img src={icon} alt="" style={{ width: 50, height: 50 }} />
            </Box>
            <TextField
                label="Title"
                variant="outlined"
                sx={{ maxWidth: 500, width: "100%", mt: 2 }}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
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
                value={projectLink}
                onChange={(e) => setProjectLink(e.target.value)}
            />
            <LoadingButton
                variant="contained"
                sx={{ mt: 2, width: "max-content" }}
                onClick={updateIcon}
                loading={loading.save}
            >
                Save
            </LoadingButton>
        </Box>
    );
}
