import React, { useContext, useState, useEffect } from "react";
import { Box, Typography, IconButton, Container } from "@mui/material";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../components/firebase";
import { DataContext } from "../../context/dataContext";
import { title } from "../styles";

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
                    {projects?.map((box, i) => (
                        <Box className="projects__box" key={i}>
                            <img src={box.icon} alt="" />
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
                            <IconButton
                                className="projects__btn"
                                href={box.link}
                            >
                                <img src={rightArrow} alt="" />
                            </IconButton>
                        </Box>
                    ))}
                </Box>
            </Container>
        </Box>
    );
}
