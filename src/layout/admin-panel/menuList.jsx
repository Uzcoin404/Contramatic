import { Home, Language, Apps } from "@mui/icons-material";

const MenuList = [
    {
        icon: <Apps />,
        title: "Home",
        to: "/admin",
    },
    {
        icon: <Language />,
        title: "Languages",
        items: [
            {
                title: "English",
                to: "/admin/en"
            },
            {
                title: "Turkish",
                to: "/admin/tr",
            },
            {
                title: "Russian",
                to: "/admin/ru",
            },
        ],
    },
    {
        icon: <Home />,
        title: "Website",
        to: "/",
    },
];
export default MenuList;