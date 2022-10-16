import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { title, subtitle, text } from "../styles";
import sectionImg from "../../assets/img/software.png";
import softwareBubble1 from "../../assets/img/software-bubble1.png";
import "./software.scss";

export default function Software() {
    return (
        <Box component="section" className="software" id="software">
            <Container>
                <Box className="section__content">
                    <Typography
                        variant="subtitle1"
                        className="section__subtitle"
                        style={subtitle}
                    >
                        SOFTWARE
                    </Typography>
                    <Typography variant="h2" className="section__title" style={title} sx={{ maxWidth: 420 }}>
                        Ein Sportwetten Produkt für jedermann
                    </Typography>
                    <Typography
                        variant="body1"
                        className="section__text"
                        style={text}
                        sx={{maxWidth: 535}}
                    >
                        Das Produkt beinhaltet alles für einen erfolgreichen und
                        profitablen Betrieb! Über 60 Casino Provider haben wir
                        bereits integriert. Auf wünsch können auch weitere
                        provider integriert werden. Das Interface ist sehr
                        modern, umfangreich und gleichzeitig einfach zu
                        bedienen. Das Backoffice hat sogar eine mobile Version.
                        Das komplette Backoffice kann also von einem Smartphone
                        bedient werden. Manager, Agent, Shops und Affiliates
                        können ganz einfach vom Backoffice angelegt werden.
                    </Typography>
                </Box>
                <Box className="section__item" sx={{ mr: 2.5 }}>
                    <img src={sectionImg} alt="" className="section__img" />
                </Box>
            </Container>
            <img src={softwareBubble1} alt="" className="software__bubble1" />
        </Box>
    );
}
