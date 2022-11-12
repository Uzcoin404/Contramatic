import React, { useState } from "react";
import {
    Box,
    Paper,
    Typography,
    TextField,
    FormControl,
    InputLabel,
    OutlinedInput,
    InputAdornment,
    IconButton,
    Button,
    Alert,
} from "@mui/material";
import {
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
} from "firebase/auth";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import "./login.scss";
import { auth } from "../firebase";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState(false);
    const [user, setUser] = useState(null);

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    // onAuthStateChanged(auth, (currentUser) => {
    //     setUser(currentUser);
    // });

    function signIn(e) {
        e.preventDefault();
        setError(false);
        if (password != "") {
            signInWithEmailAndPassword(auth, email, password).catch((error) => {
                setError("Email or Password is wrong");
            });
        } else {
            setError("Enter a password");
        }
    }
    return (
        <Box className="login">
            <Paper className="login__paper">
                <Typography
                    variant="h4"
                    fontSize={26}
                    fontWeight={400}
                    color="#000"
                    className="logo__text"
                    sx={{
                        flexGrow: 1,
                        my: 2,
                        "& span": {
                            color: "#BEBEBE",
                        },
                    }}
                >
                    contra<span>matic</span>
                </Typography>
                <Box component="form">
                    <FormControl sx={{ maxWidth: 350, width: 330 }} fullWidth>
                        <TextField
                            label="Email"
                            variant="outlined"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            required
                        />
                    </FormControl>
                    <FormControl sx={{ mt: 2, maxWidth: 350, width: 330 }}>
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <OutlinedInput
                            id="password"
                            type={showPassword ? "text" : "password"}
                            value={password}
                            required
                            onChange={(e) => setPassword(e.target.value)}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? (
                                            <VisibilityOff />
                                        ) : (
                                            <Visibility />
                                        )}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Password"
                        />
                    </FormControl>
                    <Button
                        variant="contained"
                        className="login__button"
                        size="large"
                        type="submit"
                        onClick={(e) => signIn(e)}
                    >
                        Sign in
                    </Button>
                    {error ? (
                        <Alert severity="error" className="login__alert">
                            {error}
                        </Alert>
                    ) : null}
                    {user?.email}
                </Box>
            </Paper>
        </Box>
    );
}
