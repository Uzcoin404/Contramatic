import React, { useState, createRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../components/firebase";
import {
    updatePassword,
    EmailAuthProvider,
    reauthenticateWithCredential,
} from "firebase/auth";
import {
    Box,
    TextField,
    Typography,
    InputAdornment,
    IconButton,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { VisibilityOff, Visibility } from "@mui/icons-material";

export default function ChangePassword() {
    const [loading, setLoading] = useState(false);
    const [errorPass, setErrorPass] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [isPasswordTrue, setisPasswordTrue] = useState(false);
    const oldPasswordForm = createRef();
    const newPasswordForm = createRef();
    const history = useNavigate();

    async function reAuthUser(e) {
        e.preventDefault();
        setLoading(true);
        let formData = new FormData(oldPasswordForm.current);
        const credential = EmailAuthProvider.credential(
            auth.currentUser.email,
            formData.get("oldPassword")
        );
        const result = await reauthenticateWithCredential(
            auth.currentUser,
            credential
        )
            .then(() => {
                setisPasswordTrue(true);
                setLoading(false);
            })
            .catch((error) => {
                setLoading(false);
                setErrorPass(true);
            });
    }
    async function updatePass(e) {
        e.preventDefault();
        setLoading(true);
        let formData = new FormData(newPasswordForm.current);
        updatePassword(auth.currentUser, formData.get("password"))
            .then(() => {
                setLoading(false);
                history(-1);
            })
            .catch((error) => {
                setLoading(false);
            });
    }

    return (
        <Box className="changePassword" sx={{ p: 2 }}>
            {!isPasswordTrue ? (
                <form action="#" ref={oldPasswordForm} onSubmit={reAuthUser}>
                    <Typography sx={{ mb: 2 }}>
                        Enter your password again
                    </Typography>
                    <TextField
                        type="password"
                        label="Enter password"
                        variant="outlined"
                        name="oldPassword"
                        error={errorPass}
                        required
                        helperText={!errorPass ? "" : "Incorrect password"}
                    />
                    <LoadingButton
                        type="submit"
                        loading={loading}
                        variant="contained"
                        sx={{ display: "flex", mt: 2 }}
                    >
                        Submit
                    </LoadingButton>
                </form>
            ) : null}
            {isPasswordTrue ? (
                <form action="#" ref={newPasswordForm} onSubmit={updatePass}>
                    <Typography sx={{ mb: 2 }}>Enter a new Password</Typography>
                    <TextField
                        type={!showPassword ? "password" : "text"}
                        label="New password"
                        variant="outlined"
                        name="password"
                        required
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        onClick={() => {
                                            setShowPassword(!showPassword);
                                        }}
                                        edge="end"
                                    >
                                        {showPassword ? (
                                            <VisibilityOff />
                                        ) : (
                                            <Visibility />
                                        )}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                    <LoadingButton
                        type="submit"
                        loading={loading}
                        variant="contained"
                        sx={{ display: "flex", mt: 2 }}
                    >
                        Change Password
                    </LoadingButton>
                </form>
            ) : null}
        </Box>
    );
}
