import React, { useState, useContext, useEffect } from "react";
import { useParams, useNavigate, NavLink as Link } from "react-router-dom";
import { DataContext } from "../../context/dataContext";
import { db } from "../firebase";
import { doc, getDoc, onSnapshot } from "firebase/firestore";
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

export default function Posts() {
    const [posts, setPosts] = useState(null);
    const { langId } = useParams();
    const navigate = useNavigate();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    useEffect(() => {
        async function getData() {
            const docRef = doc(db, "data", langId);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                setPosts(Object.values(docSnap.data()));
            } else {
                console.log("No such document!");
            }
        }
        getData();
    }, [langId]);

    if (posts) {
        console.log(posts);
    }

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    if (posts) {
        return (
            <Paper sx={{ width: "100%", overflow: "hidden" }}>
                <TableContainer sx={{ maxHeight: 700 }}>
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
                            {posts
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
                                            key={row.code}
                                        >
                                            <TableCell key={i} align="left">
                                                {row.id}
                                            </TableCell>
                                            <TableCell key={i} align="center">
                                                {row.title}
                                            </TableCell>
                                            <TableCell key={i} align="center">
                                                {row.keyword}
                                            </TableCell>
                                            <TableCell key={i} align="center">
                                                {row.position}
                                            </TableCell>
                                            <TableCell align="right">
                                                <Link to={row.id} state={row}>
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
                    count={posts.length}
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
        id: "keyword",
        label: "Keyword",
        minWidth: 100,
        align: "right",
    },
    {
        id: "position",
        label: "Position",
        minWidth: 100,
        align: "right",
    },
    {
        id: "tools",
        label: "Tools",
        minWidth: 50,
        align: "right",
    },
];
