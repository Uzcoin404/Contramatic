import React, { useContext, useState, useEffect } from "react";
import { Box, Typography, IconButton, Container } from "@mui/material";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../components/firebase";
import { DataContext } from "../../context/dataContext";
import { title } from "../styles";
import "@splidejs/react-splide/css";

import rightArrow from "../../assets/img/icons/right-arrow.svg";
import "./projects.scss";

export default function Projects() {
    const { data } = useContext(DataContext);
    const [projects, setProjects] = useState(null);

    useEffect(() => {
        async function getData() {
            const querySnapshot = await getDocs(collection(db, "projects"));
            const data = [];
            querySnapshot.forEach((doc) => {
                data.push(doc.data());
            });
            setProjects(data);
        }
        getData();
    }, []);

    return (
        <Box className="projects" id="projects">
            <Container>
                <Typography
                    variant="h2"
                    className="section__title"
                    style={title}
                    sx={{ mb: "50px !important", textAlign: "center" }}
                    dangerouslySetInnerHTML={{ __html: data.projects_title }}
                />
                <Box className="projects__content">
                    <Splide
                        aria-label="My Favorite Images"
                        options={{
                            type: "loop",
                            autoplay: true,
                            width: "100%",
                            gap: "1rem",
                            perMove: 1,
                            perPage: 5,
                            autoWidth: true,
                            lazyLoad: 'nearby',
                            // breakpoints: {
                            //     500: { perPage: 1 },
                            //     700: { perPage: 2 },
                            //     950: { perPage: 3 },
                            //     1200: { perPage: 4 },
                            // },
                            pagination: false,
                        }}
                    >
                        {projects?.map((box, i) => (
                            <SplideSlide key={i}>
                                <Box className="projects__box">
                                    <img src={box.icon} alt="" className="projects__logo" />
                                    <Typography
                                        variant="body2"
                                        fontSize={15}
                                        fontWeight={700}
                                        lineHeight="25px"
                                        color="#fff"
                                        textAlign="center"
                                        textTransform="capitalize"
                                        href={box.link}
                                    >
                                        {box.title}
                                    </Typography>
                                    <a href={box.link}>
                                        <IconButton className="projects__btn">
                                            <img src={rightArrow} alt="" />
                                        </IconButton>
                                    </a>
                                </Box>
                            </SplideSlide>
                        ))}
                    </Splide>
                </Box>
            </Container>
        </Box>
    );
}
