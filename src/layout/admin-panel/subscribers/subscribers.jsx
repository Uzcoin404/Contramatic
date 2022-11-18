import React, { useState, useEffect } from "react";
import { NavLink as Link } from "react-router-dom";
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

export default function Subscribers() {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [subscribers, setSubscribers] = useState(null);

    useEffect(() => {
        async function getData() {
            const querySnapshot = await getDocs(collection(db, "subscribers"));
            const data = [];
            querySnapshot.forEach((doc) => {
                data.push(doc.data());
            });
            setSubscribers(data);
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
    function unixToTime(unix) {
        let date = new Date(unix);
        return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
    }

    if (subscribers) {
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
                            {subscribers
                                .slice(
                                    page * rowsPerPage,
                                    page * rowsPerPage + rowsPerPage
                                )
                                .map((row, i) => {
                                    let date = unixToTime(row.date);
                                    return (
                                        <TableRow
                                            hover
                                            role="checkbox"
                                            tabIndex={-1}
                                            key={i}
                                        >
                                            <TableCell align="left">
                                                {i+1}
                                            </TableCell>
                                            <TableCell align="center">
                                                {row.email}
                                            </TableCell>
                                            <TableCell align="center">
                                                {date}
                                            </TableCell>
                                            {/* <TableCell align="right">
                                                <Link
                                                    to={row?.id?.toString()}
                                                    state={row}
                                                >
                                                    <IconButton>
                                                        <EditIcon />
                                                    </IconButton>
                                                </Link>
                                            </TableCell> */}
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 50]}
                    component="div"
                    count={subscribers.length}
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
    { id: "email", label: "Email", minWidth: 200 },
    {
        id: "date",
        label: "Registered date",
        minWidth: 100,
        align: "center",
    },
    // {
    //     id: "tools",
    //     label: "Tools",
    //     minWidth: 50,
    //     align: "right",
    // },
];
