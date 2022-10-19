import React from "react";
import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Posts from "../../../components/posts/posts";
import EditPost from "../../../components/edit-post/editPost";

import "./main.scss";

export default function Main() {
    return (
        <Box className="main">
            <Routes>
                <Route path="/:langId" element={<Posts />} />
                <Route path="/:langId/:postId" element={<EditPost />} />
            </Routes>
        </Box>
    );
}
