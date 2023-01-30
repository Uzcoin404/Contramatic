import React, { useContext } from "react";
import { Box, Grid, Typography, Button, Container, Card } from "@mui/material";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { DataContext } from "../../context/dataContext";
import parse from "html-react-parser";
import { title, text } from "../styles";

import "./priceList.scss";

export default function PriceList() {
    const { data } = useContext(DataContext);

    console.log(data.pricelist_price1);
    return (
        <Box className="pricelist" id="pricelist">
            <Container sx={{ p: { xs: 0 } }}>
                <Typography
                    variant="h2"
                    className="section__title"
                    align="center"
                    style={title}
                    sx={{ marginBottom: "4px !important", px: 2 }}
                    dangerouslySetInnerHTML={{
                        __html: data.pricelist_title,
                    }}
                />

                <Typography
                    variant="subtitle1"
                    className="section__subtitle2"
                    textTransform="uppercase"
                    fontSize={18}
                    fontWeight={400}
                    align="center"
                    lineHeight="28px"
                    color="#131515"
                    dangerouslySetInnerHTML={{
                        __html: data.pricelist_subtitle,
                    }}
                />
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
                                <h3
                                    className="price_card_title"
                                    dangerouslySetInnerHTML={{
                                        __html: data.pricelist_card_title1,
                                    }}
                                />
                                <div className="price_card_circle">
                                    <Typography className="price_card_price">
                                        {data.pricelist_price1 ? parse(data.pricelist_price1) : ''}
                                    </Typography>
                                </div>
                                <div className="price_card_content">
                                    {data.pricelist_card_text1 ? parse(data.pricelist_card_text1) : ''}
                                </div>
                                <Button
                                    className="price_card_btn"
                                    href="mailto:info@contramatic.com?subject=0 EUR"
                                >
                                    {data.pricelist_card_select ? parse(data.pricelist_card_select) : ''}
                                </Button>
                                <Typography
                                    align="center"
                                    sx={{ mt: 2 }}
                                    dangerouslySetInnerHTML={{
                                        __html: data.pricelist_card_revenue,
                                    }}
                                />
                            </Card>
                        </SplideSlide>
                        <SplideSlide>
                            <Card className="price_card">
                                <h3
                                    className="price_card_title"
                                    dangerouslySetInnerHTML={{
                                        __html: data.pricelist_card_title2,
                                    }}
                                />
                                <div className="price_card_circle">
                                    <Typography className="price_card_price">
                                        {data.pricelist_price2 ? parse(data.pricelist_price2) : ''}
                                    </Typography>
                                </div>
                                <div
                                    className="price_card_content"
                                    style={{ flexGrow: 0 }}
                                >
                                    {data.pricelist_card_text2 ? parse(data.pricelist_card_text2) : ''}
                                </div>
                                <Button
                                    className="price_card_btn"
                                    href="mailto:info@contramatic.com?subject=5.000 EUR"
                                >
                                    {data.pricelist_card_select ? parse(data.pricelist_card_select) : ''}
                                </Button>
                                <Typography
                                    align="center"
                                    sx={{ mt: 2, color: "#131515" }}
                                    dangerouslySetInnerHTML={{
                                        __html: data.pricelist_card_revenue,
                                    }}
                                />
                            </Card>
                        </SplideSlide>
                        <SplideSlide>
                            <Card className="price_card" sx={{ mr: { xs: 2 } }}>
                                <h3
                                    className="price_card_title"
                                    dangerouslySetInnerHTML={{
                                        __html: data.pricelist_card_title3,
                                    }}
                                />
                                <div className="price_card_circle">
                                    <Typography className="price_card_price">
                                        {data.pricelist_price3 ? parse(data.pricelist_price3) : ''}
                                    </Typography>
                                </div>
                                <div className="price_card_content">
                                    {data.pricelist_card_text3 ? parse(data.pricelist_card_text3) : ''}
                                </div>
                                <Button
                                    className="price_card_btn"
                                    href="mailto:info@contramatic.com?subject=10.000 EUR"
                                >
                                    {data.pricelist_card_select ? parse(data.pricelist_card_select) : ''}
                                </Button>
                                <Typography
                                    align="center"
                                    sx={{ mt: 2, color: "#131515" }}
                                    dangerouslySetInnerHTML={{
                                        __html: data.pricelist_card_revenue,
                                    }}
                                />
                            </Card>
                        </SplideSlide>
                    </Splide>
                    <Typography
                        variant="body1"
                        align="center"
                        color="#fff"
                        fontFamily="Open Sans"
                        dangerouslySetInnerHTML={{
                            __html: data.pricelist_caution_text,
                        }}
                    />
                </div>
            </Container>
        </Box>
    );
}
