import React, { useContext } from "react";
import { Container, Box, Typography } from "@mui/material";
import { DataContext } from "../../context/dataContext";
import GetStartedBtn from "../get-started/getStartedBtn";

import hero1 from "../../assets/img/hero1.png";
import "./hero.scss";

export default function Hero() {
    const { data } = useContext(DataContext);
    return (
        <Box className="hero" id="home">
            <Container sx={{position: 'relative'}}>
                <Box className="hero__content">
                    <Typography
                        variant="subtitle1"
                        className="hero__subtitle"
                        fontSize={24}
                        fontWeight={800}
                        sx={{ mb: 1.25, opacity: 0.5 }}
                        dangerouslySetInnerHTML={{ __html: data.hero_subtitle }}
                    />
                    <Typography
                        variant="h1"
                        fontSize={51}
                        fontWeight={400}
                        lineHeight="64px"
                        color="#131515"
                        className="hero__title"
                        sx={{
                            mb: 5,
                            width: 620,
                            textTransform: "capitalize",
                        }}
                        dangerouslySetInnerHTML={{ __html: data.hero_title }}
                    />
                    <GetStartedBtn withArrow={true} link={data?.get_started.link} />
                    <img src={hero1} alt="" className="hero__bubble1" />
                </Box>
            </Container>
        </Box>
    );
}
