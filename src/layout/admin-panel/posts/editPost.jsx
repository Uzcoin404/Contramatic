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
        history("/admin/" + langId);
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
                    height: 600,
                    width: "100%",
                    plugins:
                        "print preview paste importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap quickbars emoticons",
                    imagetools_cors_hosts: ["picsum.photos"],
                    menubar: "file edit view insert format tools table help",
                    toolbar:
                        "undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl",
                    toolbar_sticky: true,
                    autosave_ask_before_unload: true,
                    autosave_interval: "30s",
                    autosave_prefix: "{path}{query}-{id}-",
                    autosave_restore_when_empty: false,
                    autosave_retention: "2m",
                    image_advtab: true,
                    link_list: [
                        { title: "My page 1", value: "https://www.tiny.cloud" },
                        {
                            title: "My page 2",
                            value: "http://www.moxiecode.com",
                        },
                    ],
                    image_list: [
                        { title: "My page 1", value: "https://www.tiny.cloud" },
                        {
                            title: "My page 2",
                            value: "http://www.moxiecode.com",
                        },
                    ],
                    image_class_list: [
                        { title: "None", value: "" },
                        { title: "Some class", value: "class-name" },
                    ],
                    importcss_append: true,
                    file_picker_callback: function (callback, value, meta) {
                        /* Provide file and text for the link dialog */
                        if (meta.filetype === "file") {
                            callback(
                                "https://www.google.com/logos/google.jpg",
                                { text: "My text" }
                            );
                        }

                        /* Provide image and alt text for the image dialog */
                        if (meta.filetype === "image") {
                            callback(
                                "https://www.google.com/logos/google.jpg",
                                { alt: "My alt text" }
                            );
                        }

                        /* Provide alternative source and posted for the media dialog */
                        if (meta.filetype === "media") {
                            callback("movie.mp4", {
                                source2: "alt.ogg",
                                poster: "https://www.google.com/logos/google.jpg",
                            });
                        }
                    },
                    image_caption: true,
                    quickbars_selection_toolbar:
                        "bold italic | quicklink h2 h3 blockquote quickimage quicktable",
                    noneditable_noneditable_class: "mceNonEditable",
                    toolbar_mode: "sliding",
                    contextmenu: "link image imagetools table",
                    content_style:
                        "body { font-family:ChunkFive Ex,sans-serif; font-size:14px }",
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
