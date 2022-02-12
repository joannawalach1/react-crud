import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import RemoveClient from "./../components/removeClient";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";

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
         console.log(item);
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
                            clients.map((client) => {
                                return (
                                    <TableRow key={client.id}>
                                        <TableCell></TableCell>
                                        <TableCell>{client.id}</TableCell>
                                        <TableCell>{client.name}</TableCell>
                                        <TableCell>{client.surname}</TableCell>
                                        <TableCell>{client.email}</TableCell>
                                        <TableCell>
                                            <Button id="edit" variant="contained" color="info">edit</Button>
                                            <Button id="remove" variant="contained" color="error" onClick={() => deleteData(client.id)}>delete</Button>
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default ShowClient;