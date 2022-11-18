import React, { useState, useEffect } from "react";
import { NavLink as Link } from "react-router-dom";
import { db } from "../../../components/firebase";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
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
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Alert,
    Typography,
    Button,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Projects() {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [projects, setProjects] = useState(null);
    const [selectedItem, setSelectedItem] = useState(null);
    const [open, setOpen] = useState(false);
    const [updateData, setUpdateData] = useState(false);

    useEffect(() => {
        async function getData() {
            const querySnapshot = await getDocs(collection(db, "projects"));
            const data = [];
            querySnapshot.forEach((doc) => {
                let newData = doc.data();
                newData["doc_id"] = doc.id;
                data.push(newData);
            });
            setProjects(data);
        }
        getData();
    }, [updateData]);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handleClose = () => {
        setOpen(false);
    };
    async function deleteSocial() {
        await deleteDoc(doc(db, "projects", selectedItem));
        setUpdateData(!updateData);
        handleClose();
    }

    if (projects) {
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
                            {projects
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
                                                {i + 1}
                                            </TableCell>
                                            <TableCell align="center">
                                                {row.title}
                                            </TableCell>
                                            <TableCell align="center">
                                                <img
                                                    src={row.icon}
                                                    alt=""
                                                    style={{
                                                        width: 180,
                                                        height: 40,
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
                                                <IconButton
                                                    sx={{ ml: 1 }}
                                                    onClick={() => {
                                                        setOpen(true);
                                                        setSelectedItem(
                                                            row?.doc_id
                                                        );
                                                    }}
                                                >
                                                    <DeleteIcon />
                                                </IconButton>
                                            </TableCell>
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        flexWrap: "wrap",
                        alignItems: "center",
                    }}
                >
                    <Link to="add" state={projects.length}>
                        <Button variant="contained">Add new</Button>
                    </Link>
                    <TablePagination
                        rowsPerPageOptions={[10, 25, 50]}
                        component="div"
                        count={projects.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Box>
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Delete Social media</DialogTitle>
                    <DialogContent>
                        <Alert
                            severity="error"
                            sx={{ mt: 2, width: "100%", maxWidth: 500 }}
                        >
                            <Typography>
                                This will permanently delete this Item
                            </Typography>
                        </Alert>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} sx={{ mr: 1 }}>
                            Cancel
                        </Button>
                        <Button color="error" onClick={deleteSocial} autoFocus>
                            Delete
                        </Button>
                    </DialogActions>
                </Dialog>
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
