import React, {useContext} from "react";
import { Container, Box, Typography } from "@mui/material";
import { DataContext } from "../../context/dataContext";
import GetStartedBtn from "../get-started/getStartedBtn";

import "./hero.scss";

export default function Hero() {

    const {data} = useContext(DataContext);
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
                        {data?.hero_subtitle}
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
                        {data?.hero_title}
                    </Typography>
                    <GetStartedBtn withArrow={true} />
                </Box>
            </Container>
        </Box>
    );
}
