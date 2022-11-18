import React, { useState, useEffect, useContext } from "react";
import { HashLink as Link } from "react-router-hash-link";
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
} from "@mui/material";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import { LangContext } from "../../context/langContext";
import { DataContext } from "../../context/dataContext";
import GetStartedBtn from "../get-started/getStartedBtn";
import "./nav.scss";

export default function Nav(props) {
    const { lang, setLang } = useContext(LangContext);
    const { data } = useContext(DataContext);
    const [languages, setlanguages] = useState(null);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        async function getLanguages() {
            const docRef = doc(db, "languages", "HLxO6mAhdDMjduI800aL");
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                setlanguages(docSnap.data().langs);
            }
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
        { to: "#home", title: data?.nav_link1 },
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
                color="#fff"
                className="logo__text"
                sx={{
                    flexGrow: 1,
                    my: 2,
                    "& span": {
                        color: "#BEBEBE",
                    },
                }}
                dangerouslySetInnerHTML={{ __html: data.logo_text }}
            />
            <Divider />
            <List>
                {pages.map((item, i) => (
                    <Link smooth to={item.to} key={i}>
                        <ListItem disablePadding>
                            <ListItemButton sx={{ textAlign: "center" }}>
                                <Typography
                                    sx={{
                                        fontFamily: "Chunkfive ex",
                                        color: "#fff",
                                        textTransform: "capitalize",
                                        margin: "0 auto",
                                    }}
                                    dangerouslySetInnerHTML={{
                                        __html: item.title,
                                    }}
                                />
                            </ListItemButton>
                        </ListItem>
                        <Divider />
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
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                columnGap: "30px",
                            }}
                        >
                            <IconButton
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{
                                    display: { xs: "flex", md: "none" },
                                    // mr: 2,
                                }}
                                onClick={handleDrawerToggle}
                            >
                                <MenuIcon fontSize="large" />
                            </IconButton>
                            <Link to="/">
                                <Typography
                                    variant="h4"
                                    fontSize={26}
                                    fontWeight={400}
                                    color="#fff"
                                    className="logo__text"
                                    sx={{
                                        flexGrow: 1,
                                        "& span": {
                                            color: "#BEBEBE",
                                        },
                                    }}
                                    dangerouslySetInnerHTML={{
                                        __html: data.logo_text,
                                    }}
                                />
                            </Link>
                        </Box>
                        <Box
                            className="nav__list"
                            sx={{
                                flexGrow: 1,
                                ml: 5,
                                display: { xs: "none", md: "flex" },
                                columnGap: "24px",
                            }}
                        >
                            {pages.map((page, i) => (
                                <Link
                                    smooth
                                    key={i}
                                    to={page.to}
                                    className="nav__link"
                                    dangerouslySetInnerHTML={{
                                        __html: page.title,
                                    }}
                                />
                            ))}
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
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
                            <GetStartedBtn link="http://golden90.link" />
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
                            width: 220,
                        },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </Box>
    );
}
