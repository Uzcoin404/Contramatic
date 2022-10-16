import React from "react";
import { Box, Typography } from "@mui/material";
import GetStartedBtn from "../../components/get-started/getStartedBtn";
import { title, subtitle, text } from "../styles";

import sectionImg from "../../assets/img/white-label.png";
import whiteLabelBubble1 from "../../assets/img/white-label-bubble1.png";
import whiteLabelBubble2 from "../../assets/img/white-label-bubble2.png";
import "./whiteLabel.scss";

export default function WhiteLabel() {
    return (
        <Box component="section" className="white__label" id="white-label">
            <Box className="section__item" sx={{ mr: 2.5 }}>
                <img src={sectionImg} alt="" className="section__img" />
            </Box>
            <Box className="section__content">
                <Typography
                    variant="subtitle1"
                    className="section__subtitle"
                    style={subtitle}
                >
                    advatnages
                </Typography>
                <Typography variant="h2" className="section__title" style={title} sx={{ mb: '0 !important' }}>
                    WHITE LABEL
                </Typography>
                <Typography
                    variant="subtitle1"
                    className="section__subtitle2"
                    textTransform="uppercase"
                    fontSize={18}
                    fontWeight={400}
                    lineHeight="28px"
                    fontFamily="Alfa Slab One"
                    color="#131515"
                    sx={{ mb: 2.5 }}
                >
                    ab €0,00 in 24 STD.
                </Typography>
                <Typography
                    variant="body1"
                    className="section__text"
                    style={text}
                    sx={{ mt: 0.5, mb: 4, maxWidth: 538 }}
                >
                    Wir bieten Ihnen ein komplett einsatzbereites WHITE LABEL
                    an. Bereits ab 0,00€ können Sie innerhalb von 24 Stunden Ihr
                    White Label mit Ihrer eigenen Domain besitzen. Die
                    Abwicklung ist sehr unkompliziert. Ohne Ausweis, ohne Firmen
                    Unterlagen.
                </Typography>
                <GetStartedBtn withArrow={true}/>
                <img
                    src={whiteLabelBubble1}
                    alt=""
                    className="white__label__bubble1"
                />
                <img
                    src={whiteLabelBubble2}
                    alt=""
                    className="white__label__bubble2"
                />
            </Box>
        </Box>
    );
}
