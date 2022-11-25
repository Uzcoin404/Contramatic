import React from "react";
import { Routes, Route, NavLink as Link } from "react-router-dom";
import { Box, ButtonBase, Grid, Typography } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import TwitterIcon from "@mui/icons-material/Twitter";
import ApartmentIcon from "@mui/icons-material/Apartment";
import GroupIcon from "@mui/icons-material/Group";
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
    function MainContent() {
        return (
            <Grid container spacing={2} sx={{ pt: 3, px: 2 }}>
                <Grid item xs={4}>
                    <ButtonBase
                        LinkComponent={Link}
                        to="/admin/en"
                        className="main_link_card"
                    >
                        <LanguageIcon className="main_link_card_icon" />
                        <Typography
                            variant="h5"
                            color="#fff"
                            sx={{
                                mt: 2,
                            }}
                        >
                            Posts
                        </Typography>
                    </ButtonBase>
                </Grid>
                <Grid item xs={4}>
                    <ButtonBase
                        LinkComponent={Link}
                        to="/admin/social-media"
                        className="main_link_card"
                    >
                        <TwitterIcon className="main_link_card_icon" />
                        <Typography
                            variant="h5"
                            color="#fff"
                            sx={{
                                mt: 2,
                            }}
                        >
                            Social media
                        </Typography>
                    </ButtonBase>
                </Grid>
                <Grid item xs={4}>
                    <ButtonBase
                        LinkComponent={Link}
                        to="/admin/projects"
                        className="main_link_card"
                    >
                        <ApartmentIcon className="main_link_card_icon" />
                        <Typography
                            variant="h5"
                            color="#fff"
                            sx={{
                                mt: 2,
                            }}
                        >
                            Projects
                        </Typography>
                    </ButtonBase>
                </Grid>
                <Grid item xs={4}>
                    <ButtonBase
                        LinkComponent={Link}
                        to="/admin/subscribers"
                        className="main_link_card"
                    >
                        <GroupIcon className="main_link_card_icon" />
                        <Typography
                            variant="h5"
                            color="#fff"
                            sx={{
                                mt: 2,
                            }}
                        >
                            Subscribers
                        </Typography>
                    </ButtonBase>
                </Grid>
            </Grid>
        );
    }
    return (
        <Box
            className="main"
            sx={{ width: { xs: "100%", md: "calc(100% - 250px)" } }}
        >
            <Routes>
                <Route path="/" element={<MainContent />} />
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
