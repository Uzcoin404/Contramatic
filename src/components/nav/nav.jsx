import React, { useState, useEffect, useContext } from "react";
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
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import Parser from "html-react-parser";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import { LangContext } from "../../context/langContext";
import { DataContext } from "../../context/dataContext";
import GetStartedBtn from "../get-started/getStartedBtn";
import "./nav.scss";

import GBflag from "../../assets/img/flags/gb.svg";
import TRflag from "../../assets/img/flags/tr.svg";
import RUflag from "../../assets/img/flags/ru.svg";
import DEflag from "../../assets/img/flags/de.svg";
import ITflag from "../../assets/img/flags/it.svg";
import FRflag from "../../assets/img/flags/fr.svg";
import ESflag from "../../assets/img/flags/es.svg";

export default function Nav(props) {
    const { lang, setLang } = useContext(LangContext);
    const { data } = useContext(DataContext);
    const [languages, setlanguages] = useState(null);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        async function getLanguages() {
            const querySnapshot = await getDocs(collection(db, "languages"));
            querySnapshot.forEach((doc) => {
                setlanguages(doc.data().langs);
            });
        }
        getLanguages();
    }, []);

    const languageChange = (event) => {
        setLang(event.target.value);
    };
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const pages = [
        { to: "/", title: data?.nav_link1 },
        { to: "#aboutus", title: data?.nav_link2 },
        { to: "#software", title: data?.nav_link3 },
        { to: "#white-label", title: data?.nav_link4 },
        { to: "#contact", title: data?.nav_link5 },
    ];

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
                    <Link to={item.to} key={i}>
                        <ListItem disablePadding>
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

    const { window } = props;
    const container =
        window !== undefined ? () => window().document.body : undefined;
    return (
        <Box sx={{ flexGrow: 1 }} className="nav">
            <AppBar
                position="fixed"
                className="appbar"
                component="nav"
                sx={{ boxShadow: "none" }}
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
                        <Box
                            className="nav__list"
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
                                    dangerouslySetInnerHTML={{
                                        __html: page.title,
                                    }}
                                />
                            ))}
                        </Box>
                        <Box>
                            <FormControl sx={{ mr: 1.5 }}>
                                <Select
                                    id="language-switcher"
                                    className="language__select"
                                    value={lang}
                                    onChange={languageChange}
                                >
                                    {languages?.map((item, i) => (
                                        <MenuItem value={item.sh_name} key={i}>
                                            <img
                                                src={item?.icon}
                                                alt=""
                                                className="language_flag"
                                            />
                                            <p className="language__name">
                                                {item.name}
                                            </p>
                                        </MenuItem>
                                    ))}
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
