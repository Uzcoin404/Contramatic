import React, { useContext } from "react";
import { Box, Typography } from "@mui/material";
import { DataContext } from "../../context/dataContext";
import { title, subtitle, text } from "../styles";
import sectionImg from "../../assets/img/aboutus.png";
import aboutusBubble1 from "../../assets/img/aboutus-bubble1.png";
import aboutusBubble2 from "../../assets/img/aboutus-bubble2.png";
import "./aboutus.scss";

export default function AboutUs() {
    const { data } = useContext(DataContext);
    return (
        <Box component="section" className="aboutus" id="aboutus">
            <Box className="section__item" sx={{ mr: 2.5 }}>
                <img src={sectionImg} alt="" className="section__img" />
            </Box>
            <Box className="section__content">
                <Typography
                    variant="subtitle1"
                    className="section__subtitle"
                    style={subtitle}
                >
                    {data?.nav_link1}
                </Typography>
                <Typography
                    variant="h2"
                    style={title}
                    className="section__title"
                >
                    {data?.aboutus_title}
                </Typography>
                <Typography
                    variant="body1"
                    className="section__text"
                    style={text}
                    sx={{ maxWidth: 643 }}
                >
                    {data?.aboutus_text}
                </Typography>
                <img src={aboutusBubble1} alt="" className="aboutus__bubble1" />
                <img src={aboutusBubble2} alt="" className="aboutus__bubble2" />
            </Box>
        </Box>
    );
}
