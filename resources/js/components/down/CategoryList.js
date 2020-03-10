import React from 'react';
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from "@material-ui/icons/Edit"
export default function CategoryList({ categories, handleEdit, handleRemove }) {
    return (
        <TableContainer component={Paper}>
            <Table arail-label="lista de documentos" >
                <TableHead>
                    <TableRow>
                        <TableCell>
                            Nª
                    </TableCell>
                        <TableCell>
                            Codigo
                    </TableCell>
                        <TableCell>
                            Nombre
                    </TableCell>
                        <TableCell>
                            Descripcion
                    </TableCell>
                        <TableCell>
                            Opciones
                    </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        categories.map((catagory, index) => (
                            <TableRow key={catagory.id}>
                                <TableCell>{index + 1}</TableCell>
                                <TableCell>{catagory.code}</TableCell>
                                <TableCell>{catagory.name}</TableCell>
                                <TableCell>{catagory.description}</TableCell>
                                <TableCell>
                                    <IconButton onClick={handleRemove(catagory)} color="primary" arial-label="editar documento" component="span">
                                        <DeleteIcon />                                    </IconButton>
                                    <IconButton onClick={handleEdit(catagory)} color="primary" arial-label="editar documento" component="span">
                                        <EditIcon />                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
}