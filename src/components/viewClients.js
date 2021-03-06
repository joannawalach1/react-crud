import { useState, useEffect } from "react";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import IconButton from "@mui/material/IconButton";
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const ShowClient = () => {
    const baseURL = "http://localhost:3000/clients";
    const [clients, setClients] = useState(null);
    
    async function takeData() {
        await axios({
            url: baseURL,
            method: "GET",
        }).then((response) =>
            setClients(response.data)
        );
    }

    useEffect(() => {
        takeData();
    }, [takeData]);

    const deleteData = async id => {
        await axios.delete(`http://localhost:3000/clients/${id}`);
        var newclient = clients.filter((item) => {
            return item.id !== id;
        })
        setClients(newclient);
    }

    return (
        <div>
            <TableContainer>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell>Id klienta</TableCell>
                            <TableCell>Imię klienta</TableCell>
                            <TableCell>Nazwisko klienta</TableCell>
                            <TableCell>Email klienta</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                        {clients &&
                            clients.map((client, index) => {
                                return (
                                    <TableRow key={index}>
                                        <TableCell></TableCell>
                                        <TableCell>{client.id}</TableCell>
                                        <TableCell>{client.name}</TableCell>
                                        <TableCell>{client.surname}</TableCell>
                                        <TableCell>{client.email}</TableCell>
                                        <TableCell>
                                            <IconButton id="view" variant="contained" color="warning"><VisibilityIcon color="primary" /></IconButton>
                                            <IconButton id="edit" variant="contained" color="info"><EditIcon /></IconButton>
                                            <IconButton id="remove" variant="contained" color="secondary" onClick={() => deleteData(client.id)}><DeleteIcon color="secondary" /></IconButton>
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}


export default ShowClient;