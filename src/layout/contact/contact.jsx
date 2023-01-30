import React, { useContext, useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
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
import parse from "html-react-parser";
import { title } from "../styles";
import "./contact.scss";
import contantMap from "../../assets/img/map.png";

export default function Contact() {
    const navigator = useNavigate();
    const { data } = useContext(DataContext);
    const [name, setName] = useState("");
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
                const formData = new FormData();
                formData.append("user_name", name);
                formData.append("user_email", email);
                formData.append("user_theme", theme);
                formData.append("user_message", message);
                emailjs
                    .sendForm(
                        "service_cypf1tp",
                        "template_r1ppuyb",
                        formData,
                        "5VRAmi8XKMwmBkk79"
                    )
                    .then(
                        (result) => {
                            console.log(result.text);
                            setModal({
                                open: true,
                                isSuccess: true,
                                message: data.contact_alert3,
                            });
                        },
                        (error) => {
                            console.log(error.text);
                        }
                    );
                setName("");
                setEmail("");
                setTheme("");
                setMessage("");
            } else {
                setModal({
                    open: true,
                    isSuccess: false,
                    message: data.contact_alert2,
                });
            }
        } else {
            setModal({
                open: true,
                isSuccess: false,
                message: data.contact_alert1,
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
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        mb: 4,
                    }}
                    className="contact_map"
                >
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            flexWrap: "wrap",
                            justifyContent: "center",
                        }}
                    >
                        <img
                            src={contantMap}
                            alt=""
                            className="contact_map_img"
                        />
                        <Box className="contact_map_text">
                            {data.contact_map_text
                                ? parse(data.contact_map_text)
                                : ""}
                        </Box>
                    </Box>
                </Box>
                <Box
                    component="form"
                    action="#"
                    sx={{ margin: "0 auto", width: "max-content" }}
                    ref={form}
                >
                    <Box>
                        <FormControl>
                            <TextField
                                label={data.contact_input1?.replace(
                                    /<[^>]+>/g,
                                    ""
                                )}
                                variant="outlined"
                                className="contact__input"
                                size="large"
                                sx={inputStyle}
                                style={{ marginRight: 45 }}
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </FormControl>
                        <FormControl>
                            <TextField
                                label={data.contact_input2?.replace(
                                    /<[^>]+>/g,
                                    ""
                                )}
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
                            label={data.contact_input3?.replace(/<[^>]+>/g, "")}
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
                            label={data.contact_input4?.replace(/<[^>]+>/g, "")}
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
