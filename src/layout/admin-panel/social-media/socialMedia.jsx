import React, { useState, useContext, useEffect } from "react";
import { useParams, useNavigate, NavLink as Link } from "react-router-dom";
import { DataContext } from "../../../context/dataContext";
import { db } from "../../../components/firebase";
import { collection, getDocs } from "firebase/firestore";
import {
    Box,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
    Paper,
    IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

export default function SocialMedia() {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [socialMedia, setSocialMedia] = useState(null);

    useEffect(() => {
        async function getData() {
            const querySnapshot = await getDocs(collection(db, "social-media"));
            const data = [];
            querySnapshot.forEach((doc) => {
                // setSocialMedia(doc.data());
                data.push(doc.data());
            });
            setSocialMedia(data);
        }
        getData();
    }, []);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    if (socialMedia) {
        return (
            <Paper sx={{ width: "100%", overflow: "hidden" }}>
                <TableContainer>
                    <Table stickyHeader size="small">
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth }}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {socialMedia
                                .slice(
                                    page * rowsPerPage,
                                    page * rowsPerPage + rowsPerPage
                                )
                                .map((row, i) => {
                                    return (
                                        <TableRow
                                            hover
                                            role="checkbox"
                                            tabIndex={-1}
                                            key={i}
                                        >
                                            <TableCell align="left">
                                                {row.id}
                                            </TableCell>
                                            <TableCell align="center">
                                                {row.title}
                                            </TableCell>
                                            <TableCell align="center">
                                                <img
                                                    src={row.icon}
                                                    alt=""
                                                    style={{
                                                        width: 45,
                                                        height: 45,
                                                    }}
                                                />
                                            </TableCell>
                                            <TableCell align="right">
                                                <Link
                                                    to={row?.id?.toString()}
                                                    state={row}
                                                >
                                                    <IconButton>
                                                        <EditIcon />
                                                    </IconButton>
                                                </Link>
                                            </TableCell>
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 50]}
                    component="div"
                    count={socialMedia.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        );
    }
}
const columns = [
    { id: "id", label: "#" },
    { id: "title", label: "Title", minWidth: 200 },
    {
        id: "icon",
        label: "Icon",
        minWidth: 100,
        align: "center",
    },
    {
        id: "tools",
        label: "Tools",
        minWidth: 50,
        align: "right",
    },
];
