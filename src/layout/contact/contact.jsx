import React, { useContext, useState, useRef } from "react";
import {
    Box,
    Container,
    TextField,
    FormControl,
    Typography,
} from "@mui/material";
import { DataContext } from "../../context/dataContext";
import GetStartedBtn from "../../components/get-started/getStartedBtn";
import FormModal from "../../components/form-modal/formModal";
import { title } from "../styles";
import "./contact.scss";

export default function Contact() {
    const { data } = useContext(DataContext);
    const [email, setEmail] = useState("");
    const [theme, setTheme] = useState("");
    const [message, setMessage] = useState("");
    const [modal, setModal] = useState({
        open: false,
        isSuccess: null,
        message: "",
    });

    const form = useRef();
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
                setModal({
                    open: true,
                    isSuccess: true,
                    message: "Your message has been sent",
                });
                setEmail("")
                setTheme("")
                setMessage("")
            } else {
                setModal({
                    open: true,
                    isSuccess: false,
                    message: "Email is incorrect, <br> Please use a valid email address",
                });
            }
        } else {
            setModal({
                open: true,
                isSuccess: false,
                message: "Please fill out all fields",
            });
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
        top: "40%",
        left: "50%",
        transform: "translate(-50%, -50%)",
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
                    ref={form}
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
                            className="contact__input"
                            size="large"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            sx={{
                                mb: 3.5,
                                "& .MuiInputBase-root": {
                                    color: "#fff",
                                },
                                "& label.Mui-focused": {
                                    color: "#fff",
                                },
                                "& label": {
                                    fontSize: 18,
                                },
                                "& .MuiOutlinedInput-root.Mui-focused fieldset":
                                    {
                                        borderColor: "#fff",
                                    },
                            }}
                            multiline
                            rows={6}
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
            <FormModal modal={modal} setModal={setModal} />
        </Box>
    );
}
