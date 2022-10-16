import React from "react";
import { Box, Typography, IconButton, Container } from "@mui/material";
import { title } from "../styles";

import rightArrow from "../../assets/img/icons/right-arrow.svg";
import projects1 from "../../assets/img/golden90.png";
import projects2 from "../../assets/img/contra90.png";
import projects3 from "../../assets/img/LuckyBet.NG.png";
import projects4 from "../../assets/img/canliyaris.svg";
import projects5 from "../../assets/img/bettendo.png";
import "./projects.scss";

export default function Projects() {
    const data = [
        { logo: projects1, title: "Golden90", link: "#" },
        { logo: projects2, title: "Contra90", link: "#" },
        { logo: projects3, title: "LuckyBet", link: "#" },
        { logo: projects4, title: "CANLIYARIS", link: "#" },
        { logo: projects5, title: "Bettendo", link: "#" },
    ];
    return (
        <Box className="projects" id="projects">
            <Container>
                <Typography
                    variant="h2"
                    className="section__title"
                    style={title}
                    sx={{ mb: '50px !important', textAlign: "center" }}
                >
                    Our Projects
                </Typography>
                <Box className="projects__content">
                    {data.map((box, i) => (
                        <Box className="projects__box" key={i}>
                            <img src={box.logo} alt="" />
                            <Typography
                                variant="body2"
                                fontSize={15}
                                fontWeight={700}
                                lineHeight="25px"
                                color="#fff"
                                textAlign="center"
                                textTransform="capitalize"
                            >
                                {box.title}
                            </Typography>
                            <IconButton
                                className="projects__btn"
                                href={box.link}
                            >
                                <img src={rightArrow} alt="" />
                            </IconButton>
                        </Box>
                    ))}
                </Box>
            </Container>
        </Box>
    );
}
