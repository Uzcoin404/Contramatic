import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";

import emailIcon from "../../assets/img/icons/email.svg";
import phoneIcon from "../../assets/img/icons/phone.svg";
import facebook from "../../assets/img/icons/social-media/facebook.svg";
import twitter from "../../assets/img/icons/social-media/twitter.svg";
import linkedin from "../../assets/img/icons/social-media/linkedin.svg";
import youtube from "../../assets/img/icons/social-media/youtube.svg";
import github from "../../assets/img/icons/social-media/github.svg";
import email from "../../assets/img/icons/social-media/email.svg";
import "./footer.scss";

export default function Footer() {
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
                            color: "#131515",
                            fontFamily: "Arvo",
                        },
                    }}
                >
                    contra<span>matic</span>
                </Typography>
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
                            gap: '8px 32px',
                        }}
                    >
                        <a
                            href="mailto:abc@example.com"
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
                            >
                                info@contramatic.com
                            </Typography>
                        </a>
                        <a
                            href="tel:+4623445667889"
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
                            >
                                +46 234 456 678 89
                            </Typography>
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
                        <a href="#" target="_blank">
                            <img src={facebook} alt="" />
                        </a>
                        <a href="#" target="_blank">
                            <img src={twitter} alt="" />
                        </a>
                        <a href="#" target="_blank">
                            <img src={linkedin} alt="" />
                        </a>
                        <a href="#" target="_blank">
                            <img src={youtube} alt="" />
                        </a>
                        <a href="#" target="_blank">
                            <img src={github} alt="" />
                        </a>
                        <a href="#" target="_blank">
                            <img src={email} alt="" />
                        </a>
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
