import React from "react";
import { Box, Typography } from "@mui/material";
import { title, subtitle, text } from "../styles";
import sectionImg from "../../assets/img/aboutus.png";
import aboutusBubble1 from "../../assets/img/aboutus-bubble1.png";
import aboutusBubble2 from "../../assets/img/aboutus-bubble2.png";
import "./aboutus.scss";

export default function AboutUs() {
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
                    ABOUT US
                </Typography>
                <Typography variant="h2" style={title} className="section__title">
                    Who we Are
                </Typography>
                <Typography
                    variant="body1"
                    className="section__text"
                    style={text}
                    sx={{ maxWidth: 643 }}
                >
                    Im Jahre 2008 fingen wir mit 3 Personen an. Inzwischen
                    besteht unser Team aus mehr als 40 Personen aus
                    verschiedensten Nationen. Durch die ständige
                    Weiterentwicklung unserer Software sind wir immer auf dem
                    neuesten Stand. Die Erfahrungen, welche wir in vielen
                    verschiedenen Märkten sammeln, fließen ebenso in die
                    Weiterentwicklung ein. Wir haben nur Erfolg, wenn unsere
                    Partner auch erfolgreich sind. Deshalb ist es unser größtes
                    Anliegen, unserer Partner ein perfektes Sportwetten-Produkt
                    anzubieten. Unser Ziel ist nicht nur unsere Position als
                    erfolgreiches Unternehmen zu halten, sondern weltweit die
                    Nummer Eins zu werden.
                </Typography>
                <img src={aboutusBubble1} alt="" className="aboutus__bubble1" />
                <img src={aboutusBubble2} alt="" className="aboutus__bubble2" />
            </Box>
        </Box>
    );
}
