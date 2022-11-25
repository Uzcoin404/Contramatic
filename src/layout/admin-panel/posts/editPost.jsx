import React, { useState, useRef, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { doc, updateDoc, getDoc } from "firebase/firestore";
import { db } from "../../../components/firebase";
import {
    Box,
    Button,
    Backdrop,
    CircularProgress,
    TextField,
} from "@mui/material";
import { Editor } from "@tinymce/tinymce-react";

export default function EditPost() {
    const { langId, postId } = useParams();
    const location = useLocation();
    const history = useNavigate();
    const [post, setPost] = useState(location.state);
    const [link, setLink] = useState(post?.link);
    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        if (location.state == null) {
            async function getData() {
                const docRef = doc(db, "data", langId);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setPost(docSnap.data()[postId - 1]);
                }
            }
            getData();
        }
    }, []);

    const editorRef = useRef();
    const log = () => {
        setOpen(!open);
        if (editorRef.current) {
            updatePost(editorRef.current.getContent());
        }
    };
    async function updatePost(title) {
        const newData = doc(db, "data", langId);
        let id = post.id - 1;

        post["title"] = title;
        if (post.link) {
            post["link"] = link;
        }
        await updateDoc(newData, {
            [id]: post,
        });
        history('/admin/' + langId);
    }
    return (
        <Box className="editPost" sx={{ pt: 3 }}>
            {!post?.link ? null : (
                <TextField
                    label="Link"
                    variant="outlined"
                    sx={{ maxWidth: 500, width: "100%", mt: 2 }}
                    value={link ? link : post.link}
                    onChange={(e) => setLink(e.target.value)}
                />
            )}
            <Editor
                apiKey="9cc2j8k45ibwnkmf5gnm7uv7avtotf23nljojb3xje5u5nny"
                onInit={(evt, editor) => (editorRef.current = editor)}
                initialValue={post?.title}
                init={{
                    height: 500,
                    width: "100%",
                    menubar: false,
                    plugins: [
                        "advlist",
                        "autolink",
                        "lists",
                        "link",
                        "image",
                        "charmap",
                        "preview",
                        "anchor",
                        "searchreplace",
                        "visualblocks",
                        "code",
                        "fullscreen",
                        "insertdatetime",
                        "media",
                        "table",
                        "code",
                        "help",
                        "wordcount",
                    ],
                    toolbar:
                        "undo redo | blocks | " +
                        "bold italic forecolor | alignleft aligncenter " +
                        "alignright alignjustify | bullist numlist outdent indent | " +
                        "removeformat | help",
                    content_style:
                        "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                }}
            />
            <Button variant="contained" sx={{ mt: 3 }} onClick={log}>
                Save
            </Button>
            <Backdrop
                sx={{
                    color: "#fff",
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                }}
                open={open}
                onClick={handleClose}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </Box>
    );
}
