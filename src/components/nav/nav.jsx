import React from "react";
import { NavLink as Link } from "react-router-dom";
import {
    AppBar,
    Box,
    Toolbar,
    Container,
    Typography,
    FormControl,
    Select,
    MenuItem,
    Drawer,
    Divider,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import GetStartedBtn from "../get-started/getStartedBtn";
import pages from "../../pages";
import "./nav.scss";

import GBflag from "../../assets/img/flags/gb.svg";
import TRflag from "../../assets/img/flags/tr.svg";
import RUflag from "../../assets/img/flags/ru.svg";
import DEflag from "../../assets/img/flags/de.svg";
import ITflag from "../../assets/img/flags/it.svg";
import FRflag from "../../assets/img/flags/fr.svg";
import ESflag from "../../assets/img/flags/es.svg";

export default function Nav(props) {
    const [language, setlanguage] = React.useState("gb");

    const languageChange = (event) => {
        setlanguage(event.target.value);
    };
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
            <Typography
                variant="h4"
                fontSize={26}
                fontWeight={400}
                fontFamily="Arvo"
                color="#fff"
                className="logo__text"
                sx={{
                    flexGrow: 1,
                    my: 2,
                    "& span": {
                        color: "#BEBEBE",
                        fontFamily: "Arvo",
                    },
                }}
            >
                contra<span>matic</span>
            </Typography>
            <Divider />
            <List>
                {pages.map((item, i) => (
                    <Link to={item.to}>
                        <ListItem key={i} disablePadding>
                            <ListItemButton sx={{ textAlign: "center" }}>
                                <ListItemText
                                    sx={{
                                        color: "#fff",
                                        textTransform: "capitalize",
                                    }}
                                    primary={item.title}
                                />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                ))}
            </List>
        </Box>
    );

    const container =
        window !== undefined ? () => window().document.body : undefined;
    return (
        <Box sx={{ flexGrow: 1 }} className="nav">
            <AppBar
                position="fixed"
                className="appbar"
                component="nav"
                sx={{ boxShadow: "none", pt: 4.5, pb: 5 }}
            >
                <Container>
                    <Toolbar>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{
                                    display: { xs: "flex", md: "none" },
                                    mr: 2,
                                }}
                                onClick={handleDrawerToggle}
                            >
                                <MenuIcon fontSize="large" />
                            </IconButton>
                            <Link to="/" style={{ marginRight: 30 }}>
                                <Typography
                                    variant="h4"
                                    fontSize={26}
                                    fontWeight={400}
                                    fontFamily="Arvo"
                                    color="#fff"
                                    className="logo__text"
                                    sx={{
                                        flexGrow: 1,
                                        "& span": {
                                            color: "#BEBEBE",
                                            fontFamily: "Arvo",
                                        },
                                    }}
                                >
                                    contra<span>matic</span>
                                </Typography>
                            </Link>
                        </Box>
                        <Box className="nav__list"
                            sx={{
                                flexGrow: 1,
                                display: { xs: "none", md: "flex" },
                                columnGap: "24px",
                            }}
                        >
                            {pages.map((page, i) => (
                                <Link
                                    key={i}
                                    to={page.to}
                                    className="nav__link"
                                >
                                    {page.title}
                                </Link>
                            ))}
                        </Box>
                        <Box>
                            <FormControl sx={{ mr: 1.5 }}>
                                <Select
                                    id="language-switcher"
                                    className="language__select"
                                    value={language}
                                    onChange={languageChange}
                                >
                                    <MenuItem value={"gb"}>
                                        <img
                                            src={GBflag}
                                            alt=""
                                            className="language_flag"
                                        />
                                        <p className="language__name">
                                            English
                                        </p>
                                    </MenuItem>
                                    <MenuItem value={"tr"}>
                                        <img
                                            src={TRflag}
                                            alt=""
                                            className="language_flag"
                                        />
                                        <p className="language__name">Türkçe</p>
                                    </MenuItem>
                                    <MenuItem value={"ru"}>
                                        <img
                                            src={RUflag}
                                            alt=""
                                            className="language_flag"
                                        />
                                        <p className="language__name">
                                            Русский
                                        </p>
                                    </MenuItem>
                                    <MenuItem value={"de"}>
                                        <img
                                            src={DEflag}
                                            alt=""
                                            className="language_flag"
                                        />
                                        <p className="language__name">
                                            Deutsche
                                        </p>
                                    </MenuItem>
                                    <MenuItem value={"it"}>
                                        <img
                                            src={ITflag}
                                            alt=""
                                            className="language_flag"
                                        />
                                        <p className="language__name">
                                            Italiano
                                        </p>
                                    </MenuItem>
                                    <MenuItem value={"fr"}>
                                        <img
                                            src={FRflag}
                                            alt=""
                                            className="language_flag"
                                        />
                                        <p className="language__name">
                                            Français
                                        </p>
                                    </MenuItem>
                                    <MenuItem value={"es"}>
                                        <img
                                            src={ESflag}
                                            alt=""
                                            className="language_flag"
                                        />
                                        <p className="language__name">
                                            Español
                                        </p>
                                    </MenuItem>
                                </Select>
                            </FormControl>
                            <GetStartedBtn />
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: "flex", md: "none" },
                        "& .MuiDrawer-paper": {
                            backgroundColor: "#5e5e5e",
                            boxSizing: "border-box",
                            width: 250,
                        },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </Box>
    );
}
