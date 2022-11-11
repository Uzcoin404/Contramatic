import React from "react";
import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Posts from "../../../components/posts/posts";
import EditPost from "../../../components/posts/editPost";
import SocialMedia from "../social-media/socialMedia";
import AddSocial from "../social-media/addSocial";
import EditSocial from "../social-media/editSocial";
import Projects from "../projects/proejcts";
import EditProject from "../projects/editProject";
import Subscribers from "../subscribers/subscribers";

import "./main.scss";

export default function Main() {
    return (
        <Box className="main" sx={{ width: { xs: "100%", md: "calc(100% - 250px)" } }}>
            <Routes>
                <Route path="/:langId" element={<Posts />} />
                <Route path="/:langId/:postId" element={<EditPost />} />
                <Route path="/social-media" element={<SocialMedia />} />
                <Route path="/social-media/add" element={<AddSocial />} />
                <Route path="/social-media/:id" element={<EditSocial />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/:labelId" element={<EditProject />} />
                <Route path="/subscribers" element={<Subscribers />} />
            </Routes>
        </Box>
    );
}
