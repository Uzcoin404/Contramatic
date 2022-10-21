import React, { useState, useRef } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { doc, updateDoc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { Box, Button } from "@mui/material";
import { Editor } from "@tinymce/tinymce-react";

export default function EditPost() {
    const { langId, postId } = useParams();
    const location = useLocation();
    const history = useNavigate();
    const [post, setPost] = useState(location.state);

    const editorRef = useRef(null);
    const log = () => {
        if (editorRef.current) {
            updatePost(editorRef.current.getContent());
        }
    };
    async function updatePost(title) {
        const newData = doc(db, "data", langId);
        const newPost = doc(db, "posts", langId);
        let id = post.id - 1;

        post["title"] = title;
        await updateDoc(newData, {
            [id]: post,
        });
        await updateDoc(newPost, {
            [post.keyword]: title,
        });
        history(-1);
    }
    async function getData() {
        const newPost = doc(db, "data");
        const docSnap = await getDoc(newPost);

        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }
    getData();
    return (
        <Box className="editPost" sx={{ pt: 3 }}>
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
        </Box>
    );
}
