import React, { useContext } from "react";
import { Box, Grid, Typography, Button, Container, Card } from "@mui/material";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { DataContext } from "../../context/dataContext";
import { title, text } from "../styles";

import "./priceList.scss";

export default function PriceList() {
    const { data } = useContext(DataContext);

    // console.log(document.querySelector(".splide__list").style.transform);
    return (
        <Box className="pricelist" id="pricelist">
            <Container sx={{ p: { xs: 0 } }}>
                <Typography
                    variant="h2"
                    className="section__title"
                    align="center"
                    style={title}
                    sx={{ marginBottom: "4px !important", px: 2 }}
                    // dangerouslySetInnerHTML={{
                    //     __html: data.pricelist_title,
                    // }}
                >
                    Price List for White Label
                </Typography>

                <Typography
                    variant="subtitle1"
                    className="section__subtitle2"
                    textTransform="uppercase"
                    fontSize={18}
                    fontWeight={400}
                    align="center"
                    lineHeight="28px"
                    color="#131515"
                    // dangerouslySetInnerHTML={{
                    //     __html: data.pricelist_subtitle,
                    // }}
                >
                    FROM €0,00 IN 24 H.
                </Typography>
                <div className="pricelist__content">
                    <Splide
                        aria-label="My Favorite Images"
                        options={{
                            autoWidth: true,
                            // gap: "30px",
                            perMove: 1,
                            perPage: 3,
                            start: 1,
                            focus: "center",
                            updateOnMove: true,
                            mediaQuery: "min",
                            breakpoints: {
                                950: { destroy: true },
                                900: { perPage: 2 },
                                0: { perPage: 1, rewindSpeed: 1000 },
                            },
                            pagination: false,
                        }}
                    >
                        <SplideSlide>
                            <Card className="price_card" sx={{ ml: { xs: 2 } }}>
                                <h3 className="price_card_title">Basic</h3>
                                <div className="price_card_circle">
                                    <Typography className="price_card_price">
                                        <p style={{ marginBottom: 8 }}>
                                            Setup fee
                                        </p>
                                        <span className="price">€0,00</span>
                                    </Typography>
                                </div>
                                <div className="price_card_content">
                                    <p>Our Design</p>
                                    <p>5 color versions included</p>
                                </div>
                                <Button
                                    className="price_card_btn"
                                    href="mailto:info@contramatic.com?subject=0 EUR"
                                >
                                    Select
                                </Button>
                                <Typography align="center" sx={{ mt: 2 }}>
                                    Revenue Share
                                </Typography>
                            </Card>
                        </SplideSlide>
                        <SplideSlide>
                            <Card className="price_card">
                                <h3 className="price_card_title">STANDARD</h3>
                                <div className="price_card_circle">
                                    <Typography className="price_card_price">
                                        <p>Setup fee</p>
                                        <span className="price">
                                            €5,000
                                            <sup className="asterisk">*</sup>
                                        </span>
                                    </Typography>
                                </div>
                                <div
                                    className="price_card_content"
                                    style={{ flexGrow: 0 }}
                                >
                                    <p>Individual Design</p>
                                    <p style={{ marginTop: "10px" }}>
                                        Inside Our Frame sections, we create
                                        Your own design customized by your needs
                                    </p>
                                </div>
                                <Button
                                    className="price_card_btn"
                                    href="mailto:info@contramatic.com?subject=5.000 EUR"
                                >
                                    Select
                                </Button>
                                <Typography
                                    align="center"
                                    sx={{ mt: 2, color: "#131515" }}
                                >
                                    Revenue Share
                                </Typography>
                            </Card>
                        </SplideSlide>
                        <SplideSlide>
                            <Card className="price_card" sx={{ mr: { xs: 2 } }}>
                                <h3 className="price_card_title">Premium</h3>
                                <div className="price_card_circle">
                                    <Typography className="price_card_price">
                                        <p>Setup fee</p>
                                        <span className="price">
                                            €10,000
                                            <sup className="asterisk">*</sup>
                                        </span>
                                    </Typography>
                                </div>
                                <div className="price_card_content">
                                    <p>Complete Solution</p>
                                    <p style={{ marginTop: "10px" }}>
                                        Payment Options
                                    </p>
                                    <p>Provider Integration,</p>
                                    <p>Licence Integration</p>
                                </div>
                                <Button
                                    className="price_card_btn"
                                    href="mailto:info@contramatic.com?subject=10.000 EUR"
                                >
                                    Select
                                </Button>
                                <Typography
                                    align="center"
                                    sx={{ mt: 2, color: "#131515" }}
                                >
                                    Revenue Share
                                </Typography>
                            </Card>
                        </SplideSlide>
                    </Splide>
                    <Typography
                        variant="body1"
                        align="center"
                        color="#fff"
                        fontFamily="Open Sans"
                        // dangerouslySetInnerHTML={{
                        //     __html: data.pricelist_caution_text,
                        // }}
                    >
                        * Amount remains as a credit and will be credited from
                        the monthly revenue share
                    </Typography>
                </div>
            </Container>
        </Box>
    );
}
