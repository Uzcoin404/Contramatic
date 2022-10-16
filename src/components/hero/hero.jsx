import React from "react";
import { Container, Box, Typography } from "@mui/material";
import GetStartedBtn from "../get-started/getStartedBtn";
// import hero1 from "../../assets/img/hero1.png";
// import heroBubble1 from "../../assets/img/hero-bubble1.png";
// import heroBubble2 from "../../assets/img/hero-bubble2.png";
// import heroAnimate from "../../assets/img/hero-animate.png";

import "./hero.scss";

export default function Hero() {
    return (
        <Box className="hero">
            <Container sx={{ position: "relative" }}>
                <Box className="hero__content">
                    <Typography
                        variant="subtitle1"
                        className="hero__subtitle"
                        fontSize={24}
                        fontWeight={800}
                        fontFamily="Open Sans"
                        sx={{ mb: 1.25, opacity: 0.5 }}
                    >
                        Wir machen das, was wir am besten können:
                    </Typography>
                    <Typography
                        variant="h1"
                        fontSize={51}
                        fontWeight={400}
                        lineHeight="64px"
                        color="#131515"
                        fontFamily="Alfa Slab One"
                        className="hero__title"
                        sx={{
                            mb: 5,
                            width: 620,
                            textTransform: "capitalize",
                        }}
                    >
                        ENTWICKLUNG VON SPORTWETTEN SOFTWARE
                    </Typography>
                    <GetStartedBtn withArrow={true} />
                    {/* <img src={hero1} alt="" className="hero__img1" /> */}
                </Box>
                {/* <img src={heroBubble1} alt="" className="hero__bubbles heroBubble1"/>
                <img src={heroBubble2} alt="" className="hero__bubbles heroBubble2"/>
                <img src={heroAnimate} alt="" className="hero__bubbles heroBubble3"/> */}
            </Container>
        </Box>
    );
}
