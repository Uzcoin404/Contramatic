import React, { useContext } from "react";
import { Box, Grid, Typography, Button, Container, Card } from "@mui/material";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { DataContext } from "../../context/dataContext";
import { title, text } from "../styles";

import "./priceList.scss";

export default function PriceList() {
    const { data } = useContext(DataContext);

    return (
        <Box className="pricelist" id="pricelist">
            <Container>
                <Typography
                    variant="h2"
                    className="section__title"
                    align="center"
                    style={title}
                    sx={{ marginBottom: "4px !important" }}
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
                    sx={{ mb: 5 }}
                >
                    FROM €0,00 in 24 H.
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
                            focus: 'center',
                            mediaQuery: "min",
                            breakpoints: {
                                1000: { destroy: true },
                                900: { perPage: 2 },
                                0: { perPage: 1 },
                            },
                            pagination: false,
                        }}
                    >
                        <SplideSlide>
                            <Card className="price_card">
                                <h3 className="price_card_title">FREE</h3>
                                <div className="price_card_circle">
                                    <Typography className="price_card_price">
                                        Setup fee <br /> <span>€0,00</span>
                                    </Typography>
                                </div>
                                <div className="price_card_content">
                                    <p>Our Design</p>
                                    <p>5 color versions included</p>
                                </div>
                                <Button className="price_card_btn">
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
                                        Setup fee <br /> <span>€5,000</span>
                                    </Typography>
                                </div>
                                <div className="price_card_content">
                                    <p>Individual Design</p>
                                    <p style={{ marginTop: "10px" }}>
                                        Amount remains with us as a credit and
                                        will be credited from the monthly
                                        revenue share
                                    </p>
                                </div>
                                <Button className="price_card_btn">
                                    Select
                                </Button>
                                <Typography align="center" sx={{ mt: 2 }}>
                                    Revenue Share
                                </Typography>
                            </Card>
                        </SplideSlide>
                        <SplideSlide>
                            <Card className="price_card">
                                <h3 className="price_card_title">Premium</h3>
                                <div className="price_card_circle">
                                    <Typography className="price_card_price">
                                        Setup fee <br /> <span>€10,000</span>
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
                                <Button className="price_card_btn">
                                    Select
                                </Button>
                                <Typography align="center" sx={{ mt: 2 }}>
                                    Revenue Share
                                </Typography>
                            </Card>
                        </SplideSlide>
                    </Splide>
                </div>
            </Container>
        </Box>
    );
}
