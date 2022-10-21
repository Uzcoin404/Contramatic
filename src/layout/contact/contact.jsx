import React, { useContext, useState } from "react";
import {
    Box,
    Container,
    TextField,
    FormControl,
    Typography,
    Modal,
    Alert,
    AlertTitle,
} from "@mui/material";
import { DataContext } from "../../context/dataContext";
import GetStartedBtn from "../../components/get-started/getStartedBtn";
import { title } from "../styles";
import "./contact.scss";

export default function Contact() {
    const { data } = useContext(DataContext);
    const [email, setEmail] = useState("");
    const [theme, setTheme] = useState("");
    const [message, setMessage] = useState("");
    const [open, setOpen] = useState(false);
    const [error, setError] = useState("");
    const handleClose = () => setOpen(false);
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
            pt: 0,
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

    function handleClick(e) {
        e.preventDefault();
        if ((email != "" && theme != "", message != "")) {
            if (validateEmail(email)) {
                window.location.reload(false);
            } else {
                setError("Email is incorrect");
                setOpen(true);
            }
        } else {
            setError("Please fill out all fields");
            setOpen(true);
        }
    }
    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const style = {
        position: "absolute",
        top: "5%",
        left: "5%",
        maxWidth: 400,
        width: "100%",
        boxShadow: 10,
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
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
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
                            value={theme}
                            onChange={(e) => setTheme(e.target.value)}
                        />
                    </FormControl>
                    <FormControl fullWidth>
                        <TextField
                            label="Your message"
                            variant="outlined"
                            className="contact__input contact__textfield"
                            size="large"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
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
                                "& .MuiOutlinedInput-root.Mui-focused fieldset":
                                    {
                                        borderColor: "#fff",
                                    },
                            }}
                        />
                    </FormControl>
                    <Box sx={{ display: "flex", justifyContent: "end" }}>
                        <GetStartedBtn
                            withArrow={true}
                            isSubmit={true}
                            onClick={handleClick}
                        />
                    </Box>
                </Box>
            </Container>
            <Modal keepMounted open={open} onClose={handleClose}>
                <Box sx={style}>
                    <Alert severity="error">
                        <AlertTitle>Error</AlertTitle>
                        {error}
                    </Alert>
                </Box>
            </Modal>
        </Box>
    );
}
