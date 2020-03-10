import React from 'react';
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from "@material-ui/icons/Edit"
export default function DocumentIdentityList({ documents, handleEdit, handleRemove }) {

    return (
        <TableContainer component={Paper}>
            <Table arail-label="lista de documentos" >
                <TableHead>
                    <TableRow>
                        <TableCell>
                            Nª
                        </TableCell>
                        <TableCell>
                            Nombre Corto
                        </TableCell>
                        <TableCell>
                            Nombre Completo
                        </TableCell>
                        <TableCell>
                            Limite
                        </TableCell>
                        <TableCell>
                            Opciones
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        documents.map((document, index) => (
                            <TableRow key={document.id}>
                                <TableCell>{index + 1}</TableCell>
                                <TableCell>{document.shortName}</TableCell>
                                <TableCell>{document.fullName}</TableCell>
                                <TableCell>{document.limit}</TableCell>
                                <TableCell>
                                    <IconButton onClick={handleRemove(document)} color="primary" arial-label="editar documento" component="span">
                                        <DeleteIcon />                                    </IconButton>
                                    <IconButton onClick={handleEdit(document)} color="primary" arial-label="editar documento" component="span">
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