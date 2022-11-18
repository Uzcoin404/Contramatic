import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Box, TextField, Alert, Typography } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { doc, setDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "../../../components/firebase";

export default function AddProject() {
    const location = useLocation();
    const history = useNavigate();
    const [title, setTitle] = useState("");
    const [icon, setIcon] = useState(null);
    const [link, setLink] = useState("");
    const [loading, setLoading] = useState({ submit: false, icon: false });
    const [error, setError] = useState(null);

    function uploadIcon(file) {
        setLoading({ ...loading, icon: true });
        const storageRef = ref(
            storage,
            "projects/" + (Math.random() + 1).toString(36).substring(5)
        );

        uploadBytes(storageRef, file).then(() => {
            const url = getDownloadURL(storageRef).then((res) => {
                setIcon(res);
                setLoading({ ...loading, icon: false });
            });
        });
    }

    async function setProject() {
        setLoading({...loading, submit: true});
        if (title != "" && link != "" && icon != null) {
            await setDoc(doc(db, "projects", title), {
                id: location.state + 1,
                title: title,
                icon: icon,
                link: link,
            });
            setError(null);
            history(-1);
        } else {
            setError("Please fill out all fields");
        }
        setLoading({...loading, submit: false});
    }

    return (
        <Box sx={{ ml: 2, display: "flex", flexDirection: "column" }}>
            {icon ? (
                <Box sx={{ pt: 2 }}>
                    <img src={icon} alt="" style={{ width: 50, height: 50 }} />
                </Box>
            ) : null}
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
                value={link}
                onChange={(e) => setLink(e.target.value)}
            />
            <LoadingButton
                variant="contained"
                loading={loading.submit}
                sx={{ mt: 2, width: "max-content" }}
                onClick={setProject}
            >
                Submit
            </LoadingButton>
            {error ? (
                <Alert
                    severity="error"
                    sx={{ mt: 2, width: "100%", maxWidth: 500 }}
                >
                    <Typography>{error}</Typography>
                </Alert>
            ) : null}
        </Box>
    );
}