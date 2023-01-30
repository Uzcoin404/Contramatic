import React, { useEffect, useState, useContext } from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import { db } from "../firebase";
import { collection, getDocs, doc, setDoc } from "firebase/firestore";
import { DataContext } from "../../context/dataContext";
import parse from "html-react-parser";
import FormModal from "../form-modal/formModal";

import emailIcon from "../../assets/img/icons/email.svg";
import "./footer.scss";

export default function Footer() {
    const { data } = useContext(DataContext);
    const [socialMedia, setSocialMedia] = useState(null);
    const [email, setEmail] = useState("");
    const [modal, setModal] = useState({
        open: false,
        isSuccess: null,
        message: "",
    });

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

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };
    async function sendData(e) {
        e.preventDefault();
        if (email != "") {
            if (validateEmail(email)) {
                await setDoc(doc(db, "subscribers", email), {
                    email: email,
                    date: Date.now(),
                });
                setModal({
                    open: true,
                    isSuccess: true,
                    message: data.subscribe_alert1,
                });
            } else {
                setModal({
                    open: true,
                    isSuccess: false,
                    message: data.contact_alert2,
                });
                setEmail("");
            }
        } else {
            setModal({
                open: true,
                isSuccess: false,
                message: data.contact_alert1,
            });
            setEmail("");
        }
    }
    return (
        <Box className="footer" component="footer" sx={{ mt: 4.5, pb: 7.5 }}>
            <Container>
                <Typography
                    variant="h4"
                    fontSize={32}
                    fontWeight={400}
                    color="#fff"
                    sx={{
                        "& span": {
                            color: "#131515 !important",
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
                                color="#000"
                                sx={{
                                    ml: 1.2,
                                    fontSize: { xs: "16px", sm: "20px" },
                                }}
                                dangerouslySetInnerHTML={{ __html: data.email }}
                            />
                        </a>
                        {/* <a
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
                                color="#000"
                                sx={{
                                    ml: 1.2,
                                    fontSize: { xs: "16px", sm: "20px" },
                                }}
                                dangerouslySetInnerHTML={{
                                    __html: data.phone_number,
                                }}
                            />
                        </a> */}
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
                <Box className="footer__contact">
                    <Box component="form">
                        <input
                            type="email"
                            className="footer__input"
                            placeholder={data.contact_input2?.replace(
                                /<[^>]+>/g,
                                ""
                            )}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Button
                            variant="contained"
                            type="submit"
                            onClick={sendData}
                        >
                            <span
                                dangerouslySetInnerHTML={{
                                    __html: data?.subscribe_form_btn,
                                }}
                            />
                        </Button>
                    </Box>
                </Box>
            </Container>
            <FormModal modal={modal} setModal={setModal} />
        </Box>
    );
}
