import React from "react";
import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Posts from "../posts/posts";
import EditPost from "../posts/editPost";
import SocialMedia from "../social-media/socialMedia";
import AddSocial from "../social-media/addSocial";
import EditSocial from "../social-media/editSocial";
import Projects from "../projects/proejcts";
import AddProject from "../projects/addProject";
import EditProject from "../projects/editProject";
import Subscribers from "../subscribers/subscribers";
import ChangePassword from "../change-password/changePassword";

import "./main.scss";

export default function Main() {
    return (
        <Box
            className="main"
            sx={{ width: { xs: "100%", md: "calc(100% - 250px)" } }}
        >
            <Routes>
                <Route path="/:langId" element={<Posts />} />
                <Route path="/:langId/:postId" element={<EditPost />} />
                <Route path="/social-media" element={<SocialMedia />} />
                <Route path="/social-media/add" element={<AddSocial />} />
                <Route path="/social-media/:id" element={<EditSocial />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/add" element={<AddProject />} />
                <Route path="/projects/:labelId" element={<EditProject />} />
                <Route path="/subscribers" element={<Subscribers />} />
                <Route path="/reset-password" element={<ChangePassword />} />
                {/* <Route path="*" element={<h1>404 <br /> Page not found</h1>} /> */}
            </Routes>
        </Box>
    );
}
