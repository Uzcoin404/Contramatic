import React, {useContext} from "react";
import {
    Box,
    Container,
    TextField,
    FormControl,
    Typography,
} from "@mui/material";
import { DataContext } from "../../context/dataContext";
import GetStartedBtn from "../../components/get-started/getStartedBtn";
import { title } from "../styles";
import "./contact.scss";

export default function Contact() {
    const {data} = useContext(DataContext);
    const inputStyle = {
        minWidth: "385px",
        mb: 3.5,
        fontSize: 18,
        "& .MuiInputBase-root": {
            height: 65,
            color: "#fff",
            padding: "0 20px",
        },
        "& label.Mui-focused": {
            color: "#fff",
            pl: 0,
            pt: 0
        },
        "& label": {
            pl: 1,
            pt: 0.5,
            fontSize: 18,
        },
        "& .MuiOutlinedInput-root.Mui-focused fieldset": {
            borderColor: "#fff",
        },
    };
    return (
        <Box className="contact" id="contact">
            <Container>
                <Typography
                    variant="h2"
                    className="section__title"
                    style={title}
                    sx={{ mb: "50px !important", textAlign: "center" }}
                    dangerouslySetInnerHTML={{ __html: data.contact_title }}
                />
                <Box
                    component="form"
                    action="#"
                    sx={{ margin: "0 auto", width: "max-content" }}
                >
                    <Box>
                        <FormControl>
                            <TextField
                                label="Your name"
                                variant="outlined"
                                className="contact__input"
                                size="large"
                                sx={inputStyle}
                                style={{ marginRight: 45 }}
                            />
                        </FormControl>
                        <FormControl>
                            <TextField
                                label="Your email"
                                variant="outlined"
                                className="contact__input"
                                size="large"
                                sx={inputStyle}
                                required
                                type="email"
                            />
                        </FormControl>
                    </Box>
                    <FormControl fullWidth>
                        <TextField
                            label="Theme"
                            variant="outlined"
                            className="contact__input"
                            size="large"
                            sx={inputStyle}
                            style={{ minWidth: "100%" }}
                            required
                        />
                    </FormControl>
                    <FormControl fullWidth>
                        <TextField
                            label="Your message"
                            variant="outlined"
                            className="contact__input contact__textfield"
                            size="large"
                            sx={{
                                minWidth: "100%",
                                mb: 4,
                                "& .MuiInputBase-root": {
                                    height: 210,
                                    color: "#fff",
                                    padding: "0 20px",
                                },
                                "& label.Mui-focused": {
                                    color: "#fff",
                                },
                                "& label": {
                                    pl: 1,
                                    fontSize: 18,
                                },
                                "& .MuiOutlinedInput-root.Mui-focused fieldset": {
                                    borderColor: "#fff",
                                },
                            }}
                            required
                        />
                    </FormControl>
                    <Box sx={{ display: "flex", justifyContent: "end" }}>
                        <GetStartedBtn withArrow={true} isSubmit={true} />
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}
