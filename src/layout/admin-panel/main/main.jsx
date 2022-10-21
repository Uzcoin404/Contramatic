import React from "react";
import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Posts from "../../../components/posts/posts";
import EditPost from "../../../components/edit-post/editPost";
import SocialMedia from "../social-media/socialMedia";
import EditSocial from "../social-media/editSocial";
import Projects from "../projects/proejcts";
import EditProject from "../projects/editProject";

import "./main.scss";

export default function Main() {
    return (
        <Box className="main">
            <Routes>
                <Route path="/:langId" element={<Posts />} />
                <Route path="/:langId/:postId" element={<EditPost />} />
                <Route path="/social-media" element={<SocialMedia />} />
                <Route path="/social-media/:id" element={<EditSocial />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/:labelId" element={<EditProject />} />
            </Routes>
        </Box>
    );
}
