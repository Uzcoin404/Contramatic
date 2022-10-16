import React from "react";
import { Box, Typography, Chip } from "@mui/material";
import "./labels.scss";

export default function Labels({ data }) {
    return data.map((label, i) => (
        <Box className="label" key={i}>
            <Box className="label__content">
                <Typography
                    variant="h3"
                    fontSize={28}
                    fontWeight={400}
                    fontFamily="Alfa Slab One"
                    color="#131515"
                    sx={{ mb: 4 }}
                    className="label__title"
                >
                    {label.title}
                </Typography>
                <Box className="chips" sx={{ mb: 3 }}>
                    {label.hasOwnProperty("chips") &&
                        label.chips.map((chip, i) => (
                            <Chip label={chip} className="chip" key={i} />
                        ))}
                </Box>
                <Typography
                    variant="body2"
                    fontSize={16}
                    lineHeight="23px"
                    fontWeight={400}
                    fontFamily="Open Sans"
                    color="#131515"
                    className="label__text"
                >
                    {label.description}
                </Typography>
            </Box>
            <img src={label.img} alt="" className="label__img" />
        </Box>
    ));
}
