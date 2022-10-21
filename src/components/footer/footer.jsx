import React, { useEffect, useState, useContext } from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { DataContext } from "../../context/dataContext";
import parse from "html-react-parser";

import emailIcon from "../../assets/img/icons/email.svg";
import phoneIcon from "../../assets/img/icons/phone.svg";
import "./footer.scss";

export default function Footer() {
    const { data } = useContext(DataContext);
    const [socialMedia, setSocialMedia] = useState(null);
    useEffect(() => {
        async function getData() {
            const querySnapshot = await getDocs(collection(db, "social-media"));
            const data = [];
            querySnapshot.forEach((doc) => {
                data.push(doc.data());
            });
            setSocialMedia(data);
        }
        getData();
    }, []);
    return (
        <Box className="footer" component="footer" sx={{ mt: 4.5, pb: 7.5 }}>
            <Container>
                <Typography
                    variant="h4"
                    fontSize={32}
                    fontWeight={400}
                    fontFamily="Arvo"
                    color="#fff"
                    sx={{
                        "& span": {
                            color: "#131515 !important",
                            fontFamily: "Arvo",
                        },
                    }}
                    dangerouslySetInnerHTML={{ __html: data.logo_text }}
                />
                <Box
                    className="footer__content"
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        mt: 2,
                        mb: 6,
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            flexWrap: "wrap",
                            textAlign: "center",
                            justifyContent: "center",
                            gap: "8px 32px",
                        }}
                    >
                        <a
                            href={"mailto:" + parse(data.email).props.children}
                            style={{
                                display: "flex",
                                alignItems: "center",
                            }}
                        >
                            <img
                                src={emailIcon}
                                alt=""
                                style={{ width: 24, height: 23 }}
                            />
                            <Typography
                                variant="subtitle2"
                                fontWeight={700}
                                lineHeight="32px"
                                fontFamily="Open Sans"
                                color="#000"
                                sx={{
                                    ml: 1.2,
                                    fontSize: { xs: "16px", sm: "20px" },
                                }}
                                dangerouslySetInnerHTML={{ __html: data.email }}
                            />
                        </a>
                        <a
                            href={
                                "tel:" +
                                parse(data.phone_number).props.children.replace(
                                    /\s/g,
                                    ""
                                )
                            }
                            style={{ display: "flex", alignItems: "center" }}
                        >
                            <img
                                src={phoneIcon}
                                alt=""
                                style={{ width: 24, height: 23 }}
                            />
                            <Typography
                                variant="subtitle2"
                                fontSize={20}
                                fontWeight={700}
                                lineHeight="32px"
                                fontFamily="Open Sans"
                                color="#000"
                                sx={{
                                    ml: 1.2,
                                    fontSize: { xs: "16px", sm: "20px" },
                                }}
                                dangerouslySetInnerHTML={{
                                    __html: data.phone_number,
                                }}
                            />
                        </a>
                    </Box>
                    <Box
                        className="social__media"
                        sx={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: 3.5,
                            justifyContent: "center",
                        }}
                    >
                        {socialMedia?.map((item, i) => (
                            <a
                                href={item.link}
                                target="_blank"
                                title={item.title}
                                key={i}
                            >
                                <img src={item.icon} alt="" />
                            </a>
                        ))}
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                    className="footer__contact"
                >
                    <Box sx={{ display: "flex" }}>
                        <Typography
                            variant="body2"
                            fontSize={14}
                            fontFamily="Open Sans"
                            sx={{ mr: 4 }}
                        >
                            Impressum
                        </Typography>
                        <Typography
                            variant="body2"
                            fontSize={14}
                            fontFamily="Open Sans"
                            sx={{ mr: 4 }}
                        >
                            Datenschutz
                        </Typography>
                        <Typography
                            variant="body2"
                            fontSize={14}
                            fontFamily="Open Sans"
                        >
                            Cookie-Einstellungen
                        </Typography>
                    </Box>
                    <Box component="form">
                        <input
                            type="email"
                            className="footer__input"
                            placeholder="Your email"
                            required
                        />
                        <Button variant="contained" type="submit">
                            Subscribe
                        </Button>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}
