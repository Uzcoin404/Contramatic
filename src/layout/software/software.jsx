import React, { useContext } from "react";
import { Box, Typography, Container } from "@mui/material";
import { DataContext } from "../../context/dataContext";
import { title, subtitle, text } from "../styles";
import sectionImg from "../../assets/img/software.png";
import softwareBubble1 from "../../assets/img/software-bubble1.png";
import "./software.scss";

export default function Software() {
    const { data } = useContext(DataContext);
    return (
        <Box component="section" className="software" id="software">
            <Container>
                <Box className="section__content">
                    <Typography
                        variant="subtitle1"
                        className="section__subtitle"
                        style={subtitle}
                        dangerouslySetInnerHTML={{ __html: data.nav_link3 }}
                    ></Typography>
                    <Typography
                        variant="h2"
                        className="section__title"
                        style={title}
                        sx={{ maxWidth: 420 }}
                        dangerouslySetInnerHTML={{
                            __html: data.software_title,
                        }}
                    ></Typography>
                    <Typography
                        variant="body1"
                        className="section__text"
                        style={text}
                        sx={{ maxWidth: 535 }}
                        dangerouslySetInnerHTML={{ __html: data.software_text }}
                    ></Typography>
                </Box>
                <Box className="section__item" sx={{ mr: { xs: 0, md: 2.5 } }}>
                    <img src={sectionImg} alt="" className="section__img" />
                </Box>
            </Container>
            <img src={softwareBubble1} alt="" className="software__bubble1" />
        </Box>
    );
}
