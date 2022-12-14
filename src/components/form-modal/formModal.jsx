import React, { useContext } from "react";
import { Modal, Box, Typography, Paper } from "@mui/material";
import { DataContext } from "../../context/dataContext";
import attentionIcon from "../../assets/img/icons/attention.svg";
import receivedIcon from "../../assets/img/icons/received.png";

export default function FormModal({ modal, setModal }) {
    const { data } = useContext(DataContext);
    const handleClose = () => {
        setModal({ ...modal, open: false });
    };
    return (
        <Modal keepMounted open={modal.open} onClose={handleClose}>
            <Box
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    maxWidth: { xs: 250, sm: 400 },
                    width: "100%",
                    boxShadow: 10,
                }}
            >
                <Paper
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        p: 2,
                    }}
                >
                    <img
                        src={modal.isSuccess ? receivedIcon : attentionIcon}
                        alt=""
                        style={{ width: 70, height: 70 }}
                    />
                    <Typography
                        fontSize={24}
                        variant="h3"
                        sx={{ my: 1 }}
                        dangerouslySetInnerHTML={{
                            __html: modal.isSuccess
                                ? data.alert_success
                                : data.alert_failure,
                        }}
                    />

                    <Typography
                        textAlign="center"
                        dangerouslySetInnerHTML={{ __html: modal.message }}
                    />
                </Paper>
            </Box>
        </Modal>
    );
}
